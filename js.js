var a1 = "hover over an image below";
document.getElementById("div1").innerHTML = a1;

var a2="dog";
document.getElementById("d1").innerHTML = a2;

var a3 ="cat";
document.getElementById("d2").innerHTML = a3;

var a4 ="fish";
document.getElementById("d3").innerHTML = a4;


function touchMe1(){
    document.getElementById("div1").innerHTML= a2;
    document.getElementById("div1").style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8gLp_wq8xBmTF1GCdSsEZGuygAmeuV0OTjQ&s')";
}

function leave1(){
    document.getElementById("div1").innerHTML= a1;
    document.getElementById("div1").style.backgroundImage="none";
}

function touchMe2(){
    document.getElementById("div1").innerHTML= a3;
    document.getElementById("div1").style.backgroundImage="url('https://thegioipetcanh.com/wp-content/uploads/2023/08/meo-long-ngan-tai-cup-1.jpg')";
}

function leave2(){
    document.getElementById("div1").innerHTML= a1;
    document.getElementById("div1").style.backgroundImage="none";
}

function touchMe3(){
    document.getElementById("div1").innerHTML= a4;
    document.getElementById("div1").style.backgroundImage="url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Pacific_double-saddle_butterflyfish_%28Chaetodon_ulietensis%29_and_other_Chaetodon_Moorea.jpg/1200px-Pacific_double-saddle_butterflyfish_%28Chaetodon_ulietensis%29_and_other_Chaetodon_Moorea.jpg')";
}

function leave3(){
    document.getElementById("div1").innerHTML= a1;
    document.getElementById("div1").style.backgroundImage="none";
}

