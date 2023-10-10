let a = new Date();
let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
let d = a.getDate()
const dateElement = document.querySelector("#date");
const timeElement = document.querySelector("#time");
console.log(h,m,s,d)
const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
let nam = month[a.getMonth()];
let yea = 2023;
setInterval(function(){
//     h = h.toString().padStart(2, '0');
//     m = m.toString().padStart(2, '0');
//     s = s.toString().padStart(2, '0');
    if(h===0 || h===1 ||h===2 || h===3 ||h===4 || h===5 ||h===6 || h===7 ||h===8 || h===9){    h="0"+h;    }
    if(m===0 || m===1 ||m===2 || m===3 ||m===4 || m===5 ||m===6 || m===7 ||m===8 || m===9){    m="0"+m;    }
    if(s===0 || s===1 ||s===2 || s===3 ||s===4 || s===5 ||s===6 || s===7 ||s===8 || s===9){    s="0"+s;    }
    timeElement.textContent = `${h}:${m}:${s}`;
    s++;
    dateElement.textContent = `${d} ${nam} ${yea}`;
    if(s==60){
        s=0;
        m++;
    }
    if(m==60){
        h++;
        m=0;
    }
    if(h==24){
        h=0;
        nam = month[a.getMonth()];
        d = a.getDate();
        if(a.getMonth() == 11 && d==31){yea++;}
    }
    
    
},1000)