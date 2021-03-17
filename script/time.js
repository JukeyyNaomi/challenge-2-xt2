
// time set

function startTime() {
    var today = new Date();
    var h = today.getHours(); // today.getUTCHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var u = today.getUTCHours(); // today.getUTCHours();
    var a = today.getHours(); //amerika
    var j = today.getUTCHours();
    var mars = today.getHours();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s + ' ' + 'GMT';
    document.getElementById('txt2').innerHTML =
     u + ":" + m + ":" + s + ' UTC';
     
     mars = mars + 1;
     if (mars > 23){
        mars = mars - 24;
     }
     
     document.getElementById('txt3').innerHTML =
     mars + ":" + m + ":" + s + ' ' + 'Mars'; 
    
    a = a - 6;
    if (a < 0){
        a = a + 24;
    }
    
    document.getElementById('txt4').innerHTML =
     a + ":" + m + ":" + s + ' CST';
    
    
    j = j + 9;
    if (j > 23) {
        j = j - 24;
    }
    
    document.getElementById('txt5').innerHTML =
     j + ":" + m + ":" + s + ' JST';
    
    var t = setTimeout(startTime, 500);
}


function checkTime(i) {
    if (i < 10) {i = "0" + i};// add zero in front of numbers < 10
    return i;
}


// data set


function loadData(){
    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth() + 1;
    var d = today.getDate();
    document.getElementById('currentDate').innerHTML = 
    "Date: " + m + "-" + d + "-" + y + '  UTC';
}

function startFunctions() {
    startTime();
    loadData();
}




// switching css stylesheet 


function switchStylesheet(sheet) {
   document.getElementById('stylesheet').setAttribute('href', sheet);
}


function getStylesheet() {
  var currentTime = new Date().getHours();
  console.log(currentTime);
  if (0 <= currentTime&&currentTime < 5) { //nighttime
     switchStylesheet('night.css');
 }
 else if (5 <= currentTime&&currentTime < 11) { //morning
     switchStylesheet('morning.css');
 }
 else if (11 <= currentTime&&currentTime < 16) { //daytime
     switchStylesheet('day.css');
 }
 else if (16 <= currentTime&&currentTime < 22) { //evening
  switchStylesheet('evening.css');
}
else if (22 <= currentTime&&currentTime <= 23) { //nighttime
    switchStylesheet('night.css');
}
}

getStylesheet();
setInterval(getStylesheet, 1000);






// DATUM BACKGROUND SWITCH



function seasonSwitch() {
    var season = new Date();
    var m = season.getMonth() + 1;
    var d = season.getDate();
    
    if ((m == 1 && m == 2) || (d >= 21 && m == 12) || (d < 21 && m == 3) ) { 
        document.getElementById('seasonChange').classList.add('winter');
        document.getElementById('seasonChange').classList.remove('autumn');
        document.getElementById('seasonName').innerHTML = "Winter";
    } 
    
    else if ( (m == 4 && m == 5) || (d >= 21 && m == 3) || (d < 21 && m == 6) ) { 
        document.getElementById('seasonChange').classList.add('spring');
        document.getElementById('seasonChange').classList.remove('winter');
        document.getElementById('seasonName').innerHTML = "Spring";
    }
    
    else if ((m == 7 && m == 8) || (d >= 21 && m == 6) || (d < 21 && m == 9)) { 
        document.getElementById('seasonChange').classList.add('summer');
        document.getElementById('seasonChange').classList.remove('spring');
        document.getElementById('seasonName').innerHTML = "Summer";
    }
    
    else if ((m == 10 && m == 11) || (d >= 21 && m == 9)|| (d < 21 && m == 12) ) { 
        document.getElementById('seasonChange').classList.add('autumn');
        document.getElementById('seasonChange').classList.remove('summer');
        document.getElementById('seasonName').innerHTML = "Autumn";
    }

}

seasonSwitch();
setInterval(seasonSwitch, 100000);


















// function callForStylesheet() {
//     var currentTime = new Date().getHours();
//     var currentMin = new Date().getMinutes();
//     var currentSec = new Date().getSeconds();
//     console.log(currentTime);
//     if (currentTime == 5 && currentMin == 00 && currentSec == 0){ document.location.reload(true); }
//     else if (currentTime == 11 && currentMin == 0 && currentSec == 00) { document.location.reload(true); }
//     else if (currentTime == 16 && currentMin == 0 && currentSec == 00) { document.location.reload(true);}
//     else if (currentTime == 22 && currentMin == 0 && currentSec == 00) { document.location.reload(true); }
// }
// 
// callForStylesheet();

// setInterval(callForStylesheet, 1000);



// interval?





// function dataSet() {
//     var currentDate = new Date().getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//     console.log(currentDate);
//     document.getElementById('currentDate').innerHTML =
//     currentDate;
//     
// }
// 
// dataSet();






// function switchStylesheet(sheet) {
//     document.getElementById('stylesheet').setAttribute('href', sheet);
// }
// 
//     var d = new Date();
//     var currHour = d.getHours();
//         if (currHour >= 9 && currHour <= 12) {
//        switchStylesheet('../night.css');
// //     document.body.style.backgroundColor = "green";
//         }       
//         else if (currHour > 12 && currHour < 17) {
// //       alert('its working');
//          switchStylesheet('../day.css');
// //  document.write("<link rel='stylesheet' href='day.css' type='text/css'>");
//         }       
//         else if (currHour > 17 && currHour < 9) {
//         switchStylesheet('../evening.css');
// //     document.body.style.backgroundColor = "blue";
//         }








// function morningRoutine(m) {
//     if (m < 12) {
//         
//     }
// }


// 
// function changeDay() {
//     var morning = today.getHours();
//     if (morning < 12){
//         document.getElementById('txt').style.Color = 'blue';
//         
//     }
//     else {}
// }
// 





//   function getStylesheet() {
//       var currentTime = new Date().getHours();
//       
//       if (0 <= currentTime && currentTime < 5) {
//        document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
//       }
//       
//       if (5 <= currentTime && currentTime < 11) {
//        document.write("<link rel='stylesheet' href='morning.css' type='text/css'>");
//       }
//       
//       if (11 <= currentTime && currentTime < 16) {
//         alert('its working');
//        document.write("<link rel='stylesheet' href='day.css' type='text/css'>");
//        <!--document.body.style.backgroundColor = "green";-->
//       }
//       
//       if (16 <= currentTime && currentTime < 22) {
//        document.write("<link rel='stylesheet' href='evening.css' type='text/css'>");
//       }
//       
//       if (22 <= currentTime && currentTime <= 24) {
//        document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
//       }
//     } window.onload = getStylesheet();

