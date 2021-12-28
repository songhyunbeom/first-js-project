const clock = document.querySelector("h2#clock");

//clock.innerText = "assaas";

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); 
    const minutes = String(date.getMinutes()).padStart(2,"0"); 
    const secnds = String(date.getSeconds()).padStart(2,"0"); 

    clock.innerText = (`${hours}:${minutes}:${secnds}`)
}
getClock();
setInterval(getClock, 1000);

