class FetchConfigModule {
    constructor(){
        fetch(host+configEndpoint).then(function (response) {
            return response.json();
        }).then(function (config) {
            console.log(config);

            state.idolRealName = config.idolRealName;
            state.idolName = config.idolName;
            state.producerName = config.producerName;
            state.sceneId = config.sceneId;
            state.producerName = config.producerName;
            state.nextEndpoint = config.firstEndpoint;
        });

        console.log(state);
    }
}

let fetchConfigModule = new FetchConfigModule();