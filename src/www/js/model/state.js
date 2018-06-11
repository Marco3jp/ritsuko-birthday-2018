class State {
    constructor(){
        /*
        強制終了に備えて、最終的にはindexedDB使いたい
         */

        this.sceneStep=0; // イベント内のステップ(配列の引数)
        this.sceneStepCharNum=0; // イベント内のステップ内の何文字目か
        this.stepEndFlag=false; // ステップが終わっているかのフラグ(次の表示をしていいかの確認に使う)

        this.fetchStatus=false;

        this.idolRealName="";
        this.idolName="";
        this.producerName="";this.idolName="";
        this.sceneId="";

        this.nowEndpoint=""; //Cookieにも入れる
        this.nextEndpoint="";

    }
}

let state = new State();
