class TextView {
    constructor(){
    }

    displayLetter(letter,self){
        console.log(state.letterNum);
        textArea.insertAdjacentText('beforeend',letter);
        state.letterNum++;
        if(state.letterNum < info.scene.main[state.sceneStep].length){
            if(info.scene.main[state.sceneStep][state.letterNum-1] === "。") {
                info.timeoutID = setTimeout(self, 200, info.scene.main[state.sceneStep][state.letterNum],self);
            } else if (info.scene.main[state.sceneStep][state.letterNum-1] === "、") {
                info.timeoutID = setTimeout(self, 150, info.scene.main[state.sceneStep][state.letterNum],self);
            } else {
                info.timeoutID = setTimeout(self, 100, info.scene.main[state.sceneStep][state.letterNum],self);
            }
        }else{
            state.endStep();
        }
    }

    displayScene(){
        textArea.textContent=info.scene.main[state.sceneStep];
        state.endStep();
    }

    clear(){
        textArea.textContent="";
    }
}

let textView = new TextView();