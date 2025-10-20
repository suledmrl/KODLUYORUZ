const myName = document.querySelector('#myName');
const myClock = document.querySelector('#myClock');


myName.innerHTML = prompt('isminiz');

myClock.innerHTML = showTime();


function showTime(){
    let date = new Date();
    
    let days = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi']
    let dayName = days[date.getDay()];

    /**let hour = date.getHours().toString().padStart(2, '0');          
    let minute = date.getMinutes().toString().padStart(2, '0');
    let second = date.getSeconds().toString().padStart(2, '0'); */

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    let time = `${hour}:${minute}:${second} ${dayName}`;
    

    myClock.innerText = time;
    

    setTimeout(showTime, 1000)
}

//setInterval(showTime, 1000);

showTime();