function timer(){

    function setTimer(millisec){
        const data = new Date(millisec * 1000); // 1000ms to 1sec  
        return data.toLocaleTimeString('pt-br', {timeZone: "UTC"}) // return the timer "00:00:01".. 
    }

    let millisec = 0;
    let timer; 
    const timerString = document.querySelector('h1');

    function startTimer(){
        timer = setInterval(function(){
            millisec++
            timerString.innerText = setTimer(millisec);
        }, 1000)

    }

    

    document.addEventListener('click', function(e){
        const event = e.target;
        const botoes = document.querySelectorAll('.SRP')
        const [start, pause, reset] = botoes; 

        switch(event){
            case start:
                timerString.classList.remove('pause')
                clearInterval(timer);
                startTimer()
                break;

            case pause: 
                timerString.classList.toggle('pause')
                clearInterval(timer);
                break;

            case reset:
                timerString.classList.remove('pause')
                clearInterval(timer);
                millisec = 0;
                timerString.innerText = "00:00:00"
                       
        }
    })


} timer();