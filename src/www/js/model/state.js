class State {
    constructor(){
        /*
        強制終了に備えて最終的にはindexedDB使いたい
         */

        this.sceneStep=0; // イベント内のステップ(配列の引数)
        this.letterNum=0; // イベント内のステップ内の何文字目か
        this.stepEndFlag=true; // ステップが終わっているかのフラグ(次の表示をしていいかの確認に使う)

        this.fetchStatus=false;
        this.sceneId=0;
        this.firstSceneEndpoint="";
    }

    reset(){
        this.sceneStep=0;
        this.letterNum=0;
    }

    nextStep(){
        state.sceneStep++;
        state.letterNum=0;
    }

    startStep(){
        state.stepEndFlag=false;
    }

    endStep(){
        state.stepEndFlag=true;
    }
}

let state = new State();
