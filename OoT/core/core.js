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

window.RandoStuffs.OoT.core.spoilerMsgList = {
	err_notJson      : ()=>'(invalid JSON format)',                  // Not a JSON file
	err_missVer      : ()=>'(missing ":version" field)',             // Missing version field
	err_badVerFormat : vv=>`(unidentified version : ${vv})`,         // Bad version format (x.x.x)
	err_lowVer       : vv=>`(detected old version : ${vv})`,         // Too old version
	wrn_highVer      : vv=>`(warning : detected new version ${vv})`, // Newer version
	err_missHash     : ()=>'(missing "file_hash" field)',            // Missing file hash field
	wrn_chkUnknLbl   : ()=>'Warning : Detected',                     // Unknown loc & item names (label of warn msg)
	wrn_chkUnknBtn   : ()=>'Unknown Locations or Items',             // Unknown loc & item names (button of warn msg)
};


window.RandoStuffs.OoT.core.spoilerJsonVersionSupport = {
	min : [6,0,0], // 6.0.0
	max : [7,1,0], // 7.1.0

	old : [5,0,0], // older example (for docs)
	new : [8,0,0], // newer example (for docs)

	get_str(ver){ return this[ver].join('.'); },
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
// - loc names
// - item names in loc
// Update "locations" prop of Spoiler.json with the most recent Location names
// 
window.RandoStuffs.OoT.core.replace_spoilerOldNames = (spoilerObject)=>{
	// replace [Location names and Item names] in "locations" prop
	//
	let OoTR_SpoilPropName = "locations";
	let newSpoilLoc = {};
	let locNamesTable = window.RandoStuffs.OoT.core.Location.oldToNewNames;
	let itemNamesTable = window.RandoStuffs.OoT.core.Item.oldToNewNames;
	const iOLD = 0, iNEW = 1;
	let locOldNames = locNamesTable.map(e=>e[iOLD]);
	let itemOldNames = itemNamesTable.map(e=>e[iOLD]);
	let spoilLocData = spoilerObject[OoTR_SpoilPropName];
	let update_itemName = (data)=>{
		// replace Item names
		//
		let itemName = (typeof data === 'string') ? data : data.item;
		let index = itemOldNames.indexOf(itemName);
		if(index > -1) itemName = itemNamesTable[index][iNEW];

		if(typeof data === 'string') data = itemName;
		else                         data.item = itemName;

		return data;
	};
	Object.keys(spoilLocData).forEach((spoilLocName)=>{
		let data = update_itemName( spoilLocData[spoilLocName] );
		let index = locOldNames.indexOf(spoilLocName);
		if(index > -1) newSpoilLoc[locNamesTable[index][iNEW]] = data;
		else           newSpoilLoc[spoilLocName] = data;
	});
	spoilerObject[OoTR_SpoilPropName] = newSpoilLoc;

};


window.RandoStuffs.OoT.core.check_spoilerUnknownNames = (spoilerObject)=>{

	let OoTR_SpoilPropName = "locations";
	let spoilLocData = spoilerObject[OoTR_SpoilPropName];
	let appLocs = window.RandoStuffs.OoT.core.Location.list;
	let appItems = Object.keys(window.RandoStuffs.OoT.core.Item.list);
	
	// filter unknown loc names and catch unknown item names
	//
	let unknownItems = [];
	let unknownLocs = Object.keys(spoilLocData).filter(locName=>{

		// catch unknown Item names
		let data = spoilLocData[locName];
		let itemName = (typeof data === 'string') ? data : data.item;
		let index = appItems.indexOf(itemName);
		if(index === -1) unknownItems.push(itemName);

		// filter unknown Location names
		return !(appLocs.includes(locName));
	});

	return {locs:unknownLocs, items:unknownItems};
};




// All_Settings.json
////////////////////
window.RandoStuffs.OoT.core.dict_itemReqView = {};

window.RandoStuffs.OoT.core.dict_itemReqView.conditionDroplistIndexes = {
	0 : 'Area Name',
	1 : 'Map Position',
	2 : 'Area Context',
	3 : 'Exact Location',
	4 : 'Location Context',
	area    (i){ return (i==='i' ? 0 : this[0]); },
	mapPos  (i){ return (i==='i' ? 1 : this[1]); },
	areaCtx (i){ return (i==='i' ? 2 : this[2]); },
	loc     (i){ return (i==='i' ? 3 : this[3]); },
	locCtx  (i){ return (i==='i' ? 4 : this[4]); },
};

window.RandoStuffs.OoT.core.dict_itemReqView.dispReqResNameRef = {
	area    : 'displayRequestResultAreaSet',
	mapPos  : 'displayRequestResultMapPosSet',
	areaCtx : 'displayRequestResultAreaCtxSet',
	loc     : 'displayRequestResultLocSet',
	locCtx  : 'displayRequestResultLocCtxSet',
};

window.RandoStuffs.OoT.core.update_itemReqViewSettings = (originalAllSettings, fromCore)=>{

	let dict_cdntLstIndx = window.RandoStuffs.OoT.core.dict_itemReqView.conditionDroplistIndexes;
	let dict_dispReqRes  = window.RandoStuffs.OoT.core.dict_itemReqView.dispReqResNameRef;

	let locTbl = fromCore.Location.oldToNewNames;
	let itemTbl = fromCore.Item.oldToNewNames;

	let {itemReqView} = originalAllSettings.viewModes;

	let fileCore = {
		area : {
			lst : Object.keys(originalAllSettings.core.Area.list),
			map : Object.keys(originalAllSettings.core.Area.mapPos),
			ctx : Object.keys(originalAllSettings.core.Area.context),
		},
		loc : {
			lst : originalAllSettings.core.Location.list,
			ctx : Object.keys(originalAllSettings.core.Location.context),
		},
	};
	let appCore = {
		area : {
			lst : Object.keys(fromCore.Area.list),
			map : Object.keys(fromCore.Area.mapPos),
			ctx : Object.keys(fromCore.Area.context),
		},
		loc : {
			lst : fromCore.Location.list,
			ctx : Object.keys(fromCore.Location.context),
		},
	};
	
	if(itemReqView){
		let {selectedItemList, itemQuantities, conditionGroups, settingsList} = itemReqView;

		let index = -1, oldName = null, newName = null, output = null;

		// selectedItemList
		//
		(()=>{
			itemTbl.forEach( e=>{ // replace old names to new names
				oldName = e[0]; newName = e[1];
				index = selectedItemList.indexOf(oldName);
				if(index > -1) selectedItemList[index] = newName;
			} );
		})();
		
		// itemQuantities
		//
		(()=>{
			// replace old to new
			let items = Object.keys(itemQuantities);
			let olds = itemTbl.map(e=>e[0]);
			let news = itemTbl.map(e=>e[1]);
			output = {};
			items.forEach( name=>{
				index = olds.indexOf(name);
				if(index > -1) output[news[index]] = itemQuantities[name]; // replace
				else           output[name]        = itemQuantities[name]; // keep
			} );
			itemQuantities = output;
			
			// add new
			items = Object.keys(fromCore.Item.list);
			output = {};
			items.forEach( name=>(output[name]=itemQuantities[name]||null) );
			itemReqView.itemQuantities = output;
		})();

		// conditionGroups
		//
		(()=>{
			let val, iProp, indexes;
			let wrapToNewName = (oldName)=>{
				let olds = locTbl.map(e=>e[0]);
				let news = locTbl.map(e=>e[1]);
				return news[ olds.indexOf(oldName) ] || oldName;
			};

			Object.keys(conditionGroups).forEach( g=>{
				conditionGroups[g].array.forEach( (cndt,iCndt)=>{

					indexes = cndt.selectedIndex;
					iProp = indexes.property;

					if(iProp === dict_cdntLstIndx.area('i')){
						// check indexes only
						//
						val = indexes.value;
						val = appCore.area.lst.indexOf( fileCore.area.lst[val] );
						// update
						indexes.value = val;
						// warn msg
						if(val === -1){
						}
					}
					if(iProp === dict_cdntLstIndx.mapPos('i')){
						// check indexes only
						//
						val = indexes.value;
						val = appCore.area.map.indexOf( fileCore.area.map[val] );
						// update
						indexes.value = val;
						// warn msg
						if(val === -1){
						}
					}
					if(iProp === dict_cdntLstIndx.areaCtx('i')){
						// check indexes only
						//
						val = indexes.value;
						val = appCore.area.ctx.indexOf( fileCore.area.ctx[val] );
						// update
						indexes.value = val;
						// warn msg
						if(val === -1){
						}
					}
					if(iProp === dict_cdntLstIndx.loc('i')){
						// replace old names and check indexes
						//
						val = indexes.value;
						val = appCore.loc.lst.indexOf( wrapToNewName(fileCore.loc.lst[val]) );
						// update
						indexes.value = val;
						cndt.value = val;
						// warn msg
						if(val === -1){
						}
					}
					if(iProp === dict_cdntLstIndx.locCtx('i')){
						//
						val = indexes.value;
						val = appCore.loc.ctx.indexOf( fileCore.loc.ctx[val] );
						// update
						indexes.value = val;
						// warn msg
						if(val === -1){
						}
					}
				} );
			} );
		})();
	
		// settingsList
		//
		(()=>{
			let sttLstNames, prop, newObj;
			let wrapToNewName = (oldName)=>{
				let olds = locTbl.map(e=>e[0]);
				let news = locTbl.map(e=>e[1]);
				return news[ olds.indexOf(oldName) ] || oldName;
			};
			let wrapToOldName = (newName, oldSrc)=>{
				let olds = locTbl.map(e=>e[0]);
				let news = locTbl.map(e=>e[1]);
				let possibles = news.map( (e,i)=>(e===newName?olds[i]:null) ).filter( e=>e ); // possible old names
				return possibles.filter( e=>oldSrc.includes(e) )[0] || newName;
			};
			const default_checked = true;
			const default_conditionID = null;

			// Area Names (reorder AND delete used AND add new)
			prop = dict_dispReqRes.area;
			sttLstNames = Object.keys(settingsList[prop]);
			newObj = {};
			appCore.area.lst.forEach( name=>{
				if(sttLstNames.includes(name)) newObj[name] = {
					checked     : settingsList[prop][name].checked,
					conditionID : settingsList[prop][name].conditionID,
				}; else newObj[name] = { checked:default_checked, conditionID:default_conditionID };
			} );
			settingsList[prop] = newObj;

			// Map Position (reorder AND delete used AND add new)
			prop = dict_dispReqRes.mapPos;
			sttLstNames = Object.keys(settingsList[prop]);
			newObj = {};
			appCore.area.map.forEach( name=>{
				if(sttLstNames.includes(name)) newObj[name] = {
					checked     : settingsList[prop][name].checked,
					conditionID : settingsList[prop][name].conditionID,
				}; else newObj[name] = { checked:default_checked, conditionID:default_conditionID };
			} );
			settingsList[prop] = newObj;

			// Area Context (reorder AND delete used AND add new)
			prop = dict_dispReqRes.areaCtx;
			sttLstNames = Object.keys(settingsList[prop]);
			newObj = {};
			appCore.area.ctx.forEach( name=>{
				if(sttLstNames.includes(name)) newObj[name] = {
					checked     : settingsList[prop][name].checked,
					conditionID : settingsList[prop][name].conditionID,
				}; else newObj[name] = { checked:default_checked, conditionID:default_conditionID };
			} );
			settingsList[prop] = newObj;

			// Exact Location (reorder AND delete used AND add new) rename
			prop = dict_dispReqRes.loc;
			newObj = {};
			appCore.loc.lst.forEach( (name,i)=>{
				let oldList = fileCore.loc.lst;
				let oldName = wrapToOldName(name, oldList);
				let oldIndex = oldList.indexOf(oldName);
				if(oldIndex > -1) newObj[i] = {
						checked     : settingsList[prop][oldIndex].checked,
						conditionID : settingsList[prop][oldIndex].conditionID,
				}; else newObj[i] = { checked:default_checked, conditionID:default_conditionID };
			} );
			settingsList[prop] = newObj;

			// Location Context (reorder AND delete used AND add new)
			prop = dict_dispReqRes.locCtx;
			sttLstNames = Object.keys(settingsList[prop]);
			newObj = {};
			appCore.loc.ctx.forEach( name=>{
				if(sttLstNames.includes(name)) newObj[name] = {
					checked     : settingsList[prop][name].checked,
					conditionID : settingsList[prop][name].conditionID,
				}; else newObj[name] = { checked:default_checked, conditionID:default_conditionID };
			} );
			settingsList[prop] = newObj;

		})();
	}

};

window.RandoStuffs.OoT.core.replace_allsettingsOldNames = (objToMod)=>{
	let oLocs = objToMod.core.Location.list;
	let oByArea = objToMod.core.Location.byArea;
	let oByCtx = objToMod.core.Location.byContext;

	let oAreas = Object.keys(oByArea);
	let oLocCtx = Object.keys(oByCtx);

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

	// old way to process
	/* 
	let allsettingsObject = objToMod;
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
	*/
};

// [Import / Export] Options                                          // root : window.RandoStuffs.OoT
window.RandoStuffs.OoT.core.portOptions = {                           // (null for special cases)
	areaList     : {imp:{dev:true,usr:true}, exp:{dev:true,usr:true}, fromRootPropPath:['core','Area','list'],          label:'Area List',},
	mapPos       : {imp:{dev:true,usr:true}, exp:{dev:true,usr:true}, fromRootPropPath:['core','Area','mapPos'],        label:'Area [Map Postion] List',},
	areaByMap    : {imp:{dev:true,usr:true}, exp:{dev:true,usr:true}, fromRootPropPath:['core','Area','byMapPos'],      label:'Area [By Map Position] List',},
	areaCtx      : {imp:{dev:true,usr:true}, exp:{dev:true,usr:true}, fromRootPropPath:['core','Area','context'],       label:'Area [Context] List',},
	areaByCtx    : {imp:{dev:true,usr:true}, exp:{dev:true,usr:true}, fromRootPropPath:['core','Area','byContext'],     label:'Area [By Context] List',},
	locList      : {imp:{dev:true,usr:true}, exp:{dev:true,usr:true}, fromRootPropPath:['core','Location','list'],      label:'Location List',},
	locByArea    : {imp:{dev:true,usr:true}, exp:{dev:true,usr:true}, fromRootPropPath:['core','Location','byArea'],    label:'Location [By Area] List',},
	locCtx       : {imp:{dev:true,usr:true}, exp:{dev:true,usr:true}, fromRootPropPath:['core','Location','context'],   label:'Location Context List',},
	locByCtx     : {imp:{dev:true,usr:true}, exp:{dev:true,usr:true}, fromRootPropPath:['core','Location','byContext'], label:'Location [By Context] List',},
	itemReqView  : {imp:{dev:true,usr:true}, exp:{dev:true,usr:true}, fromRootPropPath:null,                            label:'[Item Request View] Settings',},
};

window.RandoStuffs.OoT.core.importMode = 'update' || 'overwrite';

window.RandoStuffs.OoT.core.impUpdateMode = ['areaCtx', 'areaByCtx', 'locCtx', 'locByCtx', 'itemReqView'];

window.RandoStuffs.OoT.core.impOverwriteMode = { replaceOldToNewNames:false, };

window.RandoStuffs.OoT.core.set_importMode = (mode)=>{
	let {portOptions} = window.RandoStuffs.OoT.core;
	window.RandoStuffs.OoT.core.importMode = mode;

	// overwrite mode
	if(mode === 'overwrite'){
		// enable all (imp.dev)
		Object.keys(portOptions).forEach( portOp=>portOptions[portOp].imp.dev=true );
	}

	// update mode
	if(mode === 'update'){
		// enable only from impUpdateMode (imp.dev)
		let {impUpdateMode} = window.RandoStuffs.OoT.core;
		Object.keys(portOptions).forEach( portOp=>{
			portOptions[portOp].imp.dev = impUpdateMode.includes(portOp);
		} );
	}
}


window.RandoStuffs.OoT.core.setFromFile = function(fileData, copy=true){
	let {core} = window.RandoStuffs.OoT;
	let {portOptions} = core;

	let imp = op=>(op.imp.dev&&op.imp.usr);
	let cpy = copy ? structuredClone : e=>e;
	let process = (opPort, data)=>{ // return an Object or a Falsy value
		return imp(opPort) && cpy( opPort.fromRootPropPath.reduce((a,c)=>a?.[c],data) );
	};

	core.Area.list              = process(portOptions.areaList,  fileData) || core.Area.list;
	core.Area.mapPos            = process(portOptions.mapPos,    fileData) || core.Area.mapPos;
	core.Area.byMapPos          = process(portOptions.areaByMap, fileData) || core.Area.byMapPos;
	core.Area.context           = process(portOptions.areaCtx,   fileData) || core.Area.context;
	core.Area.byContext         = process(portOptions.areaByCtx, fileData) || core.Area.byContext;
	core.Location.list          = process(portOptions.locList,   fileData) || core.Location.list;
	core.Location.byArea        = process(portOptions.locByArea, fileData) || core.Location.byArea;
	core.Location.context       = process(portOptions.locCtx,    fileData) || core.Location.context;
	core.Location.byContext     = process(portOptions.locByCtx,  fileData) || core.Location.byContext;

	// special cases
	//

	if( !imp(portOptions.itemReqView) ) fileData.viewModes.itemReqView = null;
	// recall note : itemReqView.js reads (window.RandoStuffs.OoT.fileSlots.allSettings.data.viewModes.itemReqView)

	// old way to process
	/*
	core.Area.list              = coreFile.Area.list              || core.Area.list;
	core.Area.mapPos            = coreFile.Area.mapPos            || core.Area.mapPos;
	core.Area.byMapPos          = coreFile.Area.byMapPos          || core.Area.byMapPos;
	core.Area.context           = coreFile.Area.context           || core.Area.context;
	core.Area.byContext         = coreFile.Area.byContext         || core.Area.byContext;
	core.Location.list          = coreFile.Location.list          || core.Location.list;
	core.Location.byArea        = coreFile.Location.byArea        || core.Location.byArea;
	core.Location.context       = coreFile.Location.context       || core.Location.context;
	core.Location.byContext     = coreFile.Location.byContext     || core.Location.byContext;
	//core.Location.area          = coreFile.Location.area          || core.Location.area;
	*/
};

window.RandoStuffs.OoT.core.make_AllSettingsJson = function(){
	
	let {OoT} =  window.RandoStuffs;
	let {release, portOptions} = OoT.core;

    window.RandoStuffs.OoT.core.Location.sortUpdate_byContext();
    
    
	let json = {};
	let addPropSerie = (propArray, oDst, oSrc, forceNull)=>{
		if(propArray.length > 1){
			let propName = propArray.shift();
			oDst = (oDst[propName] ||= {});
			oSrc = oSrc[propName];
			addPropSerie(propArray, oDst, oSrc, forceNull);
		}else
			oDst[propArray[0]] = (forceNull ? null : oSrc[propArray[0]]);
	};
	// In all cases prop series will be added
	// But they will be set only if dev and usr are agree
	Object.keys(portOptions).forEach(k=>{
		let portOpt = portOptions[k];
		let willExport = portOpt.exp.dev && portOpt.exp.usr;
		let objPath = portOpt.fromRootPropPath;
		
		// normal cases :
		if(objPath) addPropSerie([...objPath], json, OoT, !willExport);
		// special cases :
		else{
			if(k === 'itemReqView'){
				json.viewModes ||= {};
				json.viewModes.itemReqView = (willExport&&OoT.viewModes.itemReqView?.sessionInstance?.get_objForJSON()) || null;
			}
		}
	
	});
	json.from = 'custom_file';
	json[release.key] = release.value;

	return json;

	// All_Settings.json patern :
	/* return {
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
				//area           : window.RandoStuffs.OoT.core.Location.area,
				context        : window.RandoStuffs.OoT.core.Location.context,
				byArea         : window.RandoStuffs.OoT.core.Location.byArea,
				byContext      : window.RandoStuffs.OoT.core.Location.byContext,
			}
		},
		viewModes : {
			itemReqView : window.RandoStuffs.OoT.viewModes.itemReqView?.sessionInstance?.get_objForJSON() || null,
		}
	}; */
};