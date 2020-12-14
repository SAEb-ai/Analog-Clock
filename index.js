setInterval(() => {
    d=new Date();
    hourTime=d.getHours();
    minuteTime=d.getMinutes();
    secondTime=d.getSeconds();
    hourRotation=30*hourTime + minuteTime/2;
    minuteRotation=6*minuteTime;
    secondRotation=6*secondTime;

    h=document.getElementById('hour');
    m=document.getElementById('minute');
    s=document.getElementById('second');

    h.style.transform = `rotate(${hourRotation}deg)`;
    m.style.transform = `rotate(${minuteRotation}deg)`;
    s.style.transform = `rotate(${secondRotation}deg)`;
    console.log(h.style.transform);
}, 1000);