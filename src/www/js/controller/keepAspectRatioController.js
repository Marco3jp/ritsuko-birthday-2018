class KeepAspectRatioController {
    constructor(){
        //this.moveFlag=false;
        window.addEventListener("resize",function () {
            keepAspectRatio.changeWindowSize(); //本当にこれでええんか？
        })
    }
}

let keepAspectRatioController = new KeepAspectRatioController();