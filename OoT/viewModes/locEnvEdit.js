

window.RandoStuffs.OoT.viewModes.locEnvEdit.init = function(workspace){


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
    let environmentList = core.Location.environment;


	// CREATE DISPLAYER
	///////////////////
	let environment_count = Object.keys(environmentList).length;
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
	board.style.gridTemplateColumns = 'auto repeat('+environment_count+', 1fr)';
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

	// environment labels (top axis header)
	let envLabels = {};
	for(let env in environmentList){
		let envLabel = document.createElement('div');
		envLabel.textContent = environmentList[env];
		envLabel.style.writingMode = 'vertical-lr';
		envLabel.style.whiteSpace = 'pre';
		envLabel.style.display = 'flex';
		envLabel.style.alignItems = 'center';

		envLabel.style.position = 'sticky';
		envLabel.style.top = 0;
		envLabel.style.backgroundColor = 'white';
		envLabel.style.zIndex = 1;

		envLabel.classList.add('grid-cell');
		envLabel.app = {verticalParent:envLabel};

		board.appendChild(envLabel);

		envLabels[env] = envLabel;
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

		// environment flag checkbox by location (main data grid)
		for(let env in environmentList){
			let envCell = document.createElement('input');
			envCell.type = 'checkbox';
			envCell.checked = locs[lctn].environment[env];
			envCell.classList.add('grid-cell');
			envCell.app = {horizontalParent:locRow, verticalParent:envLabels[env]};

			envCell.oninput = ()=>{
				// update core.Location.Data
				locs[lctn].environment[env] = envCell.checked;
				// update core.Location.byEnvironment
				core.Location.byEnvironment[env].push(lctn);
			};

			board.appendChild(envCell);
		}
	}

	panel.appendChild(board);
	mode.appendChild(panel);





    // CREATE GRID POINTERS
	///////////////////////
	let create_gridPointer = function(className){

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

		let exportBtn_LocByEnv = document.createElement('a');
		exportBtn_LocByEnv.textContent = 'Export Locations_by_Environment.json';
		exportBtn_LocByEnv.href = '';
		exportBtn_LocByEnv.style.margin = 16;
		exportBtn_LocByEnv.style.padding = 4;
		exportBtn_LocByEnv.style.border = '2px outset lightgrey';
		exportBtn_LocByEnv.style.backgroundColor = '#aeaeae';

		exportBtn_LocByEnv.onclick = function(){
			let data = get_LocByEnv();
			let json = JSON.stringify(data, null, '\t');
			let txtFile = [];
			for(let c of json) txtFile.push(c.charCodeAt(0));

			this.href = URL.createObjectURL( new Blob([new Uint8Array( txtFile )], {type: 'application/octet-stream'}));
			this.download = 'Locations_by_Environment.json';
		};

		mode.appendChild(exportBtn_LocByEnv);
	}; */
	//add_exportButtons();


};