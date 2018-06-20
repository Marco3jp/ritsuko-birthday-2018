class KeepAspectRatioController {
    constructor(){
        //this.moveFlag=false;
        window.addEventListener("resize",function () {
            keepAspectRatioModule.changeWindowSize();
        })
    }
}

let keepAspectRatioController = new KeepAspectRatioController();
