class countDownTimer {
      constructor() {
       // Dom elements
       this.container = document.querySelector('.container');
       this.timerContainer =  document.querySelector('.timer-container');
       this.texts = document.querySelector('.texts');
       this.dateInput =  document.querySelector('.dateinput')
       this.title = document.querySelector('.title');
       this.btnStart = document.querySelector('.start');
       this.day = document.querySelector('.day');
       this.hour = document.querySelector('.hour');
       this.minute = document.querySelector('.minute');
       this.second = document.querySelector('.second');

       this.intervalId = null;

       this.btnStart.addEventListener('click', this.handlerStart.bind(this));
      } 

      handlerStart(){
        if(!this.texts.value || !this.dateInput.value){
           alert("please enter both text and date before starting ") 
           return;
        } 
        this.container.style.display = "none";
        this.timerContainer.style.display = "block";
        this.start()
      } 

      updateTimer(){
        const targetDate =  new Date(this.dateInput.value);
        if(isNaN(targetDate)) {
            alert('please enter the valid date');
            return;
         } 
        const now = new Date();
        const diff =  targetDate -  now ;  
        
        if(diff <= 0){
           alert('countDown completed') 
           return;
        }

        const secondTotal  = Math.floor(diff / 1000)  ; 
        const days = Math.floor(secondTotal / 86400)  ; 
        const hours = Math.floor((secondTotal % 86400)/ 3600); 
        const minutes = Math.floor((secondTotal % 3600)/ 60);
        const remainingSeconds = secondTotal % 60;

        this.title.textContent  =  this.texts.value;
        this.day.textContent = days;
        this.hour.textContent = hours;
        this.minute.textContent =  minutes;
        this.second.textContent = remainingSeconds;  
      } 

      start(){
        this.stop();
        this.updateTimer();
        this.intervalId =  setInterval(()=> this.updateTimer(), 1000);
      } 

      stop(){
        clearInterval(this.intervalId); 
      } 

      restart(){
        this.stop()
        this.title.textContent = 'Counter title'
        this.day.textContent =  this.hour.textContent =
        this.minute.textContent =  this.second.textContent = '0';  

        this.container.style.display = "flex";
        this.timerContainer.style.display = "none";

        this.texts.value = "";
        this.dateInput.value = "";
      }
} 

const timer =  new countDownTimer(); 