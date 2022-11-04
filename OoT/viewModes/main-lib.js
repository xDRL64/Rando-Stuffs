
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

}
