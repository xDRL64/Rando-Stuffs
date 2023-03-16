
window.RandoStuffs ??= {};

window.RandoStuffs.OoT = {};

window.RandoStuffs.OoT.settingsFromDefaultCore = true;

window.RandoStuffs.OoT.fileSlots = {

	spoilerLog  : {
		name:'Spoiler.json', data:null, originalFileName:'', display_fileHash : true, //update_view:true,
		msgList : null,
		get_msgList(){
			// get (warn & err) messages list
			this.msgList = window.RandoStuffs.OoT.core.spoilerMsgList;
		},
		check_data(){
			this.warning = '';
			// CHECKING : spoiler version
			this.check_version();
			// CHECKING : file hash
			this.make_fileHashDisplay();
			// UPDATING : old names to new names (items & locs)
			window.RandoStuffs.OoT.core.replace_spoilerOldNames(this.data);
			// CHECKING : unknown items & locs
			this.check_unknowns();
		},
		check_version(){
			let versionValue = this.data[':version'];
			// error case : json file is not a "spoiler log of OoTR"
			if(!versionValue){
				this.errMsg = this.msgList.err_missVer();
				throw new Error(this.errMsg);
				//let errorTxt = `The App RandoStuffs.OoT expected a JSON file with an entry :\n\t":version"`; // console err msg
				//console.error(errorTxt);
				//throw new Error(errorTxt);
			}
			// success case : json file is a "spoiler log of OoTR"
			else{
				let res = window.RandoStuffs.OoT.core.check_spoilerVersion( versionValue );

				// error case : unidentified version
				if(res.version === null){
					this.errMsg = this.msgList.err_badVerFormat(versionValue);
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
							this.errMsg = this.msgList.err_lowVer(res.version);
							throw new Error(this.errMsg);
						// risk case : newer version
						case +1 :
							this.warning += this.msgList.wrn_highVer(res.version);
							break;
					}
			}
		},
		make_fileHashDisplay(){
			let fileHash = this.data['file_hash'];
			// success case : found file_hash field
			if(fileHash){
				let output = '';
				let imgStyle = 'width:16px; height:16px; pointer-events:none;';
				let icons = window.RandoStuffs.OoT.core.Item.hashIcons;
				fileHash.forEach(e=>{output+=`<img src="${icons[e]}" style="${imgStyle}"/>`});
				this.display_fileHash = output;
			// error case : not found file_hash field
			}else{
				this.errMsg = this.msgList.err_missHash();
				throw new Error(this.errMsg);
			}
		},
		check_unknowns(){
			let unknowns = window.RandoStuffs.OoT.core.check_spoilerUnknownNames(this.data);
			// unknown names warning
			this.unknownsWarningHtmlID = null;
			if(unknowns.locs.length || unknowns.items.length){
				this.unknownsWarningHtmlID = "spoilerJson-fileSlot-warningDetectedUnknowns-htmlID";
				this.___display_unknowns = ()=>{
					mainArea.innerHTML = `<div style="margin:16px;">`
									   + `<div style="font-weight:bold;">Unknown Location List :</div>`
									   + `${unknowns.locs.map(e=>`<div>${e}</div>`).join('')}`
									   + `<div style="font-weight:bold;">Unknown Item List :</div>`
									   + `${unknowns.items.map(e=>`<div>${e}</div>`).join('')}`
									   + `</div>`;
				};
				this.warning += `<div id="${this.unknownsWarningHtmlID}">${this.msgList.wrn_chkUnknLbl()} `
							 +  `<input type="button" value="${this.msgList.wrn_chkUnknBtn()}" `
							 +  `onclick="window.RandoStuffs.OoT.fileSlots.spoilerLog.___display_unknowns();">`
							 +  `</div>`;
			}
		},
		htmlElem : null, errMsg : null, warning : null,
	},

	allSettings : {
		name:'All_Settings.json', data:null, originalFileName:'All_Settings.json', update_core:true, update_view:true,
		msgList : null,
		get_msgList(){
			// get (warn & err) messages list
			this.msgList = {err_notJson(){}}; // debug PLACEHOLDER !!!
		},
		check_data(){
			this.check_version();

			const {OoT} = window.RandoStuffs;
			const {importMode} = OoT.core;

			let replace_oldNames = window.RandoStuffs.OoT.core.impOverwriteMode.replaceOldToNewNames;
			if(importMode === 'overwrite'){
				window.RandoStuffs.OoT.core.setFromFile(this.data, false); // not keep original All_Settings.json (fusion it with app)
				if(replace_oldNames){
					let original = structuredClone(this.data); // make original clone before replacing old names
					window.RandoStuffs.OoT.core.replace_allsettingsOldNames(OoT); // only for : locList, locByCtx, locByArea
					window.RandoStuffs.OoT.core.update_itemReqViewSettings(original, OoT.core);
				}
			}

			if(importMode === 'update'){
				
				// inject props in app by selected options (can be only : areaCtx, areaByCtx, locCtx, locByCtx, itemReqView)
				window.RandoStuffs.OoT.core.setFromFile(this.data, true); // copy from original All_Settings.json

				// only for : locList, locByCtx, locByArea
				window.RandoStuffs.OoT.core.replace_allsettingsOldNames(OoT);
					

				window.RandoStuffs.OoT.core.update_itemReqViewSettings(this.data, OoT.core);
			}

			// any cases
			//

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

		onLoadPrompt(callback){
			let {portOptions, importMode, set_importMode, impOverwriteMode} = window.RandoStuffs.OoT.core;
			let {create_checkbox} = window.RandoStuffs.OoT.viewModes.mainLib.createElems;
			

			let parent=page;

			let zIndexLevel = 2;

			// transparent black [frame locking app]
			let lockAppPanel = document.createElement('div');
			lockAppPanel.style.opacity = 0.5;
			lockAppPanel.style.backgroundColor = 'black';
			lockAppPanel.style.position = 'fixed';
			lockAppPanel.style.inset = 0;
			lockAppPanel.style.zIndex = zIndexLevel;

			// import prompt [panel]
			let impPromptPanel = document.createElement('div');
			impPromptPanel.style.backgroundColor = 'antiquewhite';
			impPromptPanel.style.border = '1px solid black';
			impPromptPanel.style.position = 'fixed';
			impPromptPanel.style.zIndex = zIndexLevel;
			impPromptPanel.style.display = 'flex';
			impPromptPanel.style.flexDirection = 'column';
			impPromptPanel.style.justifyContent = 'space-evenly';
			impPromptPanel.style.alignItems = 'center';
			let resize_savePrompt = (event, w=768, h=384)=>{
				w = (window.innerWidth>>1)-(w/2);
				h = (window.innerHeight>>1)-(h/2);
				impPromptPanel.style.inset = `${h}px ${w}px`;
			};
			resize_savePrompt();
			window.addEventListener('resize', resize_savePrompt);

				// choice mode [radio buttons]
				let modeChoice = document.createElement('div');

					// overwrite mode [radio button]
					let overwriteModeChoiceLbl = document.createElement('label');
					overwriteModeChoiceLbl.innerHTML = '<span>Overwrite Mode</span>';
					overwriteModeChoiceLbl.style.margin = '8px 32px';
						let overwriteModeChoice = document.createElement('input');
						overwriteModeChoice.type = 'radio';
						overwriteModeChoice.name = 'impModeChoice';
						overwriteModeChoice.onclick = ()=>{
							set_importMode('overwrite');
							reset_impOptionList();
							enable_forceReplaceOldCbx(true);
						};
					overwriteModeChoiceLbl.prepend(overwriteModeChoice);

					// update mode [radio button]
					let updateModeChoiceLbl = document.createElement('label');
					updateModeChoiceLbl.innerHTML = '<span>Update Mode</span>';
					updateModeChoiceLbl.style.margin = '8px 32px';
						let updateModeChoice = document.createElement('input');
						updateModeChoice.type = 'radio';
						updateModeChoice.name = 'impModeChoice';
						updateModeChoice.onclick = ()=>{
							set_importMode('update');
							reset_impOptionList();
							enable_forceReplaceOldCbx(false);
						};
					updateModeChoiceLbl.prepend(updateModeChoice);
				
				modeChoice.appendChild(overwriteModeChoiceLbl);
				modeChoice.appendChild(updateModeChoiceLbl);

				// import options [list]
				let impOptionList = document.createElement('div');
				let reset_impOptionList = ()=>{
					impOptionList.style.height = 128;
					impOptionList.style.overflowY = 'auto';
					impOptionList.style.border = '1px solid black';
					impOptionList.style.userSelect = 'none';
					impOptionList.innerHTML = '<span><b>Import Options :</b></span>';
					(()=>{
						Object.keys(portOptions).forEach(e=>{
							e = portOptions[e];
							if(e.imp.dev){
								let cbx = create_checkbox(e.label, function(){e.imp.usr=this.checked}, e.imp.usr);
								cbx.style.display = 'block';
								cbx.querySelector('input[type=checkbox]').style.margin = 4;
								impOptionList.appendChild( cbx );
							}
						});
					})();
				};

				// force old to new names replacing [checkbox] (overwrite mode) 
				let forceReplaceOldCbx = create_checkbox(
					'Force [Old names to New names] Replacing',
					function(){impOverwriteMode.replaceOldToNewNames=this.checked},
					impOverwriteMode.replaceOldToNewNames
				);
				let enable_forceReplaceOldCbx = (state)=>{ forceReplaceOldCbx.style.display = state ? 'block' : 'none'; };

				// okay importing [button]
				let okayButton = document.createElement('input');
				okayButton.type = 'button';
				okayButton.value = 'Import';
				okayButton.onclick = ()=>{

					// unlock app normal using
					close_savePromt();

					callback();
				};

				// cancel importing [button]
				let cancelButton = document.createElement('input');
				cancelButton.type = 'button';
				cancelButton.value = 'X';
				cancelButton.style.position = 'absolute';
				cancelButton.style.top = 8;
				cancelButton.style.right = 8;
				cancelButton.onclick = ()=>{close_savePromt();};
				
			let close_savePromt = ()=>{
				parent.removeChild(lockAppPanel);
				parent.removeChild(impPromptPanel);
				window.removeEventListener('resize', resize_savePrompt);
			};

			impPromptPanel.appendChild(modeChoice);
			impPromptPanel.appendChild(impOptionList);
			impPromptPanel.appendChild(forceReplaceOldCbx);
			impPromptPanel.appendChild(okayButton);
			impPromptPanel.appendChild(cancelButton);

			parent.appendChild(lockAppPanel);
			parent.appendChild(impPromptPanel);

			// start
			if(importMode === 'overwrite'){ overwriteModeChoice.onclick(); overwriteModeChoice.checked=true; }
			if(importMode === 'update')   { updateModeChoice.onclick();    updateModeChoice.checked=true;    }
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