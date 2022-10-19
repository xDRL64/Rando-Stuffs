
window.RandoStuffs ??= {};

window.RandoStuffs.OoT = {};

window.RandoStuffs.OoT.settingsFromDefaultCore = true;

window.RandoStuffs.OoT.fileSlots = {
	spoilerLog  : { name:'Spoiler.json', data:null },
//	locByEnv    : { name:'Locations_by_Environment.json', data:null },
	allSettings : { name:'All_Settings.json', data:null, update_core:true },
};






window.RandoStuffs.OoT.viewModes = {
	locEnvEdit : {
		name : 'Edit environments of the locations',
		init : null,
	},
	betaReqItemEnv : {
		name : 'Beta Test : Request Item\s Environments',
		init : null,
	},
};