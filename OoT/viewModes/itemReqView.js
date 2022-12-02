window.RandoStuffs.OoT.viewModes.itemReqView.start_sessionInstace = ()=>{

	//
	let OoT = window.RandoStuffs.OoT;
	let core = OoT.core;
	let itemList = core.Item.list;
	//

	window.RandoStuffs.OoT.viewModes.itemReqView.sessionInstance = {
		data : null,
		reset : function(workspace){
			this.data = null;
			window.RandoStuffs.OoT.viewModes.itemReqView.init(workspace);
		},
		initialize : function(fromJSON){
			if(!this.data){

				// user file settings
				if(fromJSON){
					this.set_fromObjOfJSON(fromJSON);
				// default app settings :
				}else{
					// data
					let instance = {};
		
					// OoT item selection (input panel)
				
						// selectedItemList
						instance.selectedItemList = new Set();
				
						// itemQuantities
						instance.itemQuantities = {};
						Object.keys(itemList).forEach( e=>instance.itemQuantities[e]=Number.POSITIVE_INFINITY );
				
					// display info settings selection (input panel)
		
						// conditionGroups
						instance.conditionGroups = {};
		
						// settingsList
						instance.settingsList = null;
		
					this.data = instance;
					DEBUG_EXPORT__sessionInstance = OoT.viewModes.itemReqView.sessionInstance.data;
				}

			}
		},
		get_objForJSON : function(){
			// during JSON.stringify() :
			// - Number.POSITIVE_INFINITY gets : null
			// - 'Set' instances get : {} // (empty Object)
			// - (new Array()).prop are ignored
			let conditionGroups = {};
			Object.keys(this.data.conditionGroups).forEach(e=>{
				conditionGroups[e] = {
					array : this.data.conditionGroups[e],
					props : {general:this.data.conditionGroups[e].general},
				}
			});
			return {
				selectedItemList : [...this.data.selectedItemList],
				itemQuantities   : this.data.itemQuantities,
				conditionGroups  : conditionGroups,
				settingsList     : this.data.settingsList,
			};
		},
		set_fromObjOfJSON : function(fromJSON){
			this.data = {};

			// selectedItemList
			if(fromJSON.selectedItemList)
				this.data.selectedItemList = new Set(fromJSON.selectedItemList);
			else
				this.data.selectedItemList = new Set();
			// itemQuantities
			if(fromJSON.itemQuantities){
				let obj = fromJSON.itemQuantities;
				Object.keys(obj).forEach(e=>{obj[e]=(obj[e]===null?Number.POSITIVE_INFINITY:obj[e])});
				this.data.itemQuantities = obj;
			}else{
				this.data.itemQuantities = {};
				Object.keys(itemList).forEach( e=>this.data.itemQuantities[e]=Number.POSITIVE_INFINITY );
			}
			// conditionGroups
			if(fromJSON.conditionGroups){
				let conditionGroups = {};
				Object.keys(fromJSON.conditionGroups).forEach(e=>{
					conditionGroups[e] = fromJSON.conditionGroups[e].array;
					conditionGroups[e].general = fromJSON.conditionGroups[e].props.general;
				});
				this.data.conditionGroups = conditionGroups;
			}else{
				this.data.conditionGroups = {};
			}
			// settingsList
			if(fromJSON.settingsList){
				// displayRequestResultMaxByItem
				let val = fromJSON.settingsList.displayRequestResultMaxByItem;
				fromJSON.settingsList.displayRequestResultMaxByItem = (val===null?Number.POSITIVE_INFINITY:val);
				// displayRequestResultWithAreaCtx
				val = fromJSON.settingsList.displayRequestResultWithAreaCtx.quantity;
				fromJSON.settingsList.displayRequestResultWithAreaCtx.quantity = (val===null?Number.POSITIVE_INFINITY:val);
				// displayRequestResultWithLocCtx
				val = fromJSON.settingsList.displayRequestResultWithLocCtx.quantity;
				fromJSON.settingsList.displayRequestResultWithLocCtx.quantity = (val===null?Number.POSITIVE_INFINITY:val);
				// settingsList
				this.data.settingsList = fromJSON.settingsList;
			}else{
				this.data.settingsList = null;
			}
		},
	};
};

/* window.RandoStuffs.OoT.viewModes.itemReqView.open_importDataPrompt = ()=>{

}; */

window.RandoStuffs.OoT.viewModes.itemReqView.reset = function(workspace){
	window.RandoStuffs.OoT.viewModes.itemReqView.sessionInstance.reset(workspace);
};

