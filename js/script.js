let d    = new Date();
let  time = d.getSeconds() + 60 * d.getMinutes() + 3600 * d.getHours();

let sec = document.getElementById('sec');
let min = document.getElementById('min');
let hours = document.getElementById('hours');

function rotate(){
    time++;    
    sec.style.transform = 'rotate(' + (time * 6) + 'deg)';
    min.style.transform = 'rotate(' + Math.round(time / 10) + 'deg)';
    hours.style.transform = 'rotate(' + Math.round(time / 120) + 'deg)';
}

setInterval(rotate,1000);