window.RandoStuffs.OoT.viewModes.areaCtxEdit.reset = function(workspace){
	window.RandoStuffs.OoT.viewModes.areaCtxEdit.init(workspace);
};

window.RandoStuffs.OoT.viewModes.areaCtxEdit.init = function(workspace){
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
	let Area = core.Area;
	let Data = Area.Data;
	let keyList = Object.keys(Area.list);
	let valList = Area.list;
	let contextList = Area.context;
	let databyContext = Area.byContext;

	let htmlElems = window.RandoStuffs.OoT.viewModes.mainLib.editContextBy.create_editorView(Data, keyList, valList, contextList, databyContext);
	window.RandoStuffs.OoT.viewModes.mainLib.editContextBy.create_gridPointer(htmlElems);
	mode.appendChild(htmlElems.handle);
};