
const texts = document.querySelector('textarea')
const btn = document.querySelector('button')
const btnStop = document.querySelector('.btnStop')
const Select = document.querySelector('select')


let isSpeaking = false;
const  synthesis = window.speechSynthesis;

 function changeToSpeech() {
   const text = texts.value.trim()
 if(!synthesis.speaking && text){
   const  utterance = new SpeechSynthesisUtterance(text);
    synthesis.speak(utterance);
    btn.textContent = 'pause';
    isSpeaking = true; 

    utterance.onend = () => {
      btn.textContent = 'Convert to Speech';
    }; 

  

 }else if (synthesis.speaking && isSpeaking) {
   synthesis.pause()
   btn.textContent = 'Resume';
   isSpeaking = false; 
 } else if(synthesis.speaking && !isSpeaking){
   synthesis.resume()
   btn.textContent = 'pause'
   isSpeaking = true; 
 }


}

btn.addEventListener('click',changeToSpeech)

btnStop.addEventListener('click',()=>{ 
   synthesis.cancel()
   texts.value = ''
   btn.textContent = 'convert to speech'

}) 

  Select.addEventListener('change',()=> {
   const selectSpeed = Select.value;

   if(selectSpeed === "moderate"){
      rate = 0.7
   }else if (selectSpeed === "quickly"){ 
      rate =  1.7
   }else if (selectSpeed === "slowly"){ 
      rate =  0.5
   }
   const text = texts.value.trim();
   const utterance = new SpeechSynthesisUtterance(text);
   utterance.rate = rate;
   console.log(utterance.rate);
    
 }) 
