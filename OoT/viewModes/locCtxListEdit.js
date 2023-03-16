window.RandoStuffs.OoT.viewModes.locCtxListEdit.reset = function(workspace){
	window.RandoStuffs.OoT.viewModes.locCtxListEdit.init(workspace);
};

window.RandoStuffs.OoT.viewModes.locCtxListEdit.init = function(workspace){

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

	let core = window.RandoStuffs.OoT.core;

	let dict_cdntLstIndx = core.dict_itemReqView.conditionDroplistIndexes; // get item request view conditions ref
	let {conditionGroups} = window.RandoStuffs.OoT.viewModes.itemReqView?.sessionInstance?.data || {};

	let locCtxList = core.Location.context;

	let locByCtx = core.Location.byContext;

	let locMake = core.Location.make;
	
	let create_boardItem = window.RandoStuffs.OoT.viewModes.mainLib.editContext.create_boardItem;

	let clean_itemBoard = window.RandoStuffs.OoT.viewModes.mainLib.editContext.clean_itemBoard;

	let {sync_conditionsWithContextList} = window.RandoStuffs.OoT.viewModes.mainLib;

	(()=>{

		// context list [board]
		///////////////////////

		let mainPanel = document.createElement('div');
		mainPanel.style.width = '90%';
		mainPanel.style.height = '75%';
		
		mainPanel.style.overflowY = 'scroll';

		let mainBoard = document.createElement('div');
		mainBoard.style.display = 'flex';
		mainBoard.style.flexDirection = 'column';

		for(let ctxID in locCtxList){

			let boardItem = create_boardItem(mainBoard, ctxID, locCtxList[ctxID]);

			mainBoard.appendChild(boardItem);
		}

		// apply changes [button]
		/////////////////////////

		let applyChangesBtn = document.createElement('input');
		applyChangesBtn.type = 'button';
		applyChangesBtn.value = 'Apply Changes';
		applyChangesBtn.style.margin = 16;
		applyChangesBtn.onclick = ()=>{

			// clean location context board items
			/////////////////////////////////////
			clean_itemBoard(mainBoard);

			// sync with item request view conditions (step 1)
			/////////////////////////////////////////
			// keep tmp save copy of locCtxList
			let tmp_locCtxList = structuredClone(locCtxList);

			// rebuild location context list
			////////////////////////////////

			// make empty internal location context list
			Object.keys(locCtxList).forEach(key => delete locCtxList[key]);

			// refill internal location context list
			let boardItemList = [...mainBoard.children];
			for(let boardItem of boardItemList){
				locCtxList[ boardItem.children[0].value ] = boardItem.children[1].value;
			}

			// rebuild internal location byContext
			//////////////////////////////////////

			// keep a tmp soft copy of internal location byContext
			let tmp_locByCtx = {...locByCtx};

			// make empty internal location byContext
			Object.keys(locByCtx).forEach(key => delete locByCtx[key]);

			// refill internal location byContext
			for(let ctx in locCtxList){
				locByCtx[ctx] = tmp_locByCtx[ctx] || [];
			}

			// rebuild internal location Data
			/////////////////////////////////
			locMake();

			// sync with item request view conditions (step 2)
			/////////////////////////////////////////
			sync_conditionsWithContextList(conditionGroups, dict_cdntLstIndx.locCtx('i'), tmp_locCtxList, locCtxList);

		};

		mainPanel.appendChild(mainBoard);
		mode.appendChild(mainPanel);
		mode.appendChild(applyChangesBtn);
	})();

}