
window.RandoStuffs ??= {};

window.RandoStuffs.OoT = {};

window.RandoStuffs.OoT.settingsFromDefaultCore = true;

window.RandoStuffs.OoT.fileSlots = {
	spoilerLog  : {
		name:'Spoiler.json', data:null, originalFileName:'', display_fileHash : true,
		check_data(){
			if(!this.data[':version']){
				let errorTxt = `The App RandoStuffs.OoT expected a JSON file with an entry :\n\t":version"`;
				console.error(errorTxt);
				throw new Error(errorTxt);
			}
		},
	},
	allSettings : {
		name:'All_Settings.json', data:null, originalFileName:'All_Settings.json', update_core:true, update_view:true,
		check_data(){
			let { key, value } = window.RandoStuffs.OoT.core.release;
			if(this.data[key]!==value){
				let errorTxt = `The App RandoStuffs.OoT expected a JSON file with an entry :\n\t"${key}" : '${value}'`;
				console.error(errorTxt);
				throw new Error(errorTxt);
			}
		},
	},
};






window.RandoStuffs.OoT.viewModes = {
	helpDocs : {
		name : 'Help Documentation',
		init : null,
	},
	areaCtxListEdit : {
		name : 'Edit the list of area context',
		init : null,
	},
	locCtxListEdit : {
		name : 'Edit the list of location context',
		init : null,
	},
	areaCtxEdit : {
		name : 'Edit context properties by the areas',
		init : null,
	},
	locCtxEdit : {
		name : 'Edit context properties by the locations',
		init : null,
	},
	itemReqView : {
		name : 'Item Request View',
		init : null,
		reset : null,
	},
};

window.RandoStuffs.OoT.viewModes.displayLinkList = [
	'helpDocs',
	'areaCtxListEdit',
	'locCtxListEdit',
	'areaCtxEdit',
	'locCtxEdit',
	'itemReqView',
];

window.RandoStuffs.OoT.viewModes.current = null;

window.RandoStuffs.OoT.viewModes.updateList = [
	'areaCtxListEdit',
	'locCtxListEdit',
	'areaCtxEdit',
	'locCtxEdit',
	'itemReqView',
];

window.RandoStuffs.OoT.viewModes.resetViews = function(workspace){
	let list = window.RandoStuffs.OoT.viewModes.updateList;
	let current = window.RandoStuffs.OoT.viewModes.current;
	for(let modeName of list)
		if(modeName === current)
			window.RandoStuffs.OoT.viewModes[modeName].reset(workspace);

}