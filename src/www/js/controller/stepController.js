class StepController {
    constructor() {
        let that = this;
        document.querySelector(".wrapper").addEventListener(pointerEvent, this.stepControl);
        window.addEventListener('keypress', function (e) {
            if(e.key==="Enter") {
                that.stepControl();
            }
        });
    }

    stepControl() {
        console.log("click or enter\n");
        stepModule.stepHandle();
    }
}

let stepController = new StepController();