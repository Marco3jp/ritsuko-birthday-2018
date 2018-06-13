class EventHandleModule {
    constructor(){

    }

    eventHandle(event, args){
        console.log(event,args);
    }
}

let eventHandleModule = new EventHandleModule();