
function showDate()
{
let d = new Date();

let hourse  = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let session = "AM";
if(hourse > 12)
{
    hourse = hourse - 12;
}
if(hourse>=12)
{
    session = "PM";
}
hourse = hourse < 10 ? "0"+hourse : hourse;
minutes = minutes < 10 ? "0"+minutes : minutes;
seconds = seconds < 10 ? "0"+seconds : seconds;
let time = hourse + " : " + minutes + " : " + seconds + " : " + session;
document.getElementsByTagName('h1')[0].innerText = time;
setTimeout(showDate,1000);
}