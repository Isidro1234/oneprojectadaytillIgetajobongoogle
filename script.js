var timer = 0;
var hours = 0;
var minutes = 0;
var add = "0";
var seconds = setInterval(function(){
    timer += 1;
    if(timer === 60){
        timer *= 0;
        minutes++;
        $('.minutes').html(styleZero(minutes) + minutes);
    }if(minutes === 60){
        hours+= 1
        $('.hours').html(styleZero(minutes) + hours); 
    }
    $('.seconds').html(styleZero(timer) + timer);
},1000);
function styleZero(a){
    if (a < 10){
        return add = "0";
    }else{
        return add = "";
}
}