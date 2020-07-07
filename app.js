




var mins = 0
var secs = 0
var msec = 0
var fmins = document.getElementById("min")
var fsecs = document.getElementById("sec")
var fmsecs = document.getElementById("msec")
var interval;

function time(){
    msec++
    fmsecs.innerHTML = msec

    if(msec >= 100){
        secs++
        fsecs.innerHTML = secs
        msec = 0
    }
    else if(secs >= 60){
        mins++
        fmins.innerHTML = mins
        secs = 0
    }
}
function start(){
    if(!interval){
        interval = setInterval(time,10)
    }
}
function stop(){
    clearInterval(interval)
    interval = false
}
function reset(){
    mins = 0
    secs = 0
    msec = 0
    fmins.innerHTML = 0
    fsecs.innerHTML = 0
    fmsecs.innerHTML = 0
    stop()
}
function restart(){
    mins = 0
    secs = 0
    msec = 0
    fmins.innerHTML = 0
    fsecs.innerHTML = 0
    fmsecs.innerHTML = 0
}
