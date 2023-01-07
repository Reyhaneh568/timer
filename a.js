var button = document.getElementById('btn');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function handleClick(event) {
    new Timer();
});
var Timer = /** @class */ (function () {
    function Timer() {
        this.duration = 0;
        this.status = "stoped";
        this.render();
    }
    Timer.prototype.start = function () {
        if (this.status === "started") {
            throw alert("The timer is active");
        }
        this.status = "started";
    };
    Timer.prototype.stop = function () {
        if (this.status === "stoped") {
            throw alert("The timer was stopped");
        }
        this.status = "stoped";
    };
    Timer.prototype.reset = function () {
        if (this.status === "started") {
            this.stop();
        }
        this.duration = 0.0;
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
            this.duration = hour + ":" + minutes + ":" + seconds;
        }
        //.................................................................
        //.................................................................
        //.................................................................
        start.addEventListener("click", function () {
            _this.start();
            document.body.appendChild(Result);
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
            Result.innerHTML = (_this.duration).toString();
        });
        //.................................................................
        //.................................................................
        //.................................................................
        var reset = document.createElement("button");
        reset.textContent = "RESET";
        reset.addEventListener("click", function () {
            _this.reset();
            seconds = 0;
            minutes = 0;
            hour = 0;
            Result.innerHTML = 0 + ":" + 0 + ":" + 0;
            MyTimer = setInterval(timer, 1000);
        });
        document.body.appendChild(start);
        document.body.appendChild(stop);
        document.body.appendChild(reset);
    };
    return Timer;
}());
