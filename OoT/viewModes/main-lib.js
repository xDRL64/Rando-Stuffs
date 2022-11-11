
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

			// location context name KEY_ID [input]
			let ctxNameInput = document.createElement('input');
				ctxNameInput.type = 'text';
				ctxNameInput.value = ctxID;
				ctxNameInput.title = 'ID name as unique key';
				ctxNameInput.placeholder = 'ID name as unique key';
				ctxNameInput.style.flexGrow = 1;

			// location context name as text [input]
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
				ctxDeleteBtn.onclick = ()=>{ board.removeChild(boardItem) };

		boardItem.appendChild(ctxNameInput);
		boardItem.appendChild(ctxTextInput);
		boardItem.appendChild(ctxMoveUpBtn);
		boardItem.appendChild(ctxMoveDownBtn);
		boardItem.appendChild(ctxAddNewAfterBtn);
		boardItem.appendChild(ctxDeleteBtn);

		return boardItem;
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
				condition.operator   = item.children[0].value;
				condition.property   = item.children[1].value;
				condition.comparator = item.children[2].value;
				condition.value      = item.children[3].value;
				output[groupNameID].push( condition );
			});
		});

		return output;
	};
}
