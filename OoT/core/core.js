window.RandoStuffs.OoT.core ??= {};


window.RandoStuffs.OoT.core.release = {
	key   : "DaReal's Rando-Stuffs OoT",
	value : 'Version : alpha 0.0.1'
};

window.RandoStuffs.OoT.core.buildAll = function(){

    let core = window.RandoStuffs.OoT.core;

    core.Area.make();

    core.Location.make();

};





// SpoilerLog.json
//////////////////

window.RandoStuffs.OoT.core.spoilerJsonVersionSupport = {
	min : [6,0,0], // 6.0.0
	max : [7,1,0], // 7.1.0
};

// input verStr (version as raw string)
// return {version:string, support:flag}
	// .support  0 : in support range
	// .support -1 : older version
	// .support +1 : newer version
window.RandoStuffs.OoT.core.check_spoilerVersion = (verStr)=>{
	let reg = /(\d+)\.(\d+)\.(\d+)/g;
	let res = reg.exec(verStr);

	if(res === null) return {version:null};

	let {min,max} = window.RandoStuffs.OoT.core.spoilerJsonVersionSupport;
	let str = res.shift();

	res = res.map(e=>parseInt(e));
	let output = {version:str, support:0};

	// check min ver
	let over=false, limit=true;
	for(let i=0; i<3; i++){
		if(limit)
			if(res[i] < min[i]){
				over = true;
			}else{
				limit = false;
				if(res[i] === min[i]) limit = true;
			}
		if(over) break;
	}
	if(over){
		output.support = -1;
		return output;
	}

	// check max ver
	over=false; limit=true;
	for(let i=0; i<3; i++){
		if(limit)
			if(res[i] > max[i]){
				over = true;
			}else{
				limit = false;
				if(res[i] === max[i]) limit = true;
			}
		if(over) break;
	}
	if(over){
		output.support = 1;
		return output;
	}

	// in support range
	return output;
};

// Update "locations" prop of Spoiler.json with the most recent Location names
window.RandoStuffs.OoT.core.replace_spoilerOldNames = (spoilerObject)=>{
	// replace Location names
	//
	let OoTR_SpoilPropName = "locations";
	let newSpoilLoc = {};
	let namesTable = window.RandoStuffs.OoT.core.Location.oldToNewNames;
	const iOLD = 0, iNEW = 1;
	let oldNames = namesTable.map(e=>e[iOLD]);
	let spoilLocData = spoilerObject[OoTR_SpoilPropName];
	Object.keys(spoilLocData).forEach((spoilLocName)=>{
		let data = spoilLocData[spoilLocName];
		let index = oldNames.indexOf(spoilLocName);
		if(index > -1) newSpoilLoc[namesTable[index][iNEW]] = data;
		else           newSpoilLoc[spoilLocName] = data;
	});
	spoilerObject[OoTR_SpoilPropName] = newSpoilLoc;

	// replace Item names
	//
	// OoTR Spoiler Property : "item_pool"
};

window.RandoStuffs.OoT.core.check_spoilerUnknownNames = (spoilerObject)=>{
	// window.RandoStuffs.OoT.core.Location.check_unknown();
	let OoTR_SpoilPropName = "locations";
	let spoilLocData = spoilerObject[OoTR_SpoilPropName];
	let appLocs = window.RandoStuffs.OoT.core.Location.list;
	let unknownLocs = Object.keys(spoilLocData).filter(e=>!(appLocs.includes(e)));

	// window.RandoStuffs.OoT.core.Item.check_unknown();

	//
	return {locs:unknownLocs, items:[]};
}




// All_Settings.json
////////////////////

window.RandoStuffs.OoT.core.replace_allsettingsOldNames = (allsettingsObject)=>{
	let oLocs = allsettingsObject.core.Location.list;
	let oByArea = allsettingsObject.core.Location.byArea;
	let oByCtx = allsettingsObject.core.Location.byContext;

	let oAreas = Object.keys(allsettingsObject.core.Area.list);
	let oLocCtx = Object.keys(allsettingsObject.core.Location.context);

	let namesTable = window.RandoStuffs.OoT.core.Location.oldToNewNames;

	let index = -1, oldName = null, newName = null;
	let checkAndUpdate = (array)=>{
		index = array.indexOf(oldName);
		if(index > -1) array[index] = newName;
	};

	namesTable.forEach(e=>{
		oldName = e[0]; newName = e[1];
		// core.Location.list
		checkAndUpdate(oLocs);
		// core.Location.byArea
		oAreas.forEach( areaName => checkAndUpdate(oByArea[areaName]) );
		// core.Location.byContext
		oLocCtx.forEach( ctxName => checkAndUpdate(oByCtx[ctxName]) );
	});
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
	
	let release = window.RandoStuffs.OoT.core.release;

    window.RandoStuffs.OoT.core.Location.sortUpdate_byContext();
    
    // All_Settings.json patern :
	
	return {

		from : 'custom_file',

		[release.key] : release.value,

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

		viewModes : {
			itemReqView : window.RandoStuffs.OoT.viewModes.itemReqView?.sessionInstance?.get_objForJSON() || null,
		}

	};
};