class NameView {
    constructor(){
        this.nameArea = document.querySelector(".commu-name");
    }

    displayNameHandle(name){
        if(name === "no name" || name === "ナレーション" || name === "narration"){
            this.nameArea.textContent = "";
        }else if (name === "P"){
            console.log("moving");
            this.nameArea.textContent = info.producerName+"P";
        }else if (name === "idol"){
            this.nameArea.textContent = info.idolName;
        }else if (name === "realIdol"){
            this.nameArea.textContent = info.idolRealName;
        }else{
            this.nameArea.textContent = name;
        }
    }
}

let nameView = new NameView();