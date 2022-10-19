window.RandoStuffs.OoT.viewModes.betaReqItemEnv.init = function(workspace){

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

	//

	let spoilerFile = window.RandoStuffs.OoT.fileSlots.spoilerLog;

	let core = window.RandoStuffs.OoT.core;

	let itemList = core.Item.list // { itemName:'item gfx data url', ... }

	let kindList = core.Area.kind;
	let cardinalList = core.Area.cardinal;

	let sanityList = core.Location.sanity;
	let environmentList = core.Location.environment;
	
	let appLocs = core.Location.Data;

	// item selection (input panel)
	///////////////////////////////
	let selectedItemList = new Set();
	(()=>{
		// make panel's viewport sys
		////////////////////////////
		let panel = document.createElement('div');
		panel.style.overflowY = 'scroll';
		panel.style.height = '75%';

		let board = document.createElement('div');
		board.style.display = 'grid';
		board.style.gridTemplateColumns = 'auto auto auto';
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
				else             selectedItemList.delete(name); console.log(selectedItemList);
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
	
		}

		panel.appendChild(board);
		mode.appendChild(panel);
	})();

	let get_defaultCheckList = (baseList/*string array*/, defaultValue)=>{
		let o = {};
		for(let c of baseList) o[c] = defaultValue;
		return o;
	};
	let settingsList = {
		displayRequestResultByItem : true,
		displayRequestResultWithArea : true,
		displayRequestResultWithMapPos : true,
		displayRequestResultWithKind : true,
		displayRequestResultWithCardinal : true,
		displayRequestResultWithLocation : true,
		displayRequestResultWithSanity : true,
		displayRequestResultWithEnvironment : true,

		displayRequestResultKindSet : get_defaultCheckList(Object.keys(kindList), true),
		displayRequestResultCardinalSet : get_defaultCheckList(Object.keys(cardinalList), true),
		displayRequestResultSanitySet : get_defaultCheckList(Object.keys(sanityList), true),
		displayRequestResultEnvironmentSet : get_defaultCheckList(Object.keys(environmentList), true),
	};
	DEBUG_EXPORT__settingsList = settingsList; // debug
	

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

		let boardLen = Object.keys(settingsList).length;
		let board = document.createElement('div');
		board.style.display = 'grid';
		board.style.gridTemplateColumns = 'auto';
	//    board.style.gridTemplateRows = `repeat(${boardLen}, 1fr)`;
		


		// fill settings board
		//////////////////////

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

				let make_categoryWithSubPanel = function(mainLabel, mainSetName, subList, subLabelEnd, subSetName, parent){
					let checkboxes = [];
					// main checkbox
					let category = create_checkbox(
						mainLabel,
						function(){
							settingsList[mainSetName]=this.checked;
							checkboxes.forEach(e=>e.disabled=!this.checked);
						},
						true,
					);
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
									function(){settingsList[subSetName][k]=this.checked},
									true,
								)
							);           // pan    .label           .checkbox
							checkboxes.push(subElem.lastElementChild.firstElementChild);
						}
					parent.appendChild(subElem);
				};

				let pan_displayCat = document.createElement('div');
					elem = pan_displayCat;
					elem.style.display = 'flex';
					elem.style.flexDirection = 'column';
					elem.style.border = '1px solid black';

				// Area Category
				let areaCat = create_checkbox(
					'Display Hyrule Area',
					function(){settingsList.displayRequestResultWithArea=this.checked},
					true,
				);
				elem.appendChild(areaCat);

				// Map Postion Category
				let mapPosCat = create_checkbox(
					'Display Hyrule Map Position',
					function(){settingsList.displayRequestResultWithMapPos=this.checked},
					true,
				);
				elem.appendChild(mapPosCat);

				// Kind Category
				make_categoryWithSubPanel(
					'Display Kind of Area',
					'displayRequestResultWithKind',
					kindList,
					'Area Kind',
					'displayRequestResultKindSet',
					elem
				);

				// Cardinal Point Category
				make_categoryWithSubPanel(
					'Display Cardinal Direction of Area',
					'displayRequestResultWithCardinal',
					cardinalList,
					'Area Cardinal',
					'displayRequestResultCardinalSet',
					elem
				);

				// Location Category
				let locationCat = create_checkbox(
					'Display Exact Hyrule Check Location (OoTR label)',
					function(){settingsList.displayRequestResultWithLocation=this.checked},
					true,
				);
				elem.appendChild(locationCat);

				// Sanity Category
				make_categoryWithSubPanel(
					'Display "Sanity" of Hyrule Check Location',
					'displayRequestResultWithSanity',
					sanityList,
					'Location Sanity',
					'displayRequestResultSanitySet',
					elem
				);

				// Environment Category
				make_categoryWithSubPanel(
					'Display "Environment" of Hyrule Check Location',
					'displayRequestResultWithEnvironment',
					environmentList,
					'Location Environment',
					'displayRequestResultEnvironmentSet',
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


		let resultPanel = document.createElement('div');
			resultPanel.style.display = 'grid';
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
				// process
				for(let item of selectedItemList){
					for(let locName in OoTR_locs){
						let locItem = OoTR_locs[locName];
						if(typeof locItem !== 'string') locItem = locItem.item;
						if(locItem === item){
							foundLocs.push(locName);
							foundLocsByItem[locItem].push(locName);
						}
					}
				}

				// display result
				for(let loc of foundLocs){
					resultPanel.appendChild( create_resultEntry(loc) );
				}
				console.log(foundLocs);
				console.log(foundLocsByItem);
			};

		let create_resultEntry = function(locName){

			let location = appLocs[locName];

			let area = location.area;
			let areaName = area?.name  || 'Not Found';
			let mapPos   = area?.map   || 'Not Found';
			let kind     = area?.kind  || 'Not Found';
			let cardinal = area?.crdnl || 'Not Found';

			

			let elem = document.createElement('div');
				elem.style.border = '1px solid black';

			let create_tileSPAN = (titleText)=>{ return '<span style="font-weight:bold;">'+titleText+'</span></br>' };
			let create_marginSPAN = (marginText)=>{ return '<span style="margin-left:16px">'+marginText+'</span></br>' };

			if(settingsList.displayRequestResultWithArea)
				elem.innerHTML += create_tileSPAN('Area Name :')
				               +  create_marginSPAN(areaName)
							   +  '</br>';

			if(settingsList.displayRequestResultWithMapPos)
				elem.innerHTML += create_tileSPAN('Map Position :')
				               +  create_marginSPAN(mapPos)
							   +  '</br>';

			if(settingsList.displayRequestResultWithKind)
				elem.innerHTML += '<span style="font-weight:bold;">Kind of Area :</span></br>'
							   +  '<span style="margin-left:16px">'+kind+'</span></br>'
							   +  '</br>';
			
			if(settingsList.displayRequestResultWithCardinal){
				elem.innerHTML += create_tileSPAN('Cardinal Direction :');
				let cardinalSet = settingsList.displayRequestResultCardinalSet;
				for(let k in cardinalSet){
					if( cardinalSet[k] && cardinalList[k]===cardinal )
						elem.innerHTML += create_marginSPAN(cardinal);
				}
				elem.innerHTML += '</br>';
			}

			if(settingsList.displayRequestResultWithLocation)
				elem.innerHTML += create_tileSPAN('Exact OoTR Location :')
				               +  create_marginSPAN(locName)
							   +  '</br>';

			if(settingsList.displayRequestResultWithSanity){
				elem.innerHTML += create_tileSPAN('Location "Sanity" :');
				let sanitySet = settingsList.displayRequestResultSanitySet;
				let sanity = location.sanity;
				for(let k in sanitySet){
					let sanityText = sanityList[k];
					if( sanitySet[k] && sanity.includes(sanityText) )
						elem.innerHTML += create_marginSPAN(sanityText);
				}
				elem.innerHTML += '</br>';
			}

			if(settingsList.displayRequestResultWithEnvironment){
				elem.innerHTML += create_tileSPAN('Location "Environment" :');
				let environmentSet = settingsList.displayRequestResultEnvironmentSet;
				let environment = location.environment;
				for(let k in environmentSet){
					let environmentText = environmentList[k];
					if( environmentSet[k] && environment[k] )
						elem.innerHTML += create_marginSPAN(environmentText);
				}
				elem.innerHTML += '</br>';
			}

			return elem;
		};

		board.appendChild(reqButton);
		board.appendChild(resultPanel);
		panel.appendChild(board);

		mode.appendChild(panel);
	})();


};