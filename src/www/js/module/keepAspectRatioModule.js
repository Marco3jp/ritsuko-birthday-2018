class KeepAspectRatioModule {
    constructor(){ //DOM生成後に動く必要ありっぽい
        this.wrapper = document.querySelector(".landscape");
        this.state = 100;
        this.changeWindowSize();
    }

    changeWindowSize(){ //イベントリスナーに登録、画面サイズ取って計算
        if( (window.innerWidth/window.innerHeight) > (16/9) ){ //縦合わせ時
            console.log("yokonaga");
            if(this.state!==1){
                this.wrapper.classList.add("landscape-horizontal");
                this.wrapper.classList.remove("landscape-vertical");
                this.state=1;
            }
        }else{ //横合わせ時
            console.log("tatenaga");
            if(this.state!==0){
                this.wrapper.classList.add("landscape-vertical");
                this.wrapper.classList.remove("landscape-horizontal");
                this.state=0
            }
        }
    }

}

let keepAspectRatioModule = new KeepAspectRatioModule();
