function getTime(){

    let timesNow = new Date()

    let hours = timesNow.getHours()
    let minutes = timesNow.getMinutes()
    let seconds = timesNow.getSeconds()

    
    if(hours > 12){
        hours = hours - 12
        document.querySelector('#session').innerText = 'PM'
    }else{
        document.querySelector('#session').innerText = 'AM'
    }


    

    if(hours < 10){
        hours = '0' + hours
    } else if (minutes < 10){
        minutes = '0' + minutes
    } else if (seconds < 10){
        seconds = '0' + seconds
    }

    document.querySelector('#hour').innerText = hours;
    document.querySelector('#minute').innerText = minutes;
    document.querySelector('#second').innerText = seconds;
    
}

setInterval(getTime, 1000)

// setInterval(function(){
//     getTime()
// }, 1000)

