
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
		board.style.gap = '64px'; // use always even number (never odd number)
		board.style.gridTemplateColumns = 'auto repeat('+context_count+', 1fr)';
		board.style.gridTemplateRows = 'auto repeat('+location_count+', 1fr)';

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
			cornerCell
		*/
		let {board,panel,cornerCell, handle:view} = htmlElems;

		let cssClassName = window.RandoStuffs.OoT.viewModes.mainLib.editContextBy.reservedCssClassName;

		// INIT
		///////
		let brd = 32; // pointer border size
		let scrlbarwidth = 17; // estimated scrollbar pixel size

		// pointing rect cursor [frame]
		let rectCursorFrame = document.createElement('div');
		rectCursorFrame.style.position = 'absolute';
		//rectCursorFrame.style.width = 'auto';
		//rectCursorFrame.style.height = 'auto';
		rectCursorFrame.style.left = 0;
		rectCursorFrame.style.top = 0;
		rectCursorFrame.style.overflow = 'hidden';
		rectCursorFrame.style.pointerEvents = 'none';
		//rectCursorFrame.style.background = 'bisque'
		rectCursorFrame.style.opacity = 0.4
		rectCursorFrame.style.zIndex = 2;
		panel.appendChild(rectCursorFrame);

			let hFrameRect = document.createElement('div');
			hFrameRect.style.position = 'absolute';
			hFrameRect.style.inset = 'auto 0 0 0'; // u r b l
			hFrameRect.style.overflow = 'hidden';

			let hPointer = document.createElement("div");
			hPointer.style.position = "absolute";
			hPointer.style.pointerEvents = "none";
			hPointer.style.border = brd+"px solid crimson";
			//hPointer.style.boxSizing = 'border-box';
			//hPointer.style.zIndex = 3;
			hPointer.style.display = 'none';
			hPointer.style.backgroundColor = 'red';
			//hPointer.style.opacity = 0.4;

			hFrameRect.appendChild(hPointer);
			rectCursorFrame.appendChild(hFrameRect);

			let vPointer = document.createElement("div");
			vPointer.style.position = "absolute";
			vPointer.style.pointerEvents = "none";
			vPointer.style.border = "2px solid blue";
			vPointer.style.boxSizing = 'border-box';
			vPointer.style.zIndex = 3;
			vPointer.style.display = 'none';
			rectCursorFrame.appendChild(vPointer);



		// UPDATE AND DISPLAY POSITION
		//////////////////////////////
		/* board.onmouseover = function(e){
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
		}; */

		/* board.addEventListener('mouseover',
			function(e){
				e.stopPropagation();
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
			},
		{capture:true, passive:true}); */

		(()=>{

			return;

			let _1stCheckbox = board.querySelector('input.'+cssClassName);
			let hElem = _1stCheckbox.app.horizontalParent;
			let vElem = _1stCheckbox.app.verticalParent;
			board.style.gap = '64px';
			//let gap = parseInt(getComputedStyle(board).gap) || 0;
			let gap = parseInt(board.style.gap) || 0;

			brd = gap>>1;
			hPointer.style.borderWidth = `${brd}px 0px`;
			hPointer.style.transform = `translateY(-${(brd+vElem.offsetHeight)}px)`;

			let px=0, py=0; // mouse pos on the window
			window.onmousemove = (e)=>{

				//gap = parseInt(getComputedStyle(board).gap) || 0;

				let viewRect = panel.getBoundingClientRect();
				let vx = Math.round(viewRect.x);
				let vy = Math.round(viewRect.y);
				let mx = Math.round(viewRect.width);
				let my = Math.round(viewRect.height);

				px = e.clientX - vx;
				py = e.clientY - vy;

				if(px<0 || py<0 || px>mx || py>my) {px=0; py=0;}


				routine();
			};


			let routine2 = ()=>{
				// get scrollbar presence
				let Hscrl = panel.scrollWidth  > panel.offsetWidth  ? 1 : 0;
				let Vscrl = panel.scrollHeight > panel.offsetHeight ? 1 : 0;

				// horizontal Pointer
				let H_hPointer = hElem.offsetHeight;
				let W_hPointer = panel.offsetWidth - (scrlbarwidth*Vscrl) - brd;
				
				let baseY = vElem.offsetHeight;
				let H_space = H_hPointer + (gap);
				let H_space2gap = H_hPointer + (gap*1);
				let bYofst = baseY % H_space;
				let hScrollOfst = (panel.scrollTop%H_space);

				let _py = py + Math.floor(H_space2gap/2) + hScrollOfst + bYofst;
				let yIndex = Math.round(_py/H_space) - 1;
				let Y_hPointer = (yIndex*H_space) - hScrollOfst + bYofst - H_hPointer;
				let X_hPointer = 0;

				hPointer.style.left   = X_hPointer;
				hPointer.style.width  = W_hPointer;
				hPointer.style.top    = Y_hPointer;
				hPointer.style.height = H_hPointer;
				hPointer.style.display = '';
			};
			let routine = ()=>{
				// get scrollbar presence
				let Hscrl = panel.scrollWidth  > panel.offsetWidth  ? 1 : 0;
				let Vscrl = panel.scrollHeight > panel.offsetHeight ? 1 : 0;

				// horizontal Pointer
				let H_hPointer = hElem.offsetHeight;
				let W_hPointer = panel.offsetWidth - (scrlbarwidth*Vscrl) - brd;
				
				let baseY = vElem.offsetHeight;
				let H_space = H_hPointer + (gap);
				let bYofst = baseY % H_space;
				let hScrollOfst = (panel.scrollTop%H_space);

				let _py = (py-baseY-(gap>>1)) /* + (H_space>>1) */ + hScrollOfst //+ bYofst;
				let yIndex = Math.floor(_py/H_space) + (Math.ceil(baseY/H_space));
				let Y_hPointer = (yIndex*H_space) - hScrollOfst + bYofst - H_hPointer;
				let X_hPointer = 0;

				hPointer.style.left   = X_hPointer;
				hPointer.style.width  = W_hPointer;
				hPointer.style.top    = Y_hPointer;
				hPointer.style.height = H_hPointer;
				hPointer.style.display = 'flex';
				hPointer.style.justifyContent = 'end'
				hPointer.textContent = _py+' : '+yIndex;
			};



		})();

		(()=>{
			let _1stCheckbox = board.querySelector('input.'+cssClassName);
			let hElem = _1stCheckbox.app.horizontalParent;
			let vElem = _1stCheckbox.app.verticalParent;


			let gap = parseInt(board.style.gap) || 0;

			brd = gap>>1;
			hPointer.style.borderWidth = `${brd}px 0px`;
			hPointer.style.transform = `translateY(-${(brd+vElem.offsetHeight)}px)`;

			let px=0, py=0; // mouse pos on the window
			window.onmousemove = (e)=>{

				//gap = parseInt(getComputedStyle(board).gap) || 0;

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


				update_hPointer();
			};


			let routine2 = ()=>{
				// get scrollbar presence
				let Hscrl = panel.scrollWidth  > panel.offsetWidth  ? 1 : 0;
				let Vscrl = panel.scrollHeight > panel.offsetHeight ? 1 : 0;

				// horizontal Pointer
				let H_hPointer = hElem.offsetHeight;
				let W_hPointer = panel.offsetWidth - (scrlbarwidth*Vscrl) - brd;
				
				let baseY = vElem.offsetHeight;
				let H_space = H_hPointer + (gap);
				let H_space2gap = H_hPointer + (gap*1);
				let bYofst = baseY % H_space;
				let hScrollOfst = (panel.scrollTop%H_space);

				let _py = py + Math.floor(H_space2gap/2) + hScrollOfst + bYofst;
				let yIndex = Math.round(_py/H_space) - 1;
				let Y_hPointer = (yIndex*H_space) - hScrollOfst + bYofst - H_hPointer;
				let X_hPointer = 0;

				hPointer.style.left   = X_hPointer;
				hPointer.style.width  = W_hPointer;
				hPointer.style.top    = Y_hPointer;
				hPointer.style.height = H_hPointer;
				hPointer.style.display = '';
			};
			let update_hPointer = ()=>{



				// get scrollbar presence
				let Hscrl = board.scrollWidth  > board.offsetWidth  ? 1 : 0;
				let Vscrl = board.scrollHeight > board.offsetHeight ? 1 : 0;

				// horizontal Pointer
				//

				let H_hPointer = hElem.offsetHeight;
				let W_hPointer = board.offsetWidth - (scrlbarwidth*Vscrl) //- brd;
				
				let baseY = vElem.offsetHeight;
				let H_space = H_hPointer + gap;
				let hScrollOfst = board.scrollTop % H_space;

				let _py = (py-baseY-brd) + hScrollOfst;
				let yIndex = Math.ceil(_py / H_space);
				let Y_hPointer = (yIndex*H_space) - hScrollOfst - H_hPointer;
				let X_hPointer = 0;

				hFrameRect.style.inset = `${baseY}px 0px 0px 0px`; // u r b l
				
				hPointer.style.left   = X_hPointer;
				hPointer.style.width  = W_hPointer;
				hPointer.style.top    = Y_hPointer;
				hPointer.style.height = H_hPointer;
				
				// horizontal Pointer frame rect
				//
				

				rectCursorFrame.style.width  = Math.floor(panel.getBoundingClientRect().width)  - (scrlbarwidth*Vscrl);
				rectCursorFrame.style.height = Math.floor(panel.getBoundingClientRect().height) - (scrlbarwidth*Hscrl);
			};



		})();

		// UPDATE AND HIDE POSITION
		//////////////////////////////
		
		let hide_gridPointers= function(){
			hPointer.style.display = 'none';
			vPointer.style.display = 'none';
		};

		//board.onmouseleave = hide_gridPointers;
		//panel.onscroll = hide_gridPointers;
		//cornerCell.onmouseenter = hide_gridPointers;
		
		
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
