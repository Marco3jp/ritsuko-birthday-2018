class ChangeWindowSizeListener {
    constructor(){
        //this.moveFlag=false;
        window.addEventListener("resize",function () {
            keepAspectRatio.changeWindowSize(); //本当にこれでええんか？
        })
    }
}

let changeWindowSizeListener = new ChangeWindowSizeListener();