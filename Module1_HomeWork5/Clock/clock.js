//console.log(Date.now());

function clock(){
let now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds();

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    
    document.getElementById('txt').innerHTML = hours+":"+minutes+":"+seconds;
    timeout = setTimeout('clock()', 1000);
    console.clear();
    console.log(hours + ":" + minutes + ":" + seconds);    
};

function checkTime(i){
        if (i<10){ i="0" + i;}
        return i;
    }

clock();