
window.RandoStuffs ??= {};

window.RandoStuffs.OoT = {};

window.RandoStuffs.OoT.settingsFromDefaultCore = true;

window.RandoStuffs.OoT.fileSlots = {
	spoilerLog  : {
		name:'Spoiler.json', data:null, originalFileName:'', display_fileHash : true, //update_view:true,
		check_data(){
			this.warning = '';
			// CHECKING : spoiler version
			this.check_version();
			// UPDATING : old names to new names (items & locs)
			window.RandoStuffs.OoT.core.replace_spoilerOldNames(this.data);
			// CHECKING : unknown items & locs
			this.check_unknowns();
		},
		check_version(){
			let versionValue = this.data[':version'];
			// error case : json file is not a "spoiler log of OoTR"
			if(!versionValue){
				let errorTxt = `The App RandoStuffs.OoT expected a JSON file with an entry :\n\t":version"`;
				this.errMsg = '(missing ":version" field)';
				console.error(errorTxt);
				throw new Error(errorTxt);
			}
			// success case : json file is a "spoiler log of OoTR"
			else{
				let res = window.RandoStuffs.OoT.core.check_spoilerVersion( versionValue );

				// error case : unidentified version
				if(res.version === null){
					this.errMsg = `(unidentified version : ${versionValue})`;
					throw new Error(this.errMsg);
				}
				// success case : identified version
				else
					switch(res.support){
						// success case : version in support range
						case  0 :
							break;
						// error case : older version
						case -1 :
							this.errMsg = `(detected old version ${res.version})`;
							throw new Error(this.errMsg);
						// risk case : newer version
						case +1 :
							this.warning += `(warning : detected new version ${res.version})`;
							break;
					}
			}
		},
		check_unknowns(){
			let unknowns = window.RandoStuffs.OoT.core.check_spoilerUnknownNames(this.data);
			// unknowns warning
			this.unknownsWarningHtmlID = null;
			if(unknowns.locs.length || unknowns.items.length){
				this.unknownsWarningHtmlID = "spoilerJson-fileSlot-warningDetectedUnknowns-htmlID";
				this.___display_unknowns = ()=>{
					mainArea.innerHTML = `<div style="margin:16px;">`
									   + `<div style="font-weight:bold;">Unknown Location List :</div>`
									   + `${unknowns.locs.map(e=>`<div>${e}</div>`).join('')}`
									   + `</div>`;
				};
				this.warning += `<div id="${this.unknownsWarningHtmlID}">Warning : Detected `
							 +  `<input type="button" value="Unknown Locations or Items" `
							 +  `onclick="window.RandoStuffs.OoT.fileSlots.spoilerLog.___display_unknowns();">`
							 +  `</div>`;
			}
		},
		htmlElem : null, errMsg : null, warning : null,
	},
	allSettings : {
		name:'All_Settings.json', data:null, originalFileName:'All_Settings.json', update_core:true, update_view:true,
		check_data(){
			this.check_version();
			window.RandoStuffs.OoT.core.replace_allsettingsOldNames(this.data);

			// update app's core
			window.RandoStuffs.OoT.core.setFromFile(this.data.core);
			window.RandoStuffs.OoT.core.buildAll();

			// update spoiler file slot
			this.checkFor_spoilerUnknowns();
		},
		check_version(){
			let { key, value } = window.RandoStuffs.OoT.core.release;
			//if(this.data[key]!==value){
			if(!this.data[key]){
				//let errorTxt = `The App RandoStuffs.OoT expected a JSON file with an entry :\n\t"${key}" : '${value}'`;
				let errorTxt = `The App RandoStuffs.OoT expected a JSON file with a field called :\n\t"${key}"`;
				this.errMsg = '(missing app\'s signature field)';
				console.error(errorTxt);
				throw new Error(errorTxt);
			}
		},
		checkFor_spoilerUnknowns(){
			// Check for unknown entities in spoilerLog.json file,
			// only if it is already loaded before All_Settings.json loading.
			// Then update spoilerLog.json file slot display
			let spoilerSlot = window.RandoStuffs.OoT.fileSlots.spoilerLog;
			if(spoilerSlot.data){
				// remove warning for old unknowns if already warned
				let elemID = spoilerSlot.unknownsWarningHtmlID;
				if(elemID) // 
					spoilerSlot.htmlElem.removeChild( document.querySelector(`#${elemID}`) );
				
				// check for new unknowns
				spoilerSlot.warning = '';
				spoilerSlot.check_unknowns();
				if(spoilerSlot.unknownsWarningHtmlID)
					// update spoilerLog.json file slot warning display
					spoilerSlot.htmlElem.innerHTML += spoilerSlot.warning;
				spoilerSlot.warning = null;
			}
		},
		htmlElem : null, errMsg : null, warning : null,
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