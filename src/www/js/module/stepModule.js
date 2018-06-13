class StepModule {
    constructor(){

    }

    stepHandle(){
        console.log(state);
        if( !state.fetchStatus ){
            if( state.stepEndFlag ){ // 表示が停止の状態
                state.nextStep();
                if(info.scene.main.length>state.sceneStep){ // まだ次がある場合
                    let source = info.scene.source[state.sceneStep];
                    if(source==="event") { //次がイベント
                        for (let i = 0; i < info.scene.args.length; i++) {
                            if (info.scene.args[i].idx === state.sceneStep) {
                                eventHandleModule.eventHandle(info.scene.main[state.sceneStep], info.scene.args[i].arg);
                                break;
                            }
                        }
                    }else if(source==="next") { //次のエンドポイントが必要
                        for (let i = 0; i < info.scene.endpoints.length; i++){
                            if(info.scene.endpoints[i].label===info.scene.main[state.sceneStep]){
                                fetchSceneModule.fetchScene(host+info.scene.endpoints[i].endpoint);
                                state.reset();
                                break;
                            }
                        }
                    }else if(source==="end"){ //終了時
                        console.log("END THIS STORY!");
                    } else { // 次も通常通りの表示時
                        textView.clear();
                        state.startStep();
                        nameView.displayNameHandle(source);
                        textView.displayLetter(info.scene.main[state.sceneStep][state.letterNum],textView.displayLetter);
                    }
                }
            }else{ // まだ表示中
                clearTimeout(info.timeoutID);
                textView.displayScene(); // 終わってないから全部表示
            }
        }
    }

    nextStep(){
        this.stepHandle();
    }
}

let stepModule = new StepModule();
