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
	core.Area.context           = coreFile.Area.context           || core.Area.context;
	core.Area.byMapPos          = coreFile.Area.byMapPos          || core.Area.byMapPos;
	core.Area.byContext         = coreFile.Area.byContext         || core.Area.byContext;
	core.Location.list          = coreFile.Location.list          || core.Location.list;
	core.Location.area          = coreFile.Location.area          || core.Location.area;
	core.Location.context       = coreFile.Location.context       || core.Location.context;
	core.Location.byArea        = coreFile.Location.byArea        || core.Location.byArea;
	core.Location.byContext     = coreFile.Location.byContext     || core.Location.byContext;
};

window.RandoStuffs.OoT.core.make_AllSettingsJson = function(){
	
    window.RandoStuffs.OoT.core.Location.sortUpdate_byContext();
    
    // All_Settings.json patern :
	
	return {

		from : 'custom_file',

		core : {
			
			Area : {
				//Data       : window.RandoStuffs.OoT.core.Area.Data,
				list       : window.RandoStuffs.OoT.core.Area.list,
				mapPos     : window.RandoStuffs.OoT.core.Area.mapPos,
				context    : window.RandoStuffs.OoT.core.Area.context,
				byMapPos   : window.RandoStuffs.OoT.core.Area.byMapPos,
				byContext  : window.RandoStuffs.OoT.core.Area.byContext,
			},

			Location : {
				//Data           : window.RandoStuffs.OoT.core.Location.Data,
				list           : window.RandoStuffs.OoT.core.Location.list,
				area           : window.RandoStuffs.OoT.core.Location.area,
				context        : window.RandoStuffs.OoT.core.Location.context,
				byArea         : window.RandoStuffs.OoT.core.Location.byArea,
				byContext      : window.RandoStuffs.OoT.core.Location.byContext,

			}

		},

	};
};