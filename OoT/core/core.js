window.RandoStuffs.OoT.core ??= {};

window.RandoStuffs.OoT.core.buildAll = function(){

    let core = window.RandoStuffs.OoT.core;

    core.Area.make();

    core.Location.make();


};

window.RandoStuffs.OoT.core.setFromFile = function(coreFile){
	let core = window.RandoStuffs.OoT.core;
	core.Area.list              = coreFile.Area.list              || core.Area.list;
	core.Area.mapPos            = coreFile.Area.mapPos            || core.Area.mapPos;
	core.Area.kind              = coreFile.Area.kind              || core.Area.kind;
	core.Area.cardinal          = coreFile.Area.cardinal          || core.Area.cardinal;
	core.Area.byMapPos          = coreFile.Area.byMapPos          || core.Area.byMapPos;
	core.Area.byKind            = coreFile.Area.byKind            || core.Area.byKind;
	core.Area.byCardinal        = coreFile.Area.byCardinal        || core.Area.byCardinal;
	core.Location.list          = coreFile.Location.list          || core.Location.list;
	core.Location.area          = coreFile.Location.area          || core.Location.area;
	core.Location.sanity        = coreFile.Location.sanity        || core.Location.sanity;
	core.Location.environment   = coreFile.Location.environment   || core.Location.environment;
	core.Location.byArea        = coreFile.Location.byArea        || core.Location.byArea;
	core.Location.bySanity      = coreFile.Location.bySanity      || core.Location.bySanity;
	core.Location.byEnvironment = coreFile.Location.byEnvironment || core.Location.byEnvironment;
};

window.RandoStuffs.OoT.core.make_AllSettingsJson = function(){
	
    window.RandoStuffs.OoT.core.Location.sortUpdate_byEnv();
    
    // All_Settings.json patern :
	
	return {

		from : 'custom_file',

		core : {
			
			Area : {
				//Data       : window.RandoStuffs.OoT.core.Area.Data,
				list       : window.RandoStuffs.OoT.core.Area.list,
				mapPos     : window.RandoStuffs.OoT.core.Area.mapPos,
				kind       : window.RandoStuffs.OoT.core.Area.kind,
				cardinal   : window.RandoStuffs.OoT.core.Area.cardinal,
				byMapPos   : window.RandoStuffs.OoT.core.Area.byMapPos,
				byKind     : window.RandoStuffs.OoT.core.Area.byKind,
				byCardinal : window.RandoStuffs.OoT.core.Area.byCardinal,
			},

			Location : {
				//Data           : window.RandoStuffs.OoT.core.Location.Data,
				list           : window.RandoStuffs.OoT.core.Location.list,
				area           : window.RandoStuffs.OoT.core.Location.area,
				sanity         : window.RandoStuffs.OoT.core.Location.sanity,
				environment    : window.RandoStuffs.OoT.core.Location.environment,
				byArea         : window.RandoStuffs.OoT.core.Location.byArea,
				bySanity       : window.RandoStuffs.OoT.core.Location.bySanity,
				byEnvironment  : window.RandoStuffs.OoT.core.Location.byEnvironment,

			}

		},

	};
};