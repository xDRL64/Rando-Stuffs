

window.RandoStuffs.OoT.viewModes.locCtxEdit.init_OLD = function(workspace){


    workspace.textContent = '';
    let mode = document.createElement('div');
    workspace.appendChild(mode);


    mode.style.position = 'absolute';
    mode.style.inset = 0;
    mode.style.display = 'flex';
    mode.style.flexDirection = 'column';
	mode.style.justifyContent = 'center';
	mode.style.alignItems = 'center';

	//


    let core = window.RandoStuffs.OoT.core;

	
    let locs = core.Location.Data;

    let loc = core.Location.list;
    let contextList = core.Location.context;


	// CREATE DISPLAYER
	///////////////////
	let context_count = Object.keys(contextList).length;
	let location_count = loc.length;

	// viewport
	let panel = document.createElement('div');
	panel.style.width = '75%';
	panel.style.height = '75%';
	panel.style.whiteSpace = 'nowrap';
	panel.style.overflow = 'auto';
	panel.style.position = 'relative';

	// whole grid
	let board = document.createElement('div');
	board.style.display = 'grid';
	board.style.gridTemplateColumns = 'auto repeat('+context_count+', 1fr)';
	board.style.gridTemplateRows = 'auto repeat('+location_count+', 1fr)';


	// top left corner cell
	let cornerCell;
		cornerCell = document.createElement('div');
		cornerCell.style.position = 'sticky';
		cornerCell.style.top = 0;
		cornerCell.style.left = 0;
		cornerCell.style.zIndex = 2;
		cornerCell.style.backgroundColor = '#777';
	board.appendChild(cornerCell);

	// context labels (top axis header)
	let ctxLabels = {};
	for(let ctx in contextList){
		let ctxLabel = document.createElement('div');
		ctxLabel.textContent = contextList[ctx];
		ctxLabel.style.writingMode = 'vertical-lr';
		ctxLabel.style.whiteSpace = 'pre';
		ctxLabel.style.display = 'flex';
		ctxLabel.style.alignItems = 'center';

		ctxLabel.style.position = 'sticky';
		ctxLabel.style.top = 0;
		ctxLabel.style.backgroundColor = 'white';
		ctxLabel.style.zIndex = 1;

		ctxLabel.classList.add('grid-cell');
		ctxLabel.app = {verticalParent:ctxLabel};

		board.appendChild(ctxLabel);

		ctxLabels[ctx] = ctxLabel;
	}

	// location labels (left axis header)
	for(let lctn of loc){
		let locRow = document.createElement('div');
		locRow.textContent = lctn;

		locRow.style.position = 'sticky';
		locRow.style.left = 0;
		locRow.style.backgroundColor = 'white';
		locRow.style.zIndex = 1;

		locRow.classList.add('grid-cell');
		locRow.app = {horizontalParent:locRow};
		board.appendChild(locRow);

		// context flag checkbox by location (main data grid)
		for(let ctx in contextList){
			let ctxCell = document.createElement('input');
			ctxCell.type = 'checkbox';
			ctxCell.checked = locs[lctn].context[ctx];
			ctxCell.classList.add('grid-cell');
			ctxCell.app = {horizontalParent:locRow, verticalParent:ctxLabels[ctx]};

			ctxCell.oninput = ()=>{
				// update core.Location.Data
				locs[lctn].context[ctx] = ctxCell.checked;
				// update core.Location.byContext
				core.Location.byContext[ctx].push(lctn);
			};

			board.appendChild(ctxCell);
		}
	}

	panel.appendChild(board);
	mode.appendChild(panel);





    // CREATE GRID POINTERS
	///////////////////////
	let create_gridPointer = function(className){

		/* External :
			board
			panel
			cornerCell
		*/

		// INIT
		///////
		let brd = 2; // pointer border size
		let scrlbarwidth = 16; // estimated scrollbar pixel size

		let hPointer = document.createElement("div");
		hPointer.style.position = "absolute";
		hPointer.style.pointerEvents = "none";
		hPointer.style.border = brd+"px solid red";
		hPointer.style.boxSizing = 'border-box';
		hPointer.style.zIndex = 3;
		hPointer.style.display = 'none';
        panel.appendChild(hPointer);

		let vPointer = document.createElement("div");
		vPointer.style.position = "absolute";
		vPointer.style.pointerEvents = "none";
		vPointer.style.border = "2px solid blue";
		vPointer.style.boxSizing = 'border-box';
		vPointer.style.zIndex = 3;
		vPointer.style.display = 'none';
        panel.appendChild(vPointer);

		// UPDATE AND DISPLAY POSITION
		//////////////////////////////
		board.onmouseover = function(e){
			if(e.target.className === className){

				// get scrollbar presence
				let Hscrl = panel.scrollWidth  > panel.offsetWidth  ? 1 : 0;
				let Vscrl = panel.scrollHeight > panel.offsetHeight ? 1 : 0;

				// update horizontal pointer
				if(e.target.app.horizontalParent){
					let block = e.target.app.horizontalParent;
					
					hPointer.style.left = panel.scrollLeft;
					hPointer.style.width = panel.offsetWidth - (scrlbarwidth*Vscrl) - brd;

					hPointer.style.top = block.offsetTop ;
					hPointer.style.height = block.offsetHeight;
					hPointer.style.display = '';
				}else
					hPointer.style.display = 'none';

				// update vertical pointer
				if(e.target.app.verticalParent){
					let block = e.target.app.verticalParent;
					
					vPointer.style.top = panel.scrollTop;
					vPointer.style.height = panel.offsetHeight - (scrlbarwidth*Hscrl) - brd;
					
					vPointer.style.left = block.offsetLeft;
					vPointer.style.width = block.offsetWidth;
					vPointer.style.display = '';
				}else
					vPointer.style.display = 'none';
			}
		};

		// UPDATE AND HIDE POSITION
		//////////////////////////////
		
		let hide_gridPointers= function(){
			hPointer.style.display = 'none';
			vPointer.style.display = 'none';
		};

		board.onmouseleave = hide_gridPointers;
		panel.onscroll = hide_gridPointers;
		cornerCell.onmouseenter = hide_gridPointers;
		
		
	};
	create_gridPointer('grid-cell');



	// ADD [EXPORT AS JSON] BUTTON
	//////////////////////////////

	/* let add_exportButtons = function(){

		let exportBtn_LocByCtx = document.createElement('a');
		exportBtn_LocByCtx.textContent = 'Export Locations_by_Context.json';
		exportBtn_LocByCtx.href = '';
		exportBtn_LocByCtx.style.margin = 16;
		exportBtn_LocByCtx.style.padding = 4;
		exportBtn_LocByCtx.style.border = '2px outset lightgrey';
		exportBtn_LocByCtx.style.backgroundColor = '#aeaeae';

		exportBtn_LocByCtx.onclick = function(){
			let data = get_LocByCtx();
			let json = JSON.stringify(data, null, '\t');
			let txtFile = [];
			for(let c of json) txtFile.push(c.charCodeAt(0));

			this.href = URL.createObjectURL( new Blob([new Uint8Array( txtFile )], {type: 'application/octet-stream'}));
			this.download = 'Locations_by_Context.json';
		};

		mode.appendChild(exportBtn_LocByCtx);
	}; */
	//add_exportButtons();


};

window.RandoStuffs.OoT.viewModes.locCtxEdit.reset = function(workspace){
	window.RandoStuffs.OoT.viewModes.locCtxEdit.init(workspace);
};

window.RandoStuffs.OoT.viewModes.locCtxEdit.init = function(workspace){
	workspace.textContent = '';
    let mode = document.createElement('div');
    workspace.appendChild(mode);

    mode.style.position = 'absolute';
    mode.style.inset = 0;
    mode.style.display = 'flex';
    mode.style.flexDirection = 'column';
	mode.style.justifyContent = 'center';
	mode.style.alignItems = 'center';

	//
	let core = window.RandoStuffs.OoT.core;
	let Location = core.Location;
	let Data = Location.Data;
	let keyList = Location.list;
	let valList = {};
	keyList.forEach(e=>valList[e]=e);
	let contextList = Location.context;
	let databyContext = Location.byContext;

	let htmlElems = window.RandoStuffs.OoT.viewModes.mainLib.editContextBy.create_editorView(Data, keyList, valList, contextList, databyContext);
	window.RandoStuffs.OoT.viewModes.mainLib.editContextBy.create_gridPointer(htmlElems);
	mode.appendChild(htmlElems.handle);
};

