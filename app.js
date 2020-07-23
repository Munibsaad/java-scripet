// function pro (){
//     var pro = alert("Thanks you for shopping here")
// }


// function del(){
//     document.getElementById("table").deleteRow(0);
// }



function del() {
  document.getElementById("myTable").deleteRow(0);
}


//  var first= prompt("Enter your first name")

//  var second =  prompt("Enter your second name")
 
//  var merg = document.write(first+second)


// var name =prompt("Enter your name")
// var length = name.length
// var abx =alert("length of a string ="+length)


// var name = "Munib Saad"
// console.log(name.indexOf("d"))

// var rep = "hello islamabad  i'm comminbg"
// alert(rep.replace("comminbg","comming back"))


// var cap = prompt("enter your name")
// var caps = (cap.toUpperCase());
// alert(caps)





























var min = 0;
var sec = 0;
var msec =0;
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")
var lapcontainer= document.querySelector('.lap')

function timer(){
    msec++
    msecHeading.innerHTML=msec
    if(msec >=100){
        sec++
        secHeading.innerHTML=sec
        msec = 0
    }else if (sec>=60){
        min++
        minHeading.innerHTML=min
        sec = 0
    }
}
function start() {
    interval = setInterval(timer,10)

}
function stop() {
    clearInterval(interval)
}
function reset() {
    min = 0;
    sec=0;
    msec=0;
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=msec;
    stop()
}
// function CurrentTime(){

//     return(min<10 ? "0" + min:min)+":"+ (sec<10 ? "0" + sec:sec)+":"+(msec<10 ? "0" + msec:msec);
// }
// function lap(){
//     if(timer){
//         var li = document.createElement('li')
//     li.innerText=CurrentTime();
//     lapcontainer.appendChild(li)
//     }
    
    
// }
