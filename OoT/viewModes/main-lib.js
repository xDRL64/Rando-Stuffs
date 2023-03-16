
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
		handle.style.position = 'relative';
		let container = handle.attachShadow({mode:'closed'});

		// viewport
		let panel = document.createElement('div');
		panel.style.width = '100%';
		panel.style.height = '100%';
		panel.style.whiteSpace = 'nowrap';
		//panel.style.overflow = 'auto';
		panel.style.position = 'relative';
	
		// whole grid
		let board = document.createElement('div');
		board.style.display = 'grid';
		board.style.gap = '4px'; // use always even number (never odd number)
		board.style.gridTemplateColumns = 'auto repeat('+context_count+', minmax(32px,1fr))';
		board.style.gridTemplateRows = 'auto repeat('+location_count+', minmax(32px,1fr))';

		board.style.width = '100%';
		board.style.height = '100%';

		board.style.overflow = 'auto';
	
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
			ctxLabel.style.padding = '8px 0px';
	
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
			rowLabel.style.display = 'flex';
			rowLabel.style.alignItems = 'center';
			rowLabel.style.padding = '0px 8px';
	
			rowLabel.classList.add(cssClassName);
			rowLabel.app = {horizontalParent:rowLabel};
			board.appendChild(rowLabel);
	
			// context flag checkbox by location (main data grid)
			for(let ctx in contextList){
				let ctxCell = document.createElement('input');
				ctxCell.type = 'checkbox';
				ctxCell.checked = buildData[dataKey].context[ctx];
				ctxCell.classList.add(cssClassName);
				ctxCell.style.alignSelf = 'center';
				ctxCell.app = {horizontalParent:rowLabel, verticalParent:ctxLabels[ctx]};
	
				ctxCell.oninput = ()=>{
					// update core.Location.Data
					buildData[dataKey].context[ctx] = ctxCell.checked;
					// update core.Location.byContext
					let context = dataByContext[ctx];
					if(ctxCell.checked)
						context.push(dataKey);
					else
						context.splice(context.indexOf(dataKey), 1);
				};
	
				board.appendChild(ctxCell);
			}
		}

		panel.appendChild( board );
		container.appendChild( panel );
		//rectCursorFrame.appendChild(handle);

		//return {board,panel,cornerCell, handle:rectCursorFrame};
		return {board,panel,cornerCell, handle};
	};

	window.RandoStuffs.OoT.viewModes.mainLib.editContextBy.create_gridPointer = (htmlElems)=>{

		/* External :
			board
			panel
			mode
		*/
		let {board, panel, mode} = htmlElems;

		let cssClassName = window.RandoStuffs.OoT.viewModes.mainLib.editContextBy.reservedCssClassName;

		// INIT
		///////
		let brd = 32; // pointer border size
		let scrlbarwidth = 17; // estimated scrollbar pixel size

		// pointing rect cursor [frame]
		let rectCursorFrame = document.createElement('div');
			rectCursorFrame.style.position = 'absolute';
			rectCursorFrame.style.inset = 0;
			rectCursorFrame.style.overflow = 'hidden';
			rectCursorFrame.style.pointerEvents = 'none';
			rectCursorFrame.style.opacity = 0.15
			rectCursorFrame.style.zIndex = 2;
		panel.appendChild(rectCursorFrame);

			//

			// pointing vertical frame rect (border only)
			let vFrameRect_brdOnly = document.createElement('div');
				vFrameRect_brdOnly.style.position = 'absolute';
				vFrameRect_brdOnly.style.inset = '0 0 0 auto'; // u r b l
				vFrameRect_brdOnly.style.overflow = 'hidden';
			rectCursorFrame.appendChild(vFrameRect_brdOnly);

				// vertical pointer (border only)
				let vPointer_ = document.createElement("div");
					vPointer_.style.position = "absolute";
					vPointer_.style.border = brd+"px solid #a0a0a0";
					vPointer_.style.display = 'none';
					vPointer_.style.backgroundColor = '';
				vFrameRect_brdOnly.appendChild(vPointer_);

			//

			// pointing horizontal frame rect
			let hFrameRect = document.createElement('div');
				hFrameRect.style.position = 'absolute';
				hFrameRect.style.inset = 'auto 0 0 0'; // u r b l
				hFrameRect.style.overflow = 'hidden';
			rectCursorFrame.appendChild(hFrameRect);

				// horizontal pointer
				let hPointer = document.createElement("div");
					hPointer.style.position = "absolute";
					hPointer.style.border = brd+"px solid #a0a0a0";
					hPointer.style.display = 'none';
					hPointer.style.backgroundColor = 'red';
				hFrameRect.appendChild(hPointer);
			
			//

			// pointing vertical frame rect
			let vFrameRect = document.createElement('div');
				vFrameRect.style.position = 'absolute';
				vFrameRect.style.inset = '0 0 0 auto'; // u r b l
				vFrameRect.style.overflow = 'hidden';
			rectCursorFrame.appendChild(vFrameRect);

				// vertical pointer
				let vPointer = document.createElement("div");
					vPointer.style.position = "absolute";
					//vPointer.style.border = brd+"px solid #a0a0a0";
					vPointer.style.display = 'none';
					vPointer.style.backgroundColor = 'red';
				vFrameRect.appendChild(vPointer);




		// UPDATE AND DISPLAY POSITION
		//////////////////////////////

		(()=>{

			// INIT
			//

			let _1stCheckbox = board.querySelector('input.'+cssClassName);
			let hElem = _1stCheckbox.app.horizontalParent.getBoundingClientRect();
			let vElem = _1stCheckbox.app.verticalParent.getBoundingClientRect();


			let gap = parseInt(board.style.gap) || 0;

			let _brd = gap>>1;

			brd = _brd;
			vPointer_.style.borderWidth = `0px ${brd}px`;
			vPointer_.style.transform = `translateX(-${(brd+hElem.width)}px)`;
			
			brd = _brd;
			hPointer.style.borderWidth = `${brd}px 0px`;
			hPointer.style.transform = `translateY(-${(brd+vElem.height)}px)`;

			brd = 0;
			vPointer.style.borderWidth = `0px ${brd}px`;
			vPointer.style.transform = `translateX(-${(brd+hElem.width)}px)`;

			
			

			let px=0, py=0; // mouse pos on the window

			// UPDATE
			//

			mode.onmousemove = (e)=>{

				// compute mouse position relative to the panel rect
				//

				let viewRect = panel.getBoundingClientRect();
				let vx = Math.round(viewRect.x);
				let vy = Math.round(viewRect.y);
				let mx = Math.round(viewRect.width);
				let my = Math.round(viewRect.height);

				px = e.clientX - vx;
				py = e.clientY - vy;

				if(px<0 || py<0 || px>mx || py>my) {px=0; py=0;}

				update_pointers();
			};



			board.onscroll = (e)=>{ update_pointers(); };


			let update_pointers = ()=>{

				hElem = _1stCheckbox.app.horizontalParent.getBoundingClientRect();
				vElem = _1stCheckbox.app.verticalParent.getBoundingClientRect();

				let boardRect = board.getBoundingClientRect();

				// get scrollbar presence
				let Hscrl = board.scrollWidth  > board.offsetWidth  ? 1 : 0;
				let Vscrl = board.scrollHeight > board.offsetHeight ? 1 : 0;

				// horizontal Pointer
				//

				let H_hPointer = hElem.height;
				let W_hPointer = boardRect.width - (scrlbarwidth*Vscrl);
				
				let baseY = vElem.height;
				let H_space = H_hPointer + gap;
				let hScrollOfst = board.scrollTop % H_space;

				let _py = (py-baseY-_brd) + hScrollOfst;
				let yIndex = Math.ceil(_py / H_space);
				let Y_hPointer = (yIndex*H_space) - hScrollOfst - H_hPointer;
				let X_hPointer = 0;

				hPointer.style.left   = X_hPointer;
				hPointer.style.width  = W_hPointer;
				hPointer.style.top    = Y_hPointer;
				hPointer.style.height = H_hPointer;

				if(py>=baseY && (yIndex>0 || yIndex===0 && board.scrollTop>=_brd))
					hPointer.style.display = '';
				else
					hPointer.style.display = 'none';
				
				// horizontal Pointer frame rect
				hFrameRect.style.inset = `${baseY}px ${(scrlbarwidth*Vscrl)}px ${(scrlbarwidth*Hscrl)}px 0px`; // u r b l

				// vertical Pointer
				//

				let W_vPointer = vElem.width;
				let H_vPointer = boardRect.height - (scrlbarwidth*Hscrl);

				let baseX = hElem.width;
				let W_space = W_vPointer + gap;
				let wScrollOfst = board.scrollLeft % W_space;

				let _px = (px-baseX-_brd) + wScrollOfst;
				let xIndex = Math.ceil(_px / W_space);
				let X_vPointer = (xIndex*W_space) - wScrollOfst - W_vPointer;
				let Y_vPointer = 0;

				vPointer.style.left   = X_vPointer;
				vPointer.style.width  = W_vPointer;
				vPointer.style.top    = Y_vPointer;
				vPointer.style.height = H_vPointer;
				
				// vertical pointer (border only)
				vPointer_.style.left   = X_vPointer;
				vPointer_.style.width  = W_vPointer;
				vPointer_.style.top    = Y_vPointer;
				vPointer_.style.height = H_vPointer;
				
				// vertical Pointer frame rect
				vFrameRect.style.inset = `0px ${(scrlbarwidth*Vscrl)}px ${(scrlbarwidth*Hscrl)}px ${baseX}px`; // u r b l
				// vertical Pointer frame rect (border only)
				vFrameRect_brdOnly.style.inset = `0px ${(scrlbarwidth*Vscrl)}px ${(scrlbarwidth*Hscrl)}px ${baseX}px`; // u r b l
				
				if(px>=baseX && (xIndex>0 || xIndex===0 && board.scrollLeft>=_brd)){
					vPointer.style.display = '';
					vPointer_.style.display = ''; // border only
				}else{
					vPointer.style.display = 'none';
					vPointer_.style.display = 'none'; // border only
				}

			};

		})();

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

				let conditionsDiv = groupElem.children[2];
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


	window.RandoStuffs.OoT.viewModes.mainLib.sync_conditionsWithContextList = (cndtGroup, cndtPropRef, oldCtxList, newCtxList)=>{
		let cndtGroupNames = Object.keys(cndtGroup||{});
		if(cndtGroup && cndtGroupNames.length){

			oldCtxList = Object.keys(oldCtxList);
			newCtxList = Object.keys(newCtxList);

			let val, indexes;

			cndtGroupNames.forEach( g=>{
				cndtGroup[g].forEach( cndt=>{
					
					indexes = cndt.selectedIndex;

					if(indexes.property === cndtPropRef){
						val = indexes.value;
						val = newCtxList.indexOf( oldCtxList[val] );
						// update
						indexes.value = val;
					}

				} );
			} );

		}
	};


	window.RandoStuffs.OoT.viewModes.mainLib.createElems = {};
	window.RandoStuffs.OoT.viewModes.mainLib.createElems.create_checkbox = (label, oninput, checked=false)=>{
		let elem = document.createElement('input');
			elem.type = 'checkbox';
			elem.style.margin = 16;
			elem.oninput = oninput;
			elem.checked = checked;

		let _label = document.createElement('label');
			_label.innerHTML = '<span>'+label+'</span>';
			_label.prepend(elem);
		return _label;
	};
}
