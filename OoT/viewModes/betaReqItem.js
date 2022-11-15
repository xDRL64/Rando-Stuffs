window.RandoStuffs.OoT.viewModes.betaReqItem.init = function(workspace){

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
	mode.style.overflowX = 'scroll';

	// mode.theApp.shiftKey
	(()=>{
		mode.theApp = {};
		mode.theApp.shiftKey = false;
		let update_shiftKey = (e)=>{mode.theApp.shiftKey=e.shiftKey};
		mode.onkeydown = (e)=>{update_shiftKey(e)};
		mode.onkeyup= (e)=>{update_shiftKey(e)};
	})();

	//

	let OoT = window.RandoStuffs.OoT;

	let spoilerFile = OoT.fileSlots.spoilerLog;

	let core = OoT.core;

	let itemList = core.Item.list; // { itemName:'item gfx data url', ... }

	let areaList = core.Area.list;

	let mapPosList = core.Area.mapPos;

	let areaCtxList = core.Area.context;

	let locList = core.Location.list;

	let locCtxList = core.Location.context;
	
	let appLocs = core.Location.Data;

	// OoT item selection (input panel)
	///////////////////////////////
	let selectedItemList = new Set();
	let itemQuantities = {};
	Object.keys(itemList).forEach(e=>itemQuantities[e]=Number.POSITIVE_INFINITY);
	(()=>{
		// make panel's viewport sys
		////////////////////////////
		let panel = document.createElement('div');
		panel.style.overflowY = 'scroll';
		panel.style.height = '75%';

		let board = document.createElement('div');
		board.style.display = 'grid';
		board.style.alignItems = 'center';
		board.style.gridTemplateColumns = 'auto auto auto auto';
		board.style.gridTemplateRows = `repeat(${itemList.length}, 1fr)`;
		
		// fill item board
		//////////////////
		for(let name in itemList){
			// item gfx icon
			let itemGFX = itemList[name];
			let itemIcon = document.createElement('img');
			itemIcon.src = itemGFX;
			itemIcon.style.margin = 4;
			itemIcon.style.justifySelf = 'center';
			itemIcon.style.border = '1px solid black';
			itemIcon.onclick = ()=>itemSelectState.click();
			board.appendChild(itemIcon);
	
			// item checkbox
			let itemSelectState = document.createElement('input');
			itemSelectState.type = 'checkbox';
			itemSelectState.style.margin = 4;
			itemSelectState.oninput = function(){
				if(this.checked) selectedItemList.add(name);
				else             selectedItemList.delete(name);
			};
			board.appendChild(itemSelectState);
	
			// item name label
			let itemNameLabel = document.createElement('label');
			itemNameLabel.textContent = name;
			itemNameLabel.style.display = 'flex';
			itemNameLabel.style.alignItems = 'center';
			itemNameLabel.style.margin = 4;
			itemNameLabel.onclick = ()=>itemSelectState.click();
			board.appendChild(itemNameLabel);

			// item max display quantity input
			let quantityInput = document.createElement('input');
			quantityInput.type = 'number';
			quantityInput.min = 1;
			quantityInput.placeholder = 'max';
			quantityInput.style.width = 48;
			quantityInput.oninput = function(){ itemQuantities[name]=this.value||Number.POSITIVE_INFINITY; };
			board.appendChild(quantityInput);
	
		}

		panel.appendChild(board);
		mode.appendChild(panel);
	})();

	let get_defaultCheckList = (baseList/*string array*/, defaultValue)=>{
		let o = {};
		for(let c of baseList) o[c] = {checked:defaultValue, conditionID:null};
		return o;
	};
	let settingsList = {
		displayRequestResultByItem       : true,
		displayRequestResultWithArea     : {checked:true, conditionID:null},
		displayRequestResultWithMapPos   : {checked:true, conditionID:null},
		displayRequestResultWithAreaCtx  : {checked:true, conditionID:null, quantity:null},
		displayRequestResultWithLocation : {checked:true, conditionID:null},
		displayRequestResultWithLocCtx   : {checked:true, conditionID:null, quantity:null},

		displayRequestResultAreaSet : get_defaultCheckList(Object.keys(areaList), true),
		displayRequestResultMapPosSet : get_defaultCheckList(Object.keys(mapPosList), true),
		displayRequestResultAreaCtxSet : get_defaultCheckList(Object.keys(areaCtxList), true),

		displayRequestResultLocSet : get_defaultCheckList(Object.keys(locList), true),
		displayRequestResultLocCtxSet : get_defaultCheckList(Object.keys(locCtxList), true),
	};
	DEBUG_EXPORT__settingsList = settingsList; // debug
	

	let _conditionGroupsBoard = null;

	
	// settings selection (input panel)
	///////////////////////////////////
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

		let create_checkbox = function(label, oninput, checked=false){
			let elem = document.createElement('input');
				elem.type = 'checkbox';
				elem.style.margin = 16;
				elem.oninput = oninput;
				elem.checked = checked;

			let _label = document.createElement('label');
				_label.innerHTML = '<span>'+label+'</span>';
				_label.prepend(elem);
			return _label;
		};




		// make panel's viewport sys
		////////////////////////////
		let panel = document.createElement('div');
		panel.style.overflowY = 'scroll';
		panel.style.height = '75%';

		let board = document.createElement('div');
		board.style.display = 'grid';
		board.style.gridTemplateColumns = 'auto';

		


		// fill settings board
		//////////////////////


			// display (beta test condition req)
			((elem=null)=>{

				let create_conditionGroup = OoT.viewModes.mainLib.editCondition.create_conditionGroup;

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
				conditionGroupsBoard.style.width = '100%';
				
				// add new [button]
				let addNew = document.createElement('input');
				addNew.type = 'button';
				addNew.value = 'Add New Condition Group';
				addNew.style.margin = 4;
				addNew.onclick = ()=>{
					let newGroup = create_conditionGroup(conditionGroupsBoard, allRef, true);
					conditionGroupsBoard.appendChild( newGroup );				
				};
				
				
				pan_condition.appendChild( conditionGroupsBoard );
				pan_condition.appendChild( addNew );
				board.appendChild(pan_condition);

				// export
				_conditionGroupsBoard = conditionGroupsBoard;
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
						true
					);
					pan_displayMode.appendChild(op_withItem);
	
					// option : Display Request Result Without Telling Which Items
					let op_withoutItem = create_radioButton(
						'pan_displayMode', 'Display Request Result Without Telling Which Items',
						()=>{ settingsList.displayRequestResultByItem=false; }
					);
					pan_displayMode.appendChild(op_withoutItem);

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
					if(obj[prop].quantity === null){
						let max = Object.keys(obj[propSet]).length;
						let quantityInput = document.createElement('input');
						quantityInput.type = 'number';
						quantityInput.max = max;
						quantityInput.min = 1;
						quantityInput.placeholder = 'max';
						quantityInput.oninput = function(){ obj[prop].quantity=this.value||max; };
						//elem.insertBefore(quantityInput, elem.lastElementChild);
						
						obj[prop].quantity = max;
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
					conditionHook.oninput = function(){ obj[prop].conditionID=this.value; };
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

				//
				let make_categoryWithSubPanel = function(mainLabel, mainSetName, subList, subLabelEnd, subSetName, parent){
					let checkboxes = [];

					// main checkbox
					let category = create_checkbox(
						mainLabel,
						function(){
							settingsList[mainSetName].checked=this.checked;
							checkboxes.forEach(e=>e.style.opacity=(this.checked?1.0:0.5));
							if(mode.theApp.shiftKey)
								checkboxes.forEach(e=>e.checked=this.checked);
						},
						true,
					);
					
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
						for(let k in subList){
							subElem.appendChild(
								create_checkbox(
									`Display ${subList[k]} ${subLabelEnd}`,
									function(){settingsList[subSetName][k].checked=this.checked},
									true,
								)
							);           // pan    .label           .checkbox
							checkboxes.push(subElem.lastElementChild.firstElementChild);
							                   // pan    .label
							apply_cssStyle(       subElem.lastElementChild);
							attach_conditionHook( subElem.lastElementChild, settingsList[subSetName], k);
							    // .label           .conditionInput 
							subElem.lastElementChild.lastElementChild.style.marginLeft = 'auto';
						}

					make_foldable(category, subElem, 'close');

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


	// display request result (output panel)
	////////////////////////////////////////
	(()=>{

		let getObject_conditionGroups = OoT.viewModes.mainLib.editCondition.getObject_conditionGroups;

		// make panel's viewport sys
		////////////////////////////
		let panel = document.createElement('div');
			panel.style.overflowY = 'scroll';
			panel.style.height = '75%';

		let board = document.createElement('div');
			board.style.display = 'grid';
			board.style.gridTemplateColumns = 'auto';
			board.style.minHeight = '100%';
			board.style.justifyItems = 'center';
			board.style.alignItems = 'center';
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
				// loop on all selected item
				for(let item of selectedItemList){
					// get all loc for the current item
					for(let locName in OoTR_locs){
						let locItem = OoTR_locs[locName];
						if(typeof locItem !== 'string') locItem = locItem.item;
						if(locItem === item){
							foundLocs.push(locName);
							foundLocsByItem[locItem].push(locName);
						}
					}
					// rebalance quantity for the current item
					if(itemQuantities[item] < foundLocsByItem[item].length){
						// randomize
						foundLocsByItem[item] = foundLocsByItem[item].sort(
							()=>{ return (Math.random()-.5)>=0 ? 1 : -1; }
						);
						// remove surplus
						let surplus = foundLocsByItem[item].length - itemQuantities[item];
						for(let i=0; i<surplus; i++) foundLocsByItem[item].pop();
					}
				}

				// get condition group from condition panel
				let displayConditions = getObject_conditionGroups(_conditionGroupsBoard)
				DEBUG_EXPORT__getObject_conditionGroups = displayConditions;	

				// display result
				console.log(foundLocs);
				console.log(foundLocsByItem);
				// display with telling which item
				if(settingsList.displayRequestResultByItem){
					let imgSlotSize = 32 + (8*2); // maxImgHeight + verticalMargin
					for(let item of selectedItemList){
						for(let loc of foundLocsByItem[item]){
							let itemHeader = document.createElement('div');
							itemHeader.style.display = 'grid';
							itemHeader.style.alignItems = 'center';
							itemHeader.style.gridTemplateColumns = imgSlotSize+'px auto';
							itemHeader.style.gridTemplateRows = imgSlotSize+'px';
							itemHeader.style.backgroundColor = 'lightgrey';
							itemHeader.style.border = '2px solid black';
							//itemHeader.style.marginTop = 16;
							itemHeader.innerHTML = `<img src=${itemList[item]} style="margin:8px;justify-self:center;">`
							                     + `<span style="margin:8px 16px;">${item}</span>`;

							//resultPanel.appendChild(itemHeader);
							//resultPanel.appendChild( create_resultEntry(loc, displayConditions) );
							let resEntry = create_resultEntry(loc, displayConditions);
							resEntry.prepend(itemHeader);
							resultPanel.appendChild(resEntry);
						}
					}
				// display without telling which item
				}else{
					// make results
					for(let loc of foundLocs){
						resultPanel.appendChild( create_resultEntry(loc, displayConditions) );
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

				// add button [export result (in new window/tab)]
				let exportResultButton = document.createElement('input');
					exportResultButton.type = 'button';
					exportResultButton.style.margin = 16;
					exportResultButton.value = 'Export this request result in\n a new web browser window/tab';
					exportResultButton.onclick2 = ()=>{
						// create page title
						let title = [...selectedItemList].join(' - ');

						// create result node
						let mainWidth = board.offsetWidth;
						let cleanClone = resultPanel.cloneNode(true);
							cleanClone.lastElementChild.remove();
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
					exportResultButton.onclick = ()=>{
						// create page title
						let title = [...selectedItemList].join(' - ');

						// create result node
						let mainWidth = board.offsetWidth;
						let cleanClone = resultPanel.cloneNode(true);
							cleanClone.lastElementChild.remove();
							cleanClone.style.gridTemplateColumns = `repeat(auto-fill, minmax(${mainWidth}px,1fr))`;
							cleanClone.style.gap = '16px';

						// create new url address
						let url = (()=>{
							const len = ('main.html').length;
							const str = 'address/main.html#';
							const reg = /main\.html/g;
							const all = [...str.matchAll(reg)];
							const cnt = all.length;
							const res = all.pop();
							return str.slice(0,res.index) + 'p.html?transferDATA=' + btoa(cleanClone.outerHTML);
						})();

						url = 'p.html?transferDATA=' + encodeURIComponent(btoa(cleanClone.outerHTML))
						    + '&transferTITLE='      + encodeURIComponent(btoa(title));

						// open new browser window/tab
						let resultWindow = window.open(url, '_blank');
						//	resultWindow.document.body.appendChild(cleanClone);
						//	resultWindow.document.title = title;
					};
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
			let create_titleDIV = (titleText)=>{ return '<div style="font-weight:bold;margin:4px 8px;">'+titleText+'</div>' };

			//let create_marginSPAN = (marginText)=>{ return '<span style="margin-left:16px">'+marginText+'</span></br>' };
			let create_marginDIV = (marginText)=>{ return '<div style="margin-left:24px;margin-right:8px;">'+marginText+'</div>' };

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