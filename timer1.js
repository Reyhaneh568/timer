var button = document.getElementById('btn');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function handleClick(event) {
    new Timer();
});
var Timer = /** @class */ (function () {
    function Timer() {
        this._duration = 0.0;
        this._status = "stoped";
        this.render();
    }
    Timer.prototype.start = function () {
        if (this._status === "started") {
            throw alert("The timer is active");
        }
        this._status = "started";
    };
    Timer.prototype.stop = function () {
        if (this._status === "stoped") {
            throw alert("The timer was stopped");
        }
        this._status = "stoped";
    };
    Timer.prototype.reset = function () {
        if (this._status === "started") {
            this.stop();
        }
        this._duration = 0.0;
    };
    Timer.prototype.render = function () {
        var _this = this;
        var seconds = 0, minutes = 0, hour = 0;
        var MyTimer;
        var Result = document.createElement("div");
        Result.setAttribute("id", "Result");
        var start = document.createElement("button");
        start.textContent = "START";
        function timer() {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes += 1;
                if (minutes == 60) {
                    minutes = 0;
                    hour += 1;
                }
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            Result.innerHTML = hour + ":" + minutes + ":" + seconds;
            this._duration = +(hour + ":" + minutes + ":" + seconds);
        }
        //.................................................................
        //.................................................................
        //.................................................................
        start.addEventListener("click", function () {
            _this.start();
            MyTimer = setInterval(timer, 1000);
        });
        //.................................................................
        //.................................................................
        //.................................................................
        var stop = document.createElement("button");
        stop.textContent = "STOP";
        stop.addEventListener("click", function () {
            _this.stop();
            clearInterval(MyTimer);
            Result.innerHTML = (_this._duration).toString();
        });
        //.................................................................
        //.................................................................
        //.................................................................
        var reset = document.createElement("button");
        reset.textContent = "RESET";
        reset.addEventListener("click", function () {
            _this.reset();
            Result.innerHTML = 0 + ":" + 0 + ":" + 0;
            MyTimer = setInterval(timer, 1000);
        });
    };
    return Timer;
}());
