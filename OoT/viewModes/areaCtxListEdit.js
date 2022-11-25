window.RandoStuffs.OoT.viewModes.areaCtxListEdit.reset = function(workspace){
	window.RandoStuffs.OoT.viewModes.areaCtxListEdit.init(workspace);
};

window.RandoStuffs.OoT.viewModes.areaCtxListEdit.init = function(workspace){

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

	let areaCtxList = core.Area.context;

	let areaByCtx = core.Area.byContext;

	let coreBuildAll = core.buildAll;
	
	let create_boardItem = window.RandoStuffs.OoT.viewModes.mainLib.editContext.create_boardItem;

	let clean_itemBoard = window.RandoStuffs.OoT.viewModes.mainLib.editContext.clean_itemBoard;

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

		for(let ctxID in areaCtxList){

			let boardItem = create_boardItem(mainBoard, ctxID, areaCtxList[ctxID]);

			mainBoard.appendChild(boardItem);
		}

		// apply changes [button]
		/////////////////////////

		let applyChangesBtn = document.createElement('input');
		applyChangesBtn.type = 'button';
		applyChangesBtn.value = 'Apply Changes';
		applyChangesBtn.style.margin = 16;
		applyChangesBtn.onclick = ()=>{

			// clean area context board items
			/////////////////////////////////
			clean_itemBoard(mainBoard);
			
			// rebuild area context list
			////////////////////////////

			// make empty internal area context list
			Object.keys(areaCtxList).forEach(key => delete areaCtxList[key]);

			// refill internal area context list
			let boardItemList = [...mainBoard.children];
			for(let boardItem of boardItemList){
				areaCtxList[ boardItem.children[0].value ] = boardItem.children[1].value;
			}

			// rebuild internal area byContext
			//////////////////////////////////

			// keep a tmp soft copy of internal area byContext
			let tmp_areaByCtx = {...areaByCtx};

			// make empty internal area byContext
			Object.keys(areaByCtx).forEach(key => delete areaByCtx[key]);

			// refill internal area byContext
			for(let ctx in areaCtxList){
				areaByCtx[ctx] = tmp_areaByCtx[ctx] || [];
			}

			// rebuild internal area Data and location Data
			///////////////////////////////////////////////
			coreBuildAll();

		};

		mainPanel.appendChild(mainBoard);
		mode.appendChild(mainPanel);
		mode.appendChild(applyChangesBtn);
	})();

}