window.RandoStuffs.OoT.viewModes.itemReqView.init = function(workspace){

	// use sessionInstance
	let viewMode = this;

	//
	workspace.textContent = '';
	let mode = document.createElement('div');
	workspace.appendChild(mode);


	mode.style.position = 'absolute';
	mode.style.inset = 0;
	mode.style.display = 'flex';
	mode.style.flexDirection = 'column';
	mode.style.justifyContent = 'center';
	mode.style.alignItems = 'center';
	mode.style.flexWrap = 'wrap';
	mode.style.overflowX = 'auto';
	mode.style.userSelect = 'none';

	// mode.theApp.shiftKey
	(()=>{
		mode.theApp = {};
		mode.theApp.shiftKey = false;
		mode.theApp.ctrlKey = false;
		let update_keys = (e)=>{
			mode.theApp.shiftKey=e.shiftKey;
			mode.theApp.ctrlKey=e.ctrlKey;
		};
		mode.onkeydown = (e)=>{update_keys(e)};
		mode.onkeyup = (e)=>{update_keys(e)};
	})();

	//

	let OoT = window.RandoStuffs.OoT;

	let spoilerFile = OoT.fileSlots.spoilerLog;
	let allSettingsFile = OoT.fileSlots.allSettings;
	let viewModeInstance = allSettingsFile.data?.viewModes.itemReqView;

	let core = OoT.core;

	let itemList = core.Item.list; // { itemName:'item gfx data url', ... }

	let areaList = core.Area.list;

	let mapPosList = core.Area.mapPos;

	let areaCtxList = core.Area.context;

	let locList = core.Location.list;

	let locCtxList = core.Location.context;
	
	let appLocs = core.Location.Data;

	// sessionInstance
	if(!viewMode.sessionInstance)
		viewMode.start_sessionInstace();
	let sessionInstance = viewMode.sessionInstance;
	sessionInstance.initialize(viewModeInstance);
	sessionInstance = sessionInstance.data;


	//
	// //
	//


	// OoT item selection (input panel)
	///////////////////////////////////

	// items selection settings PART
	//
	let {
		selectedItemList,
		itemQuantities
	} = sessionInstance;
	
	// items selection interface building PART
	//
	(()=>{
		// make panel's viewport sys
		////////////////////////////
		let panel = document.createElement('div');
		panel.style.overflowY = 'scroll';
		panel.style.height = '75%';
		panel.style.backgroundColor = '#c5e4ff';

		// make filter options panel
		////////////////////////////
		let filterOptionPan = document.createElement('div');
		//filterOptionPan.style.height = 200;
		filterOptionPan.style.backgroundColor = 'rgb(208, 240, 255)';
		filterOptionPan.style.position = 'sticky';
		filterOptionPan.style.top = 0;
		filterOptionPan.style.border = '1px solid black';
		(()=>{

			// LIB
			//

			let filterListSet = window.RandoStuffs.OoT.core.Item.filterListSet;
			let create_checkbox = window.RandoStuffs.OoT.viewModes.mainLib.createElems.create_checkbox;

			let itemPool = null;
			let set_itemPool = ()=>{
				// Set itemPool with spoilerFile.data.locations parsing instead just
				// to use spoilerFile.data.item_pool, because item_pool does not contain
				// "dungeon stuffs" such small keys, boss keys, map & compass
				let OoTR_locs = spoilerFile.data?.locations;
				if( !OoTR_locs ){
					itemPool = null;
					return;
				}
				let pool = new Set();
				Object.keys(OoTR_locs).forEach((e)=>{
					let item = OoTR_locs[e];
					item = (typeof item === 'string') ? item : item.item;
					pool.add(item);
				});
				itemPool = pool;
			};
			let filter_itemPool = ()=>{
				// hide all OoT items of the [selection item board] that are not in the itemPool
				if(itemPool)
					Object.keys(showItemControl).forEach((e)=>{
						if(!itemPool.has(e)) showItemControl[e].toggle(false);
					});
			};

			let showItemList = new Set();
			let filterLists = new Set();

			let apply_filterLists = ()=>{
				// use some filters
				if(filterLists.size > 0){
					// hide all
					Object.keys(showItemControl).forEach((e)=>{showItemControl[e].toggle(false);});
					// add the filtered items to the show list
					showItemList.clear();
					([...filterLists]).forEach((e)=>{
						filterListSet[e].itemList.forEach((e)=>{showItemList.add(e);});
					});
					// show by according selected filter
					([...showItemList]).forEach((e)=>{showItemControl[e].toggle(true);});
				// use no filter
				}else
					Object.keys(showItemControl).forEach((e)=>{showItemControl[e].toggle(true);});
			};

			// HTML ELEMENTS
			//

			let header = document.createElement('div');
				header.style.padding = 8;
				header.style.cursor = 'pointer';
				header.title = 'Click to Unfold/Fold [Item Filter Options] Menu';
				let openChar = '▼';  // it is open
				let closeChar = '►'; // it is close
				header.innerText = closeChar+' Item Filter Options';
				let open = false;
				header.onclick = ()=>{
					open = (!open);
					let stateChar;
					if(open){
						stateChar = openChar;
						body.style.display = '';
						mode.prepend(filterOptionPan);
					}else{
						stateChar = closeChar;
						body.style.display = 'none';
						panel.prepend(filterOptionPan);
					}
					header.innerText = stateChar+' Item Filter Options';
				};
			filterOptionPan.appendChild(header);

			let body = document.createElement('div');
				body.style.display = 'none';
				body.style.margin = 8;
				body.style.backgroundColor = '#c5e4ff';
				body.style.border = '1px solid black';
				body.style.padding = 8;
			filterOptionPan.appendChild(body);

			// create spoiler.json item pool filter [checkbox]
			(()=>{
				let container = document.createElement('div');
				container.style.border = '1px solid black';
				let message = document.createElement('div');
				message.style.color = 'red';
				message.style.paddingLeft = 16;
				message.style.paddingBottom = 16;
				let elem = create_checkbox(
					'Spoiler.json Item Pool Filter',
					function(){
						message.innerText = '';
						if(this.checked){
							if(spoilerFile.data){ // use if spoiler is loaded
								set_itemPool();
								filter_itemPool();
							}else{
								message.innerText = 'Error : Missing "Spoiler.json"';
								this.checked = false;
							}
						}else{
							if(itemPool)
								apply_filterLists();
							itemPool = null;
						}
					},
					false
				);
				container.appendChild(elem);
				container.appendChild(message);
				body.appendChild(container);
			})();

			// create item default filter [checkboxes]
			let defaultFilterPanel = document.createElement('div');
				defaultFilterPanel.style.display = 'grid';
				defaultFilterPanel.style.gridTemplateColumns = 'auto auto';
				Object.keys(filterListSet).forEach((e)=>{
					let obj = filterListSet[e];
					let elem = create_checkbox(
						obj.labelTxt,
						function(){
							// update filter lists
							if(this.checked) filterLists.add(e);
							else             filterLists.delete(e);
							
							// use filter lists
							apply_filterLists();
							
							// use spoiler.json item pool filter
							filter_itemPool();
						},
						false
					);

					defaultFilterPanel.appendChild(elem);
				});
			body.appendChild(defaultFilterPanel);

			// create selection buttons panel
			let buttonsPan = document.createElement('div');
				buttonsPan.style.border = '1px solid black';
				buttonsPan.style.padding = 8;
				buttonsPan.style.display = 'flex';
				buttonsPan.style.flexDirection = 'column';
				buttonsPan.style.gap = '8px';
				(()=>{
					// select all [button]
					let selectAllButton = document.createElement('input');
						selectAllButton.type = 'button';
						selectAllButton.value = 'Select All Visible Items';
						selectAllButton.onclick = ()=>{
							board.querySelectorAll('input[type=checkbox]').forEach(
								e=>{if(e.style.display!=='none'){e.checked=false; e.click();}}
							);
						};
					buttonsPan.appendChild(selectAllButton);
					// unselect all [button]
					let unselectAllButton = document.createElement('input');
						unselectAllButton.type = 'button';
						unselectAllButton.value = 'Unselect All Visible Items';
						unselectAllButton.onclick = ()=>{
							board.querySelectorAll('input[type=checkbox]').forEach(
								e=>{if(e.style.display!=='none'){e.checked=true; e.click();}}
							);
						};
					buttonsPan.appendChild(unselectAllButton);
					// invert all selection [button]
					let invertAllButton = document.createElement('input');
						invertAllButton.type = 'button';
						invertAllButton.value = 'Invert Selection of All Visible Items';
						invertAllButton.onclick = ()=>{
							board.querySelectorAll('input[type=checkbox]').forEach(
								e=>{if(e.style.display!=='none')e.click();}
							);
						};
					buttonsPan.appendChild(invertAllButton);
					// set all max quantity [number input]
					let setAllMaxQuantity = document.createElement('input');
						setAllMaxQuantity.type = 'number';
						setAllMaxQuantity.min = 1;
						setAllMaxQuantity.max = Number.POSITIVE_INFINITY;
						setAllMaxQuantity.placeholder = 'Set Quantity for All Visible Items (press [Enter]) ';
						setAllMaxQuantity.value = '';
						setAllMaxQuantity.title = 'Press [Enter] key to valid';
						setAllMaxQuantity.onkeypress = function(event){
							if(event.code === 'Enter'){
								board.querySelectorAll('input[type=number]').forEach(
									e=>{if(e.style.display!=='none'){e.value=this.value; e.oninput();}}
								);
								this.value = '';
							}
						};
					buttonsPan.appendChild(setAllMaxQuantity);
				})();
			body.appendChild(buttonsPan);

		})();
		panel.appendChild(filterOptionPan);

		// make and fill item selection board
		/////////////////////////////////////
		let board = document.createElement('div');
		board.style.display = 'grid';
		board.style.alignItems = 'center';
		board.style.gridTemplateColumns = 'auto auto auto auto';
		board.style.gridTemplateRows = `repeat(${itemList.length}, 1fr)`;
		
		// allows display control : show/hide {img, checkbox, label, quantity} in once for each row item
		let showItemControl = {};
		let _toggle = function(val){
			this.show = val ?? (!this.show);
			let displayValue = this.show ? '' : 'none';
			this.elems.forEach((e)=>{e.style.display=displayValue;});
		};

		for(let name in itemList){

			// internal data
			//

			showItemControl[name] = { show:true, elems:[], toggle:_toggle };

			// html elements
			//

			// item gfx [icon]
			let itemGFX = itemList[name];
			let itemIcon = document.createElement('img');
			itemIcon.src = itemGFX;
			itemIcon.style.margin = 4;
			itemIcon.style.justifySelf = 'center';
			itemIcon.style.border = '1px solid black';
			itemIcon.onclick = ()=>itemSelectState.click();
			board.appendChild(itemIcon);
	
			// item [checkbox]
			let itemSelectState = document.createElement('input');
			itemSelectState.type = 'checkbox';
			itemSelectState.style.margin = 4;
			itemSelectState.checked = selectedItemList.has(name);
			itemSelectState.oninput = function(){
				if(this.checked) selectedItemList.add(name);
				else             selectedItemList.delete(name);
			};
			board.appendChild(itemSelectState);
	
			// item name [label]
			let itemNameLabel = document.createElement('label');
			itemNameLabel.textContent = name;
			//itemNameLabel.style.display = 'flex';
			//itemNameLabel.style.alignItems = 'center';
			itemNameLabel.style.margin = 4;
			itemNameLabel.onclick = ()=>itemSelectState.click();
			board.appendChild(itemNameLabel);

			// item max display quantity [input]
			let quantityInput = document.createElement('input');
			quantityInput.type = 'number';
			quantityInput.min = 1;
			quantityInput.placeholder = 'max';
			quantityInput.style.width = 48;
			quantityInput.style.margin = '0px 8px';
			quantityInput.value = itemQuantities[name]
			quantityInput.oninput = function(){
				itemQuantities[name] = parseInt(this.value) || Number.POSITIVE_INFINITY;
			};
			board.appendChild(quantityInput);
	
			showItemControl[name].elems.push(itemIcon, itemSelectState, itemNameLabel, quantityInput);
		}

		panel.appendChild(board);
		mode.appendChild(panel);
	})();

	
	//
	// //
	//


	// settings selection (input panel)
	///////////////////////////////////

	// conditions settings PART
	//
	let _conditionGroupsBoard = null;
	let _saveConditionGroupsBtn = null;
	
	let updateViewModeInstance_conditionGroups = ()=>{
		let getObject_conditionGroups = OoT.viewModes.mainLib.editCondition.getObject_conditionGroups;

		// call .onchange on every [name field] of the condition groups to fix if there are many non unique names
		([..._conditionGroupsBoard.children]).forEach(e=>e.firstElementChild.firstElementChild.onchange());

		sessionInstance.conditionGroups = getObject_conditionGroups(_conditionGroupsBoard);
		_saveConditionGroupsBtn.disabled = true;
	};

	// display options settings PART
	//
	let get_defaultCheckList = (baseList/*string array*/, defaultValue)=>{
		let o = {};
		for(let c of baseList) o[c] = {checked:defaultValue, conditionID:null};
		return o;
	};
	// build settingsList (with internal area properties and loc properties)
	let settingsList = {
		displayRequestResultByItem             : true,
		displayRequestResultMaxByItem          : Number.POSITIVE_INFINITY,
		displayRequestResultRemoveEmptyResults : true,

		displayRequestResultWithArea         : {checked:true, conditionID:null},
		displayRequestResultWithMapPos       : {checked:true, conditionID:null},
		displayRequestResultWithAreaCtx      : {checked:true, conditionID:null, quantity:null},
		displayRequestResultWithLocation     : {checked:true, conditionID:null},
		displayRequestResultWithLocCtx       : {checked:true, conditionID:null, quantity:null},

		displayRequestResultAreaSet    : get_defaultCheckList(Object.keys(areaList), true),
		displayRequestResultMapPosSet  : get_defaultCheckList(Object.keys(mapPosList), true),
		displayRequestResultAreaCtxSet : get_defaultCheckList(Object.keys(areaCtxList), true),

		displayRequestResultLocSet     : get_defaultCheckList(Object.keys(locList), true),
		displayRequestResultLocCtxSet  : get_defaultCheckList(Object.keys(locCtxList), true),
	};
	DEBUG_EXPORT__settingsList = settingsList; // debug
	// update settingsList (with loaded area properties and loc properties)
	if(sessionInstance.settingsList){
		let loaded = sessionInstance.settingsList;

		settingsList.displayRequestResultByItem             = loaded.displayRequestResultByItem;
		settingsList.displayRequestResultMaxByItem          = loaded.displayRequestResultMaxByItem;
		settingsList.displayRequestResultRemoveEmptyResults = loaded.displayRequestResultRemoveEmptyResults;

		settingsList.displayRequestResultWithArea     = loaded.displayRequestResultWithArea;
		settingsList.displayRequestResultWithMapPos   = loaded.displayRequestResultWithMapPos;
		settingsList.displayRequestResultWithAreaCtx  = loaded.displayRequestResultWithAreaCtx;

		settingsList.displayRequestResultWithLocation = loaded.displayRequestResultWithLocation;
		settingsList.displayRequestResultWithLocCtx   = loaded.displayRequestResultWithLocCtx;
		
		([
		'displayRequestResultAreaSet',
		'displayRequestResultMapPosSet',
		'displayRequestResultAreaCtxSet',
		
		'displayRequestResultLocSet',
		'displayRequestResultLocCtxSet',
		]).forEach(prop=>{
			Object.keys(settingsList[prop]).forEach(e=>{
				let originalValue = settingsList[prop][e];
				settingsList[prop][e] = loaded[prop][e] || originalValue;
			});
		});
	}
	sessionInstance.settingsList = settingsList;

	// display options interface building PART
	//
	(()=>{

		let create_radioButton = function(group, label, oninput, checked=false){
			let elem = document.createElement('input');
				elem.type = 'radio';
				elem.name = group;
				elem.style.margin = 16;
				elem.oninput = oninput;
				elem.checked = checked;

			let _label = document.createElement('label');
				_label.innerHTML = '<span>'+label+'</span>';
				_label.prepend(elem);
			return _label;
		};

		let create_checkbox = window.RandoStuffs.OoT.viewModes.mainLib.createElems.create_checkbox;

		// make panel's viewport sys
		////////////////////////////
		let panel = document.createElement('div');
		panel.style.overflowX = 'hidden';
		panel.style.overflowY = 'scroll';
		panel.style.height = '75%';
		panel.style.backgroundColor = '#c5e4ff';

		let board = document.createElement('div');
		board.style.display = 'grid';
		board.style.gridTemplateColumns = 'auto';

		// fill settings board
		//////////////////////

			// display request condition section
			((elem=null)=>{

				let create_conditionGroup = OoT.viewModes.mainLib.editCondition.create_conditionGroup;
				
				let makeConditionBoard_fromObject = OoT.viewModes.mainLib.editCondition.makeConditionBoard_fromObject;

				let pan_condition = document.createElement('div');
					elem = pan_condition;
					elem.style.display = 'flex';
					elem.style.alignItems = 'center';
					elem.style.flexDirection = 'column';
					elem.style.border = '1px solid black';

				// make all properties ref pack
				let allRef = {
					'Area Name'        : core.Area.list,
					'Map Position'     : core.Area.mapPos,
					'Area Context'     : core.Area.context,
					'Exact Location'   : core.Location.list,
					'Location Context' : core.Location.context,
				};

				// condition groups [board]
				let conditionGroupsBoard = document.createElement('div');
					elem = conditionGroupsBoard;
					elem.style.width = '100%';
					elem.addEventListener('change', (e)=>{
						let tagName = e.srcElement.tagName;
						saveApply.disabled = !Boolean( tagName==='SELECT' || tagName==='INPUT' );
					}, {capture:true});
					elem.addEventListener('click', (e)=>{
						if( e.srcElement.tagName==='INPUT' && e.srcElement.type==='button' )
							saveApply.disabled = false;
					}, {capture:true});
				
					makeConditionBoard_fromObject(conditionGroupsBoard, sessionInstance.conditionGroups, allRef);

				// add new [button]
				let addNew = document.createElement('input');
				addNew.type = 'button';
				addNew.value = 'Add New Condition Group';
				addNew.style.margin = 4;
				addNew.style.minWidth = '25%';
				addNew.onclick = ()=>{
					let newGroup = create_conditionGroup(conditionGroupsBoard, allRef);
					conditionGroupsBoard.appendChild( newGroup );
					saveApply.disabled = false;
				};

				// save & apply [button]
				let saveApply = document.createElement('input');
				saveApply.type = 'button';
				saveApply.value = 'Save and Apply';
				saveApply.disabled = true;
				saveApply.style.margin = 4;
				saveApply.style.minWidth = '25%';
				saveApply.onclick = ()=>{ updateViewModeInstance_conditionGroups(); };
				
				// buttons [panel]
				let buttonsPan = document.createElement('div');
				buttonsPan.style.display = 'flex';
				buttonsPan.style.width = '100%';
				buttonsPan.style.justifyContent = 'space-evenly';
				
				// elem hierachy
				pan_condition.appendChild( conditionGroupsBoard );
				buttonsPan.appendChild(addNew);
				buttonsPan.appendChild(saveApply);
				pan_condition.appendChild( buttonsPan );
				board.appendChild(pan_condition);

				// export
				_conditionGroupsBoard = conditionGroupsBoard;
				_saveConditionGroupsBtn = saveApply;
			})();

			// display mode option section
			((elem=null)=>{

				let pan_displayMode = document.createElement('div');
				elem = pan_displayMode;
				elem.style.display = 'flex';
				elem.style.flexDirection = 'column';
				elem.style.border = '1px solid black';
	
					// option : Display Request Result By Item
					let op_withItem = create_radioButton(
						'pan_displayMode', 'Display Request Result By Item',
						()=>{ settingsList.displayRequestResultByItem=true; },
						settingsList.displayRequestResultByItem
					);
					pan_displayMode.appendChild(op_withItem);
	
					// option : Display Request Result Without Telling Which Items
					let op_withoutItem = create_radioButton(
						'pan_displayMode', 'Display Request Result Without Telling Which Items',
						()=>{ settingsList.displayRequestResultByItem=false; },
						!settingsList.displayRequestResultByItem
					);
					pan_displayMode.appendChild(op_withoutItem);

					// option : (general) Max displayed entries by item
					let op_maxDisplay = document.createElement('input');
						op_maxDisplay.type = 'number';
						op_maxDisplay.min = 1;
						op_maxDisplay.max = Number.POSITIVE_INFINITY;
						op_maxDisplay.placeholder = 'max (general)';
						op_maxDisplay.style.width = 128;
						op_maxDisplay.style.marginLeft = 16;
						op_maxDisplay.oninput = function(){
							settingsList.displayRequestResultMaxByItem = parseInt(this.value) || Number.POSITIVE_INFINITY;
						};
						if(settingsList.displayRequestResultMaxByItem !== Number.POSITIVE_INFINITY)
							op_maxDisplay.value = settingsList.displayRequestResultMaxByItem;
					let op_max_label = document.createElement('label');
						op_max_label.innerHTML = '<span>Max Quantity to display by Item :</span>';
						op_max_label.style.margin = 16;
						op_max_label.appendChild(op_maxDisplay);
					pan_displayMode.appendChild(op_max_label);

					// option : Hide Empty Results of Request
					let op_hideEmptyResults = create_checkbox(
						'Remove Empty Results in Request (before rebalancing quantities)',
						function(){ settingsList.displayRequestResultRemoveEmptyResults=this.checked; },
						settingsList.displayRequestResultRemoveEmptyResults
					);
					pan_displayMode.appendChild(op_hideEmptyResults);

				board.appendChild(pan_displayMode);
			})();

			// display category option section
			((elem=null, subElem=null)=>{

				let apply_cssStyle = (elem)=>{
					elem.style.display = 'flex';
					elem.style.alignItems = 'center';
					elem.children[1].style.marginRight = 16; // add margin at right of label text
				};

				// (insert as last child)
				let attach_quantityInputs = (elem, obj, prop, propSet)=>{
					let newElem = null;
					if(obj[prop].quantity !== undefined /*if used, then default is : null*/){
						let max = Object.keys(obj[propSet]).length;
						let quantityInput = document.createElement('input');
						quantityInput.type = 'number';
						quantityInput.max = max;
						quantityInput.min = 1;
						quantityInput.placeholder = 'max';
						quantityInput.oninput = function(){ obj[prop].quantity=parseInt(this.value)||Number.POSITIVE_INFINITY; };
						
						if(obj[prop].quantity === null)
							obj[prop].quantity = Number.POSITIVE_INFINITY;
						else
							quantityInput.value = obj[prop].quantity;

						newElem = quantityInput;
					}else{
						let whiteSpaceDiv = document.createElement('div');
						newElem = whiteSpaceDiv;
					}
					newElem.style.width = 64;
					newElem.style.marginLeft = 'auto';
					newElem.style.marginRight = 16;
					elem.appendChild(newElem);
				};

				// (insert as last child)
				let attach_conditionHook = (elem, obj, prop)=>{
					let conditionHook = document.createElement('input');
					conditionHook.type = 'text';
					conditionHook.style.marginRight = 16;
					conditionHook.placeholder = 'Condition ID';
					conditionHook.oninput = function(){ obj[prop].conditionID = this.value || null; };

					if(obj[prop].conditionID !== null)
						conditionHook.value = obj[prop].conditionID;

					elem.appendChild(conditionHook);
				};

				// (insert after first child)
				let make_foldable = (category, subElem, defaultState='open')=>{
					
					// make the fold button
					let foldBtn = document.createElement('span');
					let openChar = '▼';  // it is open
					let closeChar = '►'; // it is close
					foldBtn.style.fontWeight = 'bold';
					//foldBtn.style.border = '1px solid black';
					foldBtn.style.margin = 16;
					// insert the fold button
					category.firstChild.after( foldBtn );
					// set the default state
					let subElemDisplay = subElem.style.display;
					if(defaultState === 'open'){
						// default open state
						foldBtn.textContent = openChar;
					}else{
						// default close state
						foldBtn.textContent = closeChar;
						subElem.style.display = 'none';
					}
					// fold action
					let currentState = defaultState;
					foldBtn.onclick = (e)=>{
						e.preventDefault(); // cancel the click on the checkbox label
						if(currentState === 'open'){
							foldBtn.textContent = closeChar;
							subElem.style.display = 'none';
							currentState = 'close';
						}else{
							foldBtn.textContent = openChar;
							subElem.style.display = subElemDisplay;
							currentState = 'open';
						}
					};
				};

				// (inject in itself)
				let make_selectableInputElem = (subElem)=>{
					let selectionRectElem = document.createElement('div');
					selectionRectElem.style.display = 'none';
					selectionRectElem.style.position = 'absolute';
					selectionRectElem.style.width = 0;
					selectionRectElem.style.height = 0;
					selectionRectElem.style.border = '2px dashed grey';
					selectionRectElem.style.pointerEvents = 'none';
					selectionRectElem.style.transformOrigin = 'top left';
					let isInSelection = false;
					let selRectStartX = 0;
					let selRectStartY = 0;
					let selRectEndX = 0;
					let selRectEndY = 0;
					// fix : onmouseenter event while scrolling
					let pointerInBound = false;
					let scrollFixWinX = 0;
					let scrollFixWinY = 0;
					subElem.appendChild(selectionRectElem);

					subElem.addEventListener('mousedown', (e)=>{
						//e.stopPropagation();

						if(e.target.tagName !== 'INPUT'){
							let { x, y } = get_mousePosRelToElem(e, subElem);
							selRectStartX = x;
							selRectStartY = y;
							selectionRectElem.style.left = selRectStartX;
							selectionRectElem.style.top  = selRectStartY;
							selectionRectElem.style.width = 0;
							selectionRectElem.style.height = 0;
							selectionRectElem.style.display = '';
	
							// add tmp event to window
							//
	
							// mouse up event to valid selection rect with pointer out of area
							window.addEventListener('mouseup', (e)=>{
								//e.stopPropagation();
								apply_selectionProcess(e);
								clear_tmpScrollEvent();
								isInSelection = false;
							}, {once:true});
	
							// scroll event to update selection rect while scrolling
							set_tmpScrollEvent();

							isInSelection = true;
							pointerInBound = true;
						}

					} /* ,{capture:true} */);

					let subElem_onmousemove = (e)=>{
						if(isInSelection){
							let { x, y } = get_mousePosRelToElem(e, subElem);
							// clamping
							if(x < 0) x = 0;
							if(x >= subElem.offsetwidth) x = subElem.offsetwidth;
							if(y < 0) y = 0;
							if(y >= subElem.offsetHeight) y = subElem.offsetHeight;
							//

							selRectEndX = x;
							selRectEndY = y;
							x -= selRectStartX;
							y -= selRectStartY;
							update_selectionRectDrawSize(x, y);
						}
					};
					subElem.addEventListener('mousemove', subElem_onmousemove);





					let tmpScrollEvent = (e)=>{ onScroll(e); };
					let tmpMousemoveEvent = (e)=>{ onMousemove(e); };
					let set_tmpScrollEvent = ()=>{
						// (capture mode really increases reactivity)
						window.addEventListener('wheel',tmpScrollEvent,{capture:true});
						window.addEventListener('scroll',tmpScrollEvent,{capture:true});
						window.addEventListener('mousemove',tmpMousemoveEvent,{capture:true});
					};
					let clear_tmpScrollEvent = ()=>{
						window.removeEventListener('wheel',tmpScrollEvent,{capture:true});
						window.removeEventListener('scroll',tmpScrollEvent,{capture:true});
						window.removeEventListener('mousemove',tmpMousemoveEvent,{capture:true});
					};
					let onMousemove = (e, x, y)=>{
						// update scrollFixWin XY
						x = scrollFixWinX = e?.clientX ?? x;
						y = scrollFixWinY = e?.clientY ?? y;
						// update pointerInBound
						let rect = subElem.getBoundingClientRect();
						if(x>=rect.left && x<=rect.right && y>=rect.top && y<=rect.bottom)
							pointerInBound = true;
						else
							pointerInBound = false;
					};
					
					let onScroll = (e)=>{
						onMousemove(null, scrollFixWinX, scrollFixWinY); // simule window.onmousemove
						if(pointerInBound)
							subElem_onmousemove({clientX:scrollFixWinX, clientY:scrollFixWinY});
						else{
							let rect = subElem.getBoundingClientRect();
							subElem_onmousemove({clientX:selRectEndX+rect.x, clientY:selRectEndY+rect.y});
						}
					};

					let get_mousePosRelToElem = (event, targetElem)=>{
						let targetRect = targetElem.getBoundingClientRect();
						let rx = event.clientX - targetRect.x;
						let ry = event.clientY - targetRect.y;
						return {x:rx, y:ry, ox:targetRect.x, oy:targetRect.y};
					};

					let update_selectionRectDrawSize = (x, y)=>{
						let absX = Math.abs(x);
						let absY = Math.abs(y);
						selectionRectElem.style.width  = absX;
						selectionRectElem.style.height = absY;
						selectionRectElem.style.transform = `scale(${x/absX},${y/absY})`;
					};

					let apply_selectionProcess = (e)=>{
						
						let { ox, oy } = get_mousePosRelToElem(e, subElem);
						let x = selRectEndX;
						let y = selRectEndY;
						selectionRectElem.style.display = 'none';

						let checkboxes = [...subElem.querySelectorAll('input[type=checkbox]')];
						let conditions = [...subElem.querySelectorAll('input[type=text]')];

						let isInSelRect = (elem)=>{
							// get x0,y0 at top left
							let x0 = Math.min(selRectStartX, x) + ox;
							let y0 = Math.min(selRectStartY, y) + oy;
							// get x0,y1 at bottom right
							let x1 = Math.max(selRectStartX, x) + ox;
							let y1 = Math.max(selRectStartY, y) + oy;
							// 
							let elemRect = elem.getBoundingClientRect();
							if(elemRect.left>=x0 && elemRect.right<=x1
							&& elemRect.top>=y0 && elemRect.bottom<=y1)
								return true;
							else
								return false;

						};

						let cbxSel = checkboxes.filter((e)=>{return isInSelRect(e);});
						let cndSel = conditions.filter((e)=>{return isInSelRect(e);});
						let cbxInSel = cbxSel.length > 0;
						let cndInSel = cndSel.length > 0;

						// Eighter checkboxes are selected Or condition ID input are selected
						if(cbxInSel ^ cndInSel){

							// if only checkboxes are selected
							if(cbxInSel){
								// then invert .checked state
								cbxSel.forEach((e)=>{e.click();});
							}
							// if only condition input are selected
							if(cndInSel){
								// Then use .value of the highest visible condition input field,
								// to set .value of all selected condition input field
								let value = cndSel[0].value;
								cndSel.forEach((e)=>{e.value=value; e.oninput();});
							}
						}

						// Checkboxes are selected And Condition ID input are selected
						if(cbxInSel && cndInSel){
							// Use .value of the highest visible condition input field,
							// to set .value of all selected condition input field only if
							// their corresponding checkbox is checked
							let value = cndSel[0].value;
							cbxSel.forEach((e,index)=>{
								if(e.checked){
									cndSel[index].value = value;
									cndSel[index].oninput();
								}
							});
						}
					};

				};


				//
				let make_categoryWithSubPanel = function(mainLabel, mainSetName, subList, subLabelEnd, subSetName, parent){
					let checkboxes = [];
					let opacity = 0.5;

					// main checkbox
					let category = create_checkbox(
						mainLabel,
						function(){
							settingsList[mainSetName].checked = this.checked;
							
							// + hold [shift key]
							if(mode.theApp.shiftKey){
								// set all sub checkboxes with current main checkbox .checked
								//
								// elem
								checkboxes.forEach(e=>e.checked=this.checked);
								// internal data
								Object.keys(subList).forEach(e=>{settingsList[subSetName][e].checked=this.checked});
							}
							// + hold [ctrl key]
							if(mode.theApp.ctrlKey){
								this.checked = (!this.checked);                  // invert main checkbox
								checkboxes.forEach(e=>e.checked=(!e.checked));   // invert sub checkboxes
								// invert internal data (main checkbox)
								settingsList[mainSetName].checked = this.checked;
								// invert internal data (sub checkboxes)
								Object.keys(subList).forEach(e=>{let o=settingsList[subSetName][e]; o.checked=(!o.checked)});
							}

							// sub checkboxes opacity
							if(this.checked)
								checkboxes.forEach(e=>e.style.opacity=1.0);
							else
								checkboxes.forEach(e=>e.style.opacity=opacity);
						},
						settingsList[mainSetName].checked,
					);

					category.title = 'SHIFT + Click : to Select/Unselect all sub checkboxes\n'
					               + 'CTRL  + Click : to invert all sub checkboxes';
					apply_cssStyle(category);
					attach_quantityInputs(category, settingsList, mainSetName, subSetName);
					attach_conditionHook(category, settingsList, mainSetName);
					parent.appendChild(category);

					// sub checkboxes
					let subElem = document.createElement('div');
						subElem.style.marginLeft = 24;
						subElem.style.borderLeft = '1px solid black';
						subElem.style.display = 'flex';
						subElem.style.flexDirection = 'column';
						subElem.style.position = 'relative';
						for(let k in subList){
							subElem.appendChild(
								create_checkbox(
									`Display ${subList[k]} ${subLabelEnd}`,
									function(){settingsList[subSetName][k].checked=this.checked},
									settingsList[subSetName][k].checked,
								)
							);           // pan    .label           .checkbox
							checkboxes.push(subElem.lastElementChild.firstElementChild);
							                   // pan    .label
							apply_cssStyle(       subElem.lastElementChild);
							attach_conditionHook( subElem.lastElementChild, settingsList[subSetName], k);
							    // .label           .conditionInput 
							subElem.lastElementChild.lastElementChild.style.marginLeft = 'auto';
						}

					make_selectableInputElem(subElem);

					make_foldable(category, subElem, 'close');

					// update sub checkboxes opacity
					if(!settingsList[mainSetName].checked)
						checkboxes.forEach(e=>e.style.opacity=opacity);

					parent.appendChild(subElem);
				};

				//
				//

				let pan_displayCat = document.createElement('div');
					elem = pan_displayCat;
					elem.style.display = 'flex';
					elem.style.flexDirection = 'column';
					elem.style.border = '1px solid black';


				// Area Category
				make_categoryWithSubPanel(
					'Display Hyrule Area',
					'displayRequestResultWithArea',
					areaList,
					'',
					'displayRequestResultAreaSet',
					elem,
				);
				
				// Map Postion Category
				make_categoryWithSubPanel(
					'Display Hyrule Map Position',
					'displayRequestResultWithMapPos',
					mapPosList,
					'',
					'displayRequestResultMapPosSet',
					elem
				);

				// Area Context Category
				make_categoryWithSubPanel(
					'Display Context of Area',
					'displayRequestResultWithAreaCtx',
					areaCtxList,
					'',
					'displayRequestResultAreaCtxSet',
					elem
				);

				// Location Category
				make_categoryWithSubPanel(
					'Display Exact Hyrule Check Location (OoTR label)',
					'displayRequestResultWithLocation',
					locList,
					'',
					'displayRequestResultLocSet',
					elem
				);

				// Location Context Category
				make_categoryWithSubPanel(
					'Display "Context" of Hyrule Check Location',
					'displayRequestResultWithLocCtx',
					locCtxList,
					'Location Context',
					'displayRequestResultLocCtxSet',
					elem
				);

				board.appendChild(pan_displayCat);
			})();

		panel.appendChild(board);
		mode.appendChild(panel);
	})();

	
	//
	// //
	//


	// display request result (output panel)
	////////////////////////////////////////

	// item to location interface building PART
	//

	(()=>{

		//let getObject_conditionGroups = OoT.viewModes.mainLib.editCondition.getObject_conditionGroups;

		// make panel's viewport sys
		////////////////////////////
		let panel = document.createElement('div');
			panel.style.overflowY = 'scroll';
			panel.style.height = '75%';
			panel.style.backgroundColor = '#c5e4ff';

		let board = document.createElement('div');
			board.style.display = 'grid';
			board.style.gridTemplateColumns = 'auto';
			board.style.minHeight = '100%';
			//board.style.justifyItems = 'center';
			board.style.alignItems = 'start';
			board.style.gap = '16px';

		let resultPanel = document.createElement('div');
			resultPanel.style.display = 'grid';
			resultPanel.style.gap = '16px';
			resultPanel.style.gridTemplateColumns = 'auto';

		let reqButton = document.createElement('input');
			reqButton.type = 'button';
			reqButton.value = 'Process the Request';
			reqButton.style.margin = 16;
			reqButton.onclick = function(){
				// init
				let foundLocs = [];
				let foundLocsByItem = {};
				for(let itemName in itemList)
					foundLocsByItem[itemName] = [];
				let OoTR_locs = null;
				resultPanel.innerHTML = '';
				try{
					OoTR_locs = spoilerFile.data.locations;
				}catch{
					let error = document.createElement('div');
					error.style.color = 'red';
					error.style.margin = 16;
					error.style.padding = 16;
					error.style.border = '1px solid black';
					error.textContent = 'Error : Missing "Spoiler.json"';
					resultPanel.appendChild(error);
					return; // cancel process
				}

				// process (look for locs by item)
				//

				/*  // ALGO ///////////////////////////////////
						// get locs by item (foundLocsByItem)

						// get conditions obj (displayConditions)

						// get result entries by item (resultEntriesByItem)

						// if checked : remove empty results

						// if checked : rebalance quantity by item

							// and random order by item

						// if checked : display by item

						    // then display resultEntriesByItem

						// else : make foundLocs from resultEntriesByItem

						    // and random order all entries

						    // then display foundLocs
					// ALGO END ///////////////////////////////
				*/

				// loop on all selected item
				for(let item of selectedItemList){
					// get all loc for the current item
					//
					for(let locName in OoTR_locs){
						let locItem = OoTR_locs[locName];
						if(typeof locItem !== 'string') locItem = locItem.item;
						if(locItem === item){
							foundLocsByItem[locItem].push(locName);
						}
					}
				}

				// get condition group from condition panel
				if(!_saveConditionGroupsBtn.disabled)
				updateViewModeInstance_conditionGroups();
				let displayConditions = sessionInstance.conditionGroups;

				// get result entries by item
				//
				let resultEntriesByItem = {};
				// loop on selected item
				for(let item of selectedItemList){
					resultEntriesByItem[item] = [];
					// loop on all locs of current item
					for(let loc of foundLocsByItem[item]){
						// create result entries by item
						//
						let resultEntry = create_resultEntry(loc, displayConditions);
						resultEntry.setAttribute('OoT_Item', item);
						// remove empty results
						if(settingsList.displayRequestResultRemoveEmptyResults){
							if(resultEntry.querySelectorAll('.'+secretCssClassNameToDetectNonEmptyResult).length)
								resultEntriesByItem[item].push( resultEntry );
						}
						// keep empty results
						else
							resultEntriesByItem[item].push( resultEntry );
					}
					// rebalance quantity by item (the current item of loop)
					//
					// own quantity by item has priority on general max quantity
					let ownItemQuantity = itemQuantities[item];
					let generalMaxQuantity = settingsList.displayRequestResultMaxByItem;
					let itemQuantityLimit = (ownItemQuantity!==Number.POSITIVE_INFINITY) ? ownItemQuantity : generalMaxQuantity;
					if(itemQuantityLimit < resultEntriesByItem[item].length){
						// randomize
						resultEntriesByItem[item] = resultEntriesByItem[item].sort(
							()=>{ return (Math.random()-.5)>=0 ? 1 : -1; }
						);
						// remove surplus
						let surplus = resultEntriesByItem[item].length - itemQuantityLimit;
						for(let i=0; i<surplus; i++) resultEntriesByItem[item].pop();
					}
				}
				
				// display result
				//

				// display with telling which item
				if(settingsList.displayRequestResultByItem){
					let imgSlotSize = 32 + (8*2); // maxImgHeight + verticalMargin
					for(let item of selectedItemList){
						for(let resEntry of resultEntriesByItem[item]){
							let itemHeader = document.createElement('div');
							itemHeader.style.display = 'grid';
							itemHeader.style.alignItems = 'center';
							itemHeader.style.gridTemplateColumns = imgSlotSize+'px auto';
							itemHeader.style.gridTemplateRows = imgSlotSize+'px';
							itemHeader.style.backgroundColor = 'lightgrey';
							itemHeader.style.border = '2px solid black';
							itemHeader.innerHTML = `<img src=${itemList[item]} style="margin:8px;justify-self:center;">`
							                     + `<span style="margin:8px 16px;">${item}</span>`;
							resEntry.prepend(itemHeader);
							resultPanel.appendChild(resEntry);
						}
					}
				// display without telling which item
				}else{
					// make foundLocs with correct quantity by item
					Object.keys(resultEntriesByItem).forEach(e=>{
						foundLocs.push(...resultEntriesByItem[e]);
					});

					// make results
					for(let resEntry of foundLocs){
						resultPanel.appendChild( resEntry );
					}
					// blend results
					let instanceCount = resultPanel.children.length;
					let blendLoopCount = (instanceCount*2) + Math.round(Math.random()); // arbitrary random loop count : instanceCount*2 + randomOdd
					for(let i=0; i<blendLoopCount; i++){ 
						let randOffset = (Math.floor(Math.random()*instanceCount)); // rand = (min:0, max:instanceCount-1)
						let randIndex = (randOffset===0 ? instanceCount>>1 : randOffset); // change min:0 to instanceCount/2
						resultPanel.firstElementChild.insertAdjacentElement('beforebegin', resultPanel.children[randIndex]);
					}
				}

				// keep a collection copy of all result entries before adding buttons at the end of resultPanel
				let resultPanel__resultEntriesOnly = [...resultPanel.children];
				// clone resultPanel to export
				let resultPanel__cleanClone = resultPanel.cloneNode(true);

				// add button [remove empty result entries]
				let removeEmptyEntriesButton = document.createElement('input');
					removeEmptyEntriesButton.type = 'button';
					removeEmptyEntriesButton.style.margin = 16;
					removeEmptyEntriesButton.value = 'Remove empty result entries';
					removeEmptyEntriesButton.onclick = ()=>{
						// remove empty in the current displayed resultPanel
						(resultPanel__resultEntriesOnly).forEach(e=>{
							if( e.querySelectorAll('.'+secretCssClassNameToDetectNonEmptyResult).length === 0 )
								resultPanel.removeChild(e);
						});
						// remove empty in resultPanel clone to export
						([...resultPanel__cleanClone.children]).forEach(e=>{
							if( e.querySelectorAll('.'+secretCssClassNameToDetectNonEmptyResult).length === 0 )
								resultPanel__cleanClone.removeChild(e);
						});
						resultPanel.removeChild(removeEmptyEntriesButton);
					};
				resultPanel.appendChild(removeEmptyEntriesButton);

				// add button [export result (in new window/tab)]
				let exportResultButton = document.createElement('input');
					exportResultButton.type = 'button';
					exportResultButton.style.margin = 16;
					exportResultButton.value = 'Export this request result in\n a new web browser window/tab';

					// file:///   PROTOCOLE [YES]
					// http(s):// PROTOCOLE [YES]
					// but does not prevent page reloading
					exportResultButton.onclickV1 = ()=>{
						// create page title
						let title = [...selectedItemList].join(' - ');

						// create result node
						let mainWidth = board.offsetWidth;
						let cleanClone = resultPanel.cloneNode(true);
							cleanClone.lastElementChild.remove(); // remove the cloned [export result button]
							cleanClone.lastElementChild.remove(); // remove the cloned [remove empty button]
							cleanClone.style.gridTemplateColumns = `repeat(auto-fill, minmax(${mainWidth}px,1fr))`;
							cleanClone.style.gap = '16px';

						// create the blob data object to download
						const htmlDoc = document.implementation.createHTMLDocument(title);
							htmlDoc.body.appendChild(cleanClone);
							const blob = new Blob([htmlDoc.documentElement.innerHTML], { type: 'text/html' });
							const blobURL = window.URL.createObjectURL(blob);
							
						// create download result link
						const htmlLink = document.createElement('a');
							htmlLink.href = blobURL;
							htmlLink.textContent = 'Download this result page as :\n"'+title+'.html"';
							htmlLink.download = title+'.html';
							htmlLink.style.alignSelf = 'center';
							htmlLink.style.justifySelf = 'center';
							htmlLink.style.whiteSpace = 'pre-wrap';
							cleanClone.appendChild(htmlLink);

						// open new browser window/tab
						let resultWindow = window.open('', '_blank');
							resultWindow.document.body.appendChild(cleanClone);
							resultWindow.document.title = title;
					};

					// file:///   PROTOCOLE [YES]
					// http(s):// PROTOCOLE [NO]
					// prevent page reloading
					exportResultButton.onclickV2 = ()=>{
						// create page title
						let title = [...selectedItemList].join(' - ');

						// create result node
						let mainWidth = board.offsetWidth;
						let cleanClone = resultPanel.cloneNode(true);
							cleanClone.lastElementChild.remove(); // remove the cloned [export result button]
							cleanClone.lastElementChild.remove(); // remove the cloned [remove empty button]
							cleanClone.style.gridTemplateColumns = `repeat(auto-fill, minmax(${mainWidth}px,1fr))`;
							cleanClone.style.gap = '16px';

						// create new url address
						let url = 'p.html?transferDATA=' + encodeURIComponent(btoa(cleanClone.outerHTML))
						        + '&transferTITLE='      + encodeURIComponent(btoa(title));

						// open new browser window/tab
						let resultWindow = window.open(url, '_blank');
					};

					// V3
					// file:///   PROTOCOLE [YES]
					// http(s):// PROTOCOLE [YES]
					// prevent page reloading
					exportResultButton.onclick = ()=>{

						// create result node
						let mainWidth = board.offsetWidth;
						let cleanClone = resultPanel__cleanClone;
							cleanClone.style.gridTemplateColumns = `repeat(auto-fill, minmax(${mainWidth}px,1fr))`;
							cleanClone.style.gap = '16px';

						// create page title
						// get OoT item name ---> remove multiple occurences ---> convert into one string
						let title = ([...(new Set(([...cleanClone.children]).map(e=>e.getAttribute('Oot_Item'))))]).join(' - ');

						// create window data
						const htmlDoc = document.implementation.createHTMLDocument(title);
						htmlDoc.body.appendChild(cleanClone);

							// create download link
							//const blobToDownload = new Blob([htmlDoc.documentElement.innerHTML], { type: 'text/html' });
							const downloadURL = 'data:text/html;charset=utf-8,'+htmlDoc.documentElement.innerHTML;
							const htmlLink = document.createElement('a');
								htmlLink.href = downloadURL;
								htmlLink.textContent = 'Download this result page as :\n"'+title+'.html"';
								htmlLink.download = title+'.html';
								htmlLink.style.alignSelf = 'center';
								htmlLink.style.justifySelf = 'center';
								htmlLink.style.whiteSpace = 'pre-wrap';
							htmlDoc.body.prepend(htmlLink);

							// create main blob url
							const blobNewData = new Blob([htmlDoc.documentElement.innerHTML], { type: 'text/html' });
							const blobURL = window.URL.createObjectURL(blobNewData);
						
						// open new browser window/tab
						let resultWindow = window.open(blobURL);
					}

				resultPanel.appendChild(exportResultButton);

			};

		let reqBtnStickyRect = document.createElement('div');
			reqBtnStickyRect.style.position = 'sticky';
			reqBtnStickyRect.style.top = 0;
			reqBtnStickyRect.style.border = '1px solid black';
			reqBtnStickyRect.style.justifySelf = 'stretch';
			reqBtnStickyRect.style.display = 'flex';
			reqBtnStickyRect.style.justifyContent = 'center';
			reqBtnStickyRect.style.backgroundColor = getComputedStyle(workspace).backgroundColor;

			reqBtnStickyRect.appendChild(reqButton);

		let secretCssClassNameToDetectNonEmptyResult = 'secretCssClassNameToDetectNonEmptyResult';

		let create_resultEntry = function(locName, conditions){

			let location = appLocs[locName];
			let locNameID = location?.nameID;
			let locCtx    = location?.context || {/* implicite all prop at false */};

			let area = location.area;
			let areaName   = area?.name    || 'Not Found';
			let areaNameID = area?.nameID;
			let mapPos     = area?.map     || 'Not Found';
			let mapPosID   = area?.mapID;
			let areaCtx    = area?.context || {/* implicite all prop at false */};

			let elem = document.createElement('div');
				elem.style.border = '1px solid black';

			//let create_tileSPAN = (titleText)=>{ return '<span style="font-weight:bold;">'+titleText+'</span></br>' };
			let create_titleDIV = (titleText)=>{ return '<div style="font-weight:bold;margin:4px 8px;">'+titleText+'</div>'; };

			//let create_marginSPAN = (marginText)=>{ return '<span style="margin-left:16px">'+marginText+'</span></br>' };
			let create_marginDIV = (marginText)=>{
				let c = secretCssClassNameToDetectNonEmptyResult;
				return `<div class="${c}" style="margin-left:24px;margin-right:8px;">${marginText}</div>`;
			};

			let general = true;
			let test_allConditions = ()=>{
				// loop on all group of condition
				Object.keys(conditions).forEach((groupName)=>{
					let cndtn = conditions[groupName];
					let test = true;
					// loop on all conditions in the current group
					cndtn.forEach((c, index)=>{
						let res = false;

						if(c.property==='Area Name'){
							if(c.comparator === 'is')
								res = (areaNameID===c.value) ? true : false;
							if(c.comparator === 'is not')
								res = (areaNameID!==c.value) ? true : false;
						}

						if(c.property==='Map Position'){
							if(c.comparator === 'is')
								res = (mapPosID===c.value) ? true : false;
							if(c.comparator === 'is not')
								res = (mapPosID!==c.value) ? true : false;
						}

						if(c.property==='Area Context'){
							if(c.comparator === 'is')
								res = areaCtx[c.value] ? true : false;
							if(c.comparator === 'is not')
								res = !areaCtx[c.value] ? true : false;
						}

						if(c.property==='Exact Location'){
							if(c.comparator === 'is')
								res = (locNameID===c.value) ? true : false;
							if(c.comparator === 'is not')
								res = (locNameID!==c.value) ? true : false;
						}

						if(c.property==='Location Context'){
							if(c.comparator === 'is')
								res = locCtx[c.value] ? true : false;
							if(c.comparator === 'is not')
								res = !locCtx[c.value] ? true : false;
						}

						if(index === 0){
							test = res;
						}else{
							if(c.operator === 'AND')
								test = test && res;
							if(c.operator === 'OR'){
								if(test===false)
									test = res;
								else
									return;
							}
						}
					});
					cndtn.result = test;

					if(cndtn.general)
						general = general && test;
				});
			};
			test_allConditions();
			if( !general ) return elem;
			


			let make_entryPartWithOneResultByProp = (settingsListProp, labelText, settingsListPropSet, propNameID, propValue)=>{
				let mainChecked = settingsList[settingsListProp].checked;
				let cndtnCat = conditions[ settingsList[settingsListProp].conditionID ];
				let cndtn = cndtnCat?.result ?? true;
				if(mainChecked && cndtn || !mainChecked && !cndtn){
					elem.innerHTML += create_titleDIV(labelText);
					let propSet = settingsList[settingsListPropSet];
					let subCndtn = conditions[ propSet[propNameID]?.conditionID ]?.result ?? true;
					let subChecked = propSet[propNameID]?.checked ?? true;
					if( subChecked && subCndtn || !subChecked && !subCndtn )
						elem.innerHTML += create_marginDIV(propValue);
					elem.innerHTML += '</br>';
				}
			};

			let update_ByAccordingQuantity = (elem, settingsListProp, instanceCount)=>{
				// TAKE THE LAST ELEMENTS CREATED BY create_marginDIV()
				// BLEND RANDOMLY THEM AND CONSERVE ONLY THE CORRECT QUANTITY OF THEM
				let quantity = settingsList[settingsListProp].quantity;
				if(quantity < instanceCount){
					let surplus = instanceCount - quantity;
					let firstIndex = elem.children.length - instanceCount;
					let blendLoopCount = (instanceCount*2) + Math.round(Math.random()); // arbitrary random loop count : instanceCount*2 + randomOdd
					// blending instances
					for(let i=0; i<blendLoopCount; i++){ 
						let randOffset = (Math.floor(Math.random()*instanceCount)); // rand = (min:0, max:instanceCount-1)
						let randIndex = firstIndex + (randOffset===0 ? instanceCount>>1 : randOffset); // change min:0 to instanceCount/2
						elem.children[firstIndex].insertAdjacentElement('beforebegin', elem.children[randIndex]);
					}
					// removing surplus
					for(let i=0; i<surplus; i++)
						elem.lastElementChild.remove();
				}
			};

			let make_entryPartWithSomeResultsByProp = (settingsListProp, labelText, settingsListPropSet, assignedProps, propNames)=>{
				let mainChecked = settingsList[settingsListProp].checked;
				let cndtnCat = conditions[ settingsList[settingsListProp].conditionID ];
				let cndtn = cndtnCat?.result ?? true;
				if(mainChecked && cndtn || !mainChecked && !cndtn){
					elem.innerHTML += create_titleDIV(labelText);
					let propSet = settingsList[settingsListPropSet];
					let instanceCount = 0;
					for(let k in propSet){
						let subCndtn = conditions[propSet[k].conditionID]?.result ?? true;
						let subChecked = propSet[k].checked;
						if(assignedProps[k])
							if( subChecked && subCndtn || !subChecked && !subCndtn ){
								elem.innerHTML += create_marginDIV( propNames[k] );
								instanceCount++;
							}
					}
					update_ByAccordingQuantity(elem, settingsListProp, instanceCount);
					elem.innerHTML += '</br>';
				}
			};


			
			// Area Name
			make_entryPartWithOneResultByProp(
				'displayRequestResultWithArea',
				'Area Name :',
				'displayRequestResultAreaSet',
				areaNameID,
				areaName
			);

			// Area Map Position
			make_entryPartWithOneResultByProp(
				'displayRequestResultWithMapPos',
				'Map Position :',
				'displayRequestResultMapPosSet',
				mapPosID,
				mapPos
			);
			
			// Area Context
			make_entryPartWithSomeResultsByProp(
				'displayRequestResultWithAreaCtx',
				'Area Context :',
				'displayRequestResultAreaCtxSet',
				areaCtx,
				areaCtxList
			);

			// Exact OoTR Location
			make_entryPartWithOneResultByProp(
				'displayRequestResultWithLocation',
				'Exact OoTR Location :',
				'displayRequestResultLocSet',
				locNameID,
				locName
			);
			
			// Location Context
			make_entryPartWithSomeResultsByProp(
				'displayRequestResultWithLocCtx',
				'Location Context :',
				'displayRequestResultLocCtxSet',
				locCtx,
				locCtxList
			);

			return elem;
		};

		board.appendChild(reqBtnStickyRect);
		board.appendChild(resultPanel);
		panel.appendChild(board);

		mode.appendChild(panel);
	})();


};