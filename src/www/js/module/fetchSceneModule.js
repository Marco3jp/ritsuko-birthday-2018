class FetchSceneModule {
    constructor(){
    }

    fetchScene(endpoint){
        state.fetchStatus=true;
        fetch(endpoint).then(function (response) {
            state.fetchStatus=false;
            return response.json();
        }).then(function (scene) {
            console.log(scene);
            document.cookie = 'lastEndPoint='+endpoint+';max-age=126144000';
            info.scene = scene;
        });
    }
}

let fetchSceneModule = new FetchSceneModule();