
if(!window.RandoStuffs.OoT.viewModes){
	console.log('window.RandoStuffs.OoT.viewModes not defined before loading main-lib.js');
}else{

	window.RandoStuffs.OoT.viewModes.mainLib = {};


	
	window.RandoStuffs.OoT.viewModes.mainLib.editContext = {};

	window.RandoStuffs.OoT.viewModes.mainLib.editContext.create_boardItem = (board, ctxID, ctxTxt)=>{

		// recursive short name of this function
		let create_boardItem = window.RandoStuffs.OoT.viewModes.mainLib.editContext.create_boardItem;

		// output item to return
		let boardItem = document.createElement('div');
		boardItem.style.display = 'flex';
		boardItem.style.margin = 4;

			// context name KEY_ID [input]
			let ctxNameInput = document.createElement('input');
				ctxNameInput.type = 'text';
				ctxNameInput.value = ctxID;
				ctxNameInput.title = 'ID name as unique key';
				ctxNameInput.placeholder = 'ID name as unique key';
				ctxNameInput.style.flexGrow = 1;
				ctxNameInput.onchange = ()=>{
					let c = false;
					let allContexts = [...board.children];
					allContexts.forEach(e=>{
						let elem = e.firstElementChild;
						if(elem !== ctxNameInput) c |= (elem.value===ctxNameInput.value);
					});
					let fix = 0;
					let uniqueName = ctxNameInput.value;
					while(c){
						c = false;
						uniqueName = ctxNameInput.value+'..'+fix;
						allContexts.forEach(e=>{c|=(e.firstElementChild.value===uniqueName)});
						fix++;
					}
					ctxNameInput.value = uniqueName;
				};

			// context name as text [input]
			let ctxTextInput = document.createElement('input');
				ctxTextInput.type = 'text';
				ctxTextInput.value = ctxTxt || '';
				ctxTextInput.title = 'Text name to display';
				ctxTextInput.placeholder = 'Text name to display';
				ctxTextInput.style.flexGrow = 1;

			// board item move up [button]
			let ctxMoveUpBtn = document.createElement('input');
				ctxMoveUpBtn.type = 'button';
				ctxMoveUpBtn.value = '▲';
				ctxMoveUpBtn.title = 'Move this context up';
				ctxMoveUpBtn.onclick = ()=>{
					// implicite wrap loop (first to last)
					board.insertBefore(boardItem, boardItem.previousElementSibling);
				};

			// board item move down [button]
			let ctxMoveDownBtn = document.createElement('input');
				ctxMoveDownBtn.type = 'button';
				ctxMoveDownBtn.value = '▼';
				ctxMoveDownBtn.title = 'Move this context down';
				ctxMoveDownBtn.onclick = ()=>{
					// explicite wrap loop (last to first)
					if(boardItem.nextElementSibling)
						boardItem.nextElementSibling.after(boardItem);
					else
						board.prepend(boardItem);
				};

			// board item add new one after itself [button]
			let ctxAddNewAfterBtn = document.createElement('input');
				ctxAddNewAfterBtn.type = 'button';
				ctxAddNewAfterBtn.value = '+';
				ctxAddNewAfterBtn.title = 'Add new context after this one';
				ctxAddNewAfterBtn.onclick = ()=>{
					boardItem.after( create_boardItem(board,'','') );
				};

			// board item delete itself [button]
			let ctxDeleteBtn = document.createElement('input');
				ctxDeleteBtn.type = 'button';
				ctxDeleteBtn.value = '❌';
				ctxDeleteBtn.title = 'Delete this context';
				ctxDeleteBtn.onclick = ()=>{
					if(board.children.length > 1)
						board.removeChild(boardItem);
				};

		boardItem.appendChild(ctxNameInput);
		boardItem.appendChild(ctxTextInput);
		boardItem.appendChild(ctxMoveUpBtn);
		boardItem.appendChild(ctxMoveDownBtn);
		boardItem.appendChild(ctxAddNewAfterBtn);
		boardItem.appendChild(ctxDeleteBtn);

		return boardItem;
	};

	window.RandoStuffs.OoT.viewModes.mainLib.editContext.clean_itemBoard = (board)=>{
		// remove board item without label name (But before try to use its ID name field)
		([...board.children]).forEach(e=>{
			if(e.children[1].value===''){
				if(e.firstElementChild.value!=='')
					e.children[1].value = e.firstElementChild.value;
				else
					if(board.children.length > 1) board.removeChild(e);
			}
		});

		// fix missing unique ID name by using label name
		([...board.children]).forEach(e=>{
			if(e.firstElementChild.value==='')
				e.firstElementChild.value = e.children[1].value;
		});

		// fix same unique ID name (by adding automatic unique number ID)
		([...board.children]).forEach(e=>{ e.firstElementChild.onchange(); });
	};

	window.RandoStuffs.OoT.viewModes.mainLib.editContextBy = {};
	window.RandoStuffs.OoT.viewModes.mainLib.editContextBy.reservedCssClassName = 'grid-cell';
	window.RandoStuffs.OoT.viewModes.mainLib.editContextBy.create_editorView = (Data, keyList, valList, contextList, dataByContext)=>{

		let cssClassName = window.RandoStuffs.OoT.viewModes.mainLib.editContextBy.reservedCssClassName;
		let buildData = Data;
	
		// CREATE DISPLAYER
		///////////////////
		let context_count = Object.keys(contextList).length;
		let location_count = keyList.length;
	
		// handle & container (use shadow DOM)
		let handle = document.createElement('div');
		handle.style.width = '75%';
		handle.style.height = '75%';
		//handle.style.position = 'relative';
		let container = handle.attachShadow({mode:'closed'});

		// viewport
		let panel = document.createElement('div');
		panel.style.width = '100%';
		panel.style.height = '100%';
		panel.style.whiteSpace = 'nowrap';
		panel.style.overflow = 'auto';
		panel.style.position = 'relative';
	
		// whole grid
		let board = document.createElement('div');
		board.style.display = 'grid';
		board.style.gap = '4px';
		board.style.gridTemplateColumns = 'auto repeat('+context_count+', 1fr)';
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
	
		// context labels (top axis header)
		let ctxLabels = {};
		for(let ctx in contextList){
			let ctxLabel = document.createElement('div');
			ctxLabel.textContent = contextList[ctx];
			ctxLabel.style.writingMode = 'vertical-lr';
			ctxLabel.style.whiteSpace = 'pre';
			ctxLabel.style.display = 'flex';
			ctxLabel.style.alignItems = 'center';
	
			ctxLabel.style.position = 'sticky';
			ctxLabel.style.top = 0;
			ctxLabel.style.backgroundColor = 'white';
			ctxLabel.style.zIndex = 1;
	
			ctxLabel.classList.add(cssClassName);
			ctxLabel.app = {verticalParent:ctxLabel};
	
			board.appendChild(ctxLabel);
	
			ctxLabels[ctx] = ctxLabel;
		}
	
		// location labels (left axis header)
		for(let dataKey of keyList){
			let rowLabel = document.createElement('div');
			rowLabel.textContent = valList[dataKey];
	
			rowLabel.style.position = 'sticky';
			rowLabel.style.left = 0;
			rowLabel.style.backgroundColor = 'white';
			rowLabel.style.zIndex = 1;
	
			rowLabel.classList.add(cssClassName);
			rowLabel.app = {horizontalParent:rowLabel};
			board.appendChild(rowLabel);
	
			// context flag checkbox by location (main data grid)
			for(let ctx in contextList){
				let ctxCell = document.createElement('input');
				ctxCell.type = 'checkbox';
				ctxCell.checked = buildData[dataKey].context[ctx];
				ctxCell.classList.add(cssClassName);
				ctxCell.app = {horizontalParent:rowLabel, verticalParent:ctxLabels[ctx]};
	
				ctxCell.oninput = ()=>{
					// update core.Location.Data
					buildData[dataKey].context[ctx] = ctxCell.checked;
					// update core.Location.byContext
					dataByContext[ctx].push(dataKey);
				};
	
				board.appendChild(ctxCell);
			}
		}

		panel.appendChild( board );
		container.appendChild( panel );

		return {board,panel,cornerCell, handle};
	};

	window.RandoStuffs.OoT.viewModes.mainLib.editContextBy.create_gridPointer = (htmlElems)=>{

		/* External :
			board
			panel
			cornerCell
		*/
		let {board,panel,cornerCell} = htmlElems;

		let cssClassName = window.RandoStuffs.OoT.viewModes.mainLib.editContextBy.reservedCssClassName;

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
			if(e.target.className === cssClassName){

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



	window.RandoStuffs.OoT.viewModes.mainLib.editCondition = {};

	window.RandoStuffs.OoT.viewModes.mainLib.editCondition.create_conditionItem = (board, allPropRef, first)=>{

		// recursive short name of this function
		let create_conditionItem = window.RandoStuffs.OoT.viewModes.mainLib.editCondition.create_conditionItem;

		// output item to return
		let boardItem = document.createElement('div');
		boardItem.style.display = 'flex';
		boardItem.style.margin = 4;

			// OP (AND/OR) [droplist]
			let opDroplist = document.createElement('select');
			opDroplist.innerHTML = '<option value="AND">AND</option>'
								 + '<option value="OR">OR</option>';
			opDroplist.disabled = first;
			opDroplist.style.width = 64;

			// prop (allRefProp) [droplist]
			let allPropList = document.createElement('select');
			for(let p in allPropRef){
				allPropList.innerHTML += `<option value="${p}">${p}</option>`;
			}
			allPropList.onchange = ()=>{ update_valuesForPropList(); };
			allPropList.style.width = 192;

			// test type ("is"/"is not") [droplist]
			let testDroplist = document.createElement('select');
			testDroplist.innerHTML = '<option value="is">is</option>'
								   + '<option value="is not">is not</option>';
			testDroplist.style.width = 64;

			// values list by selected prop
			let valuesForPropList = document.createElement('select');
			valuesForPropList.style.flexGrow = 1;
			let update_valuesForPropList = ()=>{
				valuesForPropList.innerHTML = '';
				let obj = allPropRef[ allPropList.value ];
				for(let k in obj){
					valuesForPropList.innerHTML += `<option value="${k}">${obj[k]}</option>`;
				}
			};
			update_valuesForPropList();

			let update_firstBoardItem = ()=>{
				([...board.children]).forEach(elem=>elem.firstChild.disabled=false);
				board.firstChild.firstChild.disabled = true;
			};

			// board item move up [button]
			let ctxMoveUpBtn = document.createElement('input');
				ctxMoveUpBtn.type = 'button';
				ctxMoveUpBtn.value = '▲';
				ctxMoveUpBtn.title = 'Move this condition up';
				ctxMoveUpBtn.style.marginLeft = 'auto';
				//ctxMoveUpBtn.style.width = '5%';
				ctxMoveUpBtn.onclick = ()=>{
					// implicite wrap loop (first to last)
					board.insertBefore(boardItem, boardItem.previousElementSibling);
					update_firstBoardItem();
				};

			// board item move down [button]
			let ctxMoveDownBtn = document.createElement('input');
				ctxMoveDownBtn.type = 'button';
				ctxMoveDownBtn.value = '▼';
				ctxMoveDownBtn.title = 'Move this condition down';
				//ctxMoveDownBtn.style.width = '5%';
				ctxMoveDownBtn.onclick = ()=>{
					// explicite wrap loop (last to first)
					if(boardItem.nextElementSibling)
						boardItem.nextElementSibling.after(boardItem);
					else
						board.prepend(boardItem);
					update_firstBoardItem();
				};

			// board item add new one after itself [button]
			let ctxAddNewAfterBtn = document.createElement('input');
				ctxAddNewAfterBtn.type = 'button';
				ctxAddNewAfterBtn.value = '+';
				ctxAddNewAfterBtn.title = 'Add new condition after this one';
				//ctxAddNewAfterBtn.style.width = '5%';
				ctxAddNewAfterBtn.onclick = ()=>{
					boardItem.after( create_conditionItem(board,allPropRef,false) );
				};

			// board item delete itself [button]
			let ctxDeleteBtn = document.createElement('input');
				ctxDeleteBtn.type = 'button';
				ctxDeleteBtn.value = '❌';
				ctxDeleteBtn.title = 'Delete this condition';
				//ctxDeleteBtn.style.width = '5%';
				ctxDeleteBtn.onclick = ()=>{
					if(board.children.length > 1)
						board.removeChild(boardItem)
					update_firstBoardItem();
				};

		// !!! MUST BE ADDED IN THIS ORDER !!!
		boardItem.appendChild(opDroplist);        // .children[0]
		boardItem.appendChild(allPropList);       // .children[1]
		boardItem.appendChild(testDroplist);      // .children[2]
		boardItem.appendChild(valuesForPropList); // .children[3]

		boardItem.appendChild(ctxMoveUpBtn);
		boardItem.appendChild(ctxMoveDownBtn);
		boardItem.appendChild(ctxAddNewAfterBtn);
		boardItem.appendChild(ctxDeleteBtn);

		return boardItem;


	};

	window.RandoStuffs.OoT.viewModes.mainLib.editCondition.create_conditionGroup = (board, allPropRef)=>{

		let create_conditionItem = window.RandoStuffs.OoT.viewModes.mainLib.editCondition.create_conditionItem;

		let conditionGroup = document.createElement('div');
		conditionGroup.style.display = 'flex';
		conditionGroup.style.flexDirection = 'column';
		conditionGroup.style.border = '1px solid black';
		conditionGroup.style.margin = 4;

			// header [panel]
			let header = document.createElement('div');
			header.style.display = 'flex';

				// name field [text input]
				let name = document.createElement('input');
				name.type = 'text';
				name.placeholder = 'Condition Group Name as unique ID';
				name.style.margin = 4;
				name.style.flexGrow = 1;
				name.onchange = ()=>{
					let c = false;
					let allGroups = [...board.children];
					allGroups.forEach(e=>{
						let elem = e.firstElementChild.firstElementChild;
						if(elem !== name) c |= (elem.value===name.value);
					});
					let fix = 0;
					let uniqueName = name.value;
					while(c){
						c = false;
						uniqueName = name.value+'..'+fix;
						allGroups.forEach(e=>{c|=(e.firstElementChild.firstElementChild.value===uniqueName)});
						fix++;
					}
					name.value = uniqueName;
				};

				// delete itself [button]
				let deleteItself = document.createElement('input');
				deleteItself.type = 'button';
				deleteItself.value = '❌';
				deleteItself.style.margin = 4;
				deleteItself.onclick = ()=>{ board.removeChild(conditionGroup) };

			header.appendChild(name); // !!! MUST BE .children[0] !!!
			header.appendChild(deleteItself);

			// general field [checkbox]
			let general = document.createElement('label');
				let general_field = document.createElement('input');
				general_field.type = 'checkbox';
				general_field.oninput = function(){ name.disabled=this.checked };
				let general_label = document.createElement('span');
				general_label.textContent = 'General (Apply on all display options)';
			general.appendChild(general_field); // !!! MUST BE .children[0] !!!
			general.appendChild(general_label);


			// body field [(edit condition) panel]
			let body = document.createElement('div');
			body.appendChild( create_conditionItem(body, allPropRef, true) ); // first (default)

		conditionGroup.appendChild(header); // !!! MUST BE .children[0] !!!
		conditionGroup.appendChild(general); // !!! MUST BE .children[1] !!!
		conditionGroup.appendChild(body); // !!! MUST BE .children[2] !!!

		/* RETURN :
			<div conditionGroup>
				<div header>
					<input_txt nameID>
					<input_btn deleteButton>
				<label general>
					<input_cbx>
					<span text>
				<div body>
					<div conditionItem>
					<...>
		*/
		return conditionGroup; 
	};

	window.RandoStuffs.OoT.viewModes.mainLib.editCondition.getObject_conditionGroups = (conditionGroupsBoard)=>{

		let conditionGroupElem = [...conditionGroupsBoard.children];
		let output = {};

		// loop on all condition groups
		conditionGroupElem.forEach((group)=>{

			// get name ID of the current group
			let groupNameID = group.children[0].children[0].value;
			output[groupNameID] = [];

			// get the flag 'general'
			output[groupNameID].general = group.children[1].children[0].checked;

			// loop on all conditions of current group
			let conditionItemContainer = [...group.children[2].children];
			conditionItemContainer.forEach((item)=>{
				let condition = {};
				// to eval condition
				condition.operator   = item.children[0].value;
				condition.property   = item.children[1].value;
				condition.comparator = item.children[2].value;
				condition.value      = item.children[3].value;
				// to recreate view mode
				condition.selectedIndex = {
					operator   : item.children[0].selectedIndex,
					property   : item.children[1].selectedIndex,
					comparator : item.children[2].selectedIndex,
					value      : item.children[3].selectedIndex,
				}
				output[groupNameID].push( condition );
			});
		});

		return output;
	};

	window.RandoStuffs.OoT.viewModes.mainLib.editCondition.makeConditionBoard_fromObject = (board, groups, allPropRef)=>{

		let create_conditionItem = window.RandoStuffs.OoT.viewModes.mainLib.editCondition.create_conditionItem;
		let create_conditionGroup = window.RandoStuffs.OoT.viewModes.mainLib.editCondition.create_conditionGroup;

		// group loop
		Object.keys(groups).forEach(nameID=>{
			let groupObj = groups[nameID];
			let groupElem = create_conditionGroup(board, allPropRef);
			// name ID [field]
			groupElem.firstElementChild.firstElementChild.value = nameID;
			groupElem.firstElementChild.firstElementChild.disabled = groupObj.general;
			// general [checkbox]
			groupElem.children[1].firstElementChild.checked = groupObj.general;

				let conditionsDiv = groupElem.children[2]
				// group conditions loop
				groupObj.forEach( ({selectedIndex:{operator, property, comparator, value}}, index)=>{
					let conditionElem = null;
					if(index === 0)
						conditionElem = conditionsDiv.firstElementChild;
					else{
						conditionElem = create_conditionItem(conditionsDiv, allPropRef, false)
						conditionsDiv.appendChild(conditionElem);
					}
					conditionElem.children[0].selectedIndex = operator;
					conditionElem.children[1].selectedIndex = property;
					conditionElem.children[1].onchange();
					conditionElem.children[2].selectedIndex = comparator;
					conditionElem.children[3].selectedIndex = value;
				} );

			board.appendChild(groupElem);
		});
	};
}
