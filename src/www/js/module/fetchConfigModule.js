class FetchConfigModule {
    constructor(){
        fetch(host+configEndpoint).then(function (response) {
            return response.json();
        }).then(function (config) {
            console.log(config);
            info.idolRealName = config.idolRealName;
            info.idolName = config.idolName;
            info.producerName = config.producerName;

            state.sceneId = config.sceneId;
            state.firstSceneEndpoint = config.firstEndpoint;

            fetchSceneModule.fetchScene(host+state.firstSceneEndpoint);
        });

        //console.log(state);
    }
}

let fetchConfigModule = new FetchConfigModule();