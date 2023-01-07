const button = document.getElementById('btn');


button?.addEventListener('click', function handleClick(event) {
new Timer();
});

class Timer{
  
    private duration: number;
    private status: string;

    constructor(){
    this.duration = 0.0;
    this.status = "stoped";
    this.render();
    }

    start(){
        if (this.status === "started") {
       throw alert("The timer is active");
      }
    this.status = "started";

    }
    stop(){
        if (this.status === "stoped") {
            throw alert("The timer was stopped");
          }
          
          this.status = "stoped";
    }

    reset(){
        if (this.status === "started") {
            this.stop();
          }
          this.duration = 0.0;
    }

    render(){
        let seconds:any=0,minutes=0,hour=0;
        var MyTimer;
        let Result = document.createElement("div");
        Result.setAttribute("id", "Result");
        let start = document.createElement("button");
        start.textContent = "START";
        function timer(){
            seconds++;
            if(seconds==60){
                    seconds=0;
                    minutes+=1;
                    if(minutes==60){
                        minutes=0;
                        hour+=1;
                    
                }}
                if( seconds < 10 ){
                    seconds = "0" + seconds;
                   }
         Result.innerHTML =hour+":"+minutes+":"+seconds;
         this.duration = +(hour+":"+minutes+":"+seconds);
        }
        //.................................................................
        //.................................................................
        //.................................................................
        start.addEventListener("click", () => {
        this.start();     
        
         MyTimer = setInterval(timer, 1000);

    });
    //.................................................................
    //.................................................................
    //.................................................................
  
    let stop = document.createElement("button");
    stop.textContent = "STOP";
    stop.addEventListener("click", () => {
      this.stop();
    clearInterval(MyTimer);
    Result.innerHTML = (this.duration).toString();
    });
    //.................................................................
    //.................................................................
    //.................................................................
    let reset = document.createElement("button");
    reset.textContent = "RESET";
    reset.addEventListener("click", () => {
      this.reset();
      Result.innerHTML = 0+":"+0+":"+0;
      MyTimer = setInterval(timer, 1000);
    });
  
}

}
