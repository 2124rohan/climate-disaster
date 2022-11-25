var gamescore = 0;

var ant1 = document.getElementById("ant1");
var ant2 = document.getElementById("ant2"); 
var ant3 = document.getElementById("ant3"); 
var ant4 = document.getElementById("ant4"); 
var ant5 = document.getElementById("ant5");
var ant6 = document.getElementById("ant6");
var ant7 = document.getElementById("ant7");
var ant8 = document.getElementById("ant8");
var ant9 = document.getElementById("ant9");
var ant10 = document.getElementById("red-ant1");
var ant11 = document.getElementById("red-ant2");

var portal1 = document.getElementById("portal1"); 
var portal2 = document.getElementById("portal2"); 
var portal3 = document.getElementById("portal3");  
var portal4 = document.getElementById("portal4");  
var portal5 = document.getElementById("portal5"); 
var portal6 = document.getElementById("portal6");
var portal7 = document.getElementById("portal7");
var portal8 = document.getElementById("portal8");
var portal9 = document.getElementById("portal9");
var portal10 = document.getElementById("portal10");
var portal11 = document.getElementById("portal11");

var blood1 = document.getElementById("blood1");
var blood2 = document.getElementById("blood2");
var blood3 = document.getElementById("blood3"); 
var blood4 = document.getElementById("blood4"); 
var blood5 = document.getElementById("blood5");
var blood6 = document.getElementById("blood6");
var blood7 = document.getElementById("blood7");
var blood8 = document.getElementById("blood8");
var blood9 = document.getElementById("blood9");
var blood10 = document.getElementById("blood10");
var blood11 = document.getElementById("blood11");
 var main_portal = document.getElementById("main_portal");

function gameon(){
    main_portal.remove();
}

// function smashed(ant){
//     gamescore = gamescore+10;
//     document.getElementById("score").innerHTML = gamescore;
//     document.getElementById(ant.id).style.visibility="hidden";
    
//     if(ant.id == ant1.id){
//         var portal = document.getElementById("portal1");
//         var blood = document.getElementById("blood1");
//     }
//     else if(ant.id == ant2.id){
//         var portal = document.getElementById("portal2");
//         var blood = document.getElementById("blood1");
//     }
//     else if(ant.id == ant3.id){
//         var portal = document.getElementById("portal3");
//         var blood = document.getElementById("blood1");
//     }
//     else if(ant.id == ant4.id){
//         var portal = document.getElementById("portal4");
//         var blood = document.getElementById("blood1");
//     }
//     else if(ant.id == ant5.id){
//         var portal = document.getElementById("portal5");
//         var blood = document.getElementById("blood1");
//     }

//     blood.style.visibility="visible";
//     blood.style.animation="paused";
//     portal.style.animation="paused";
//     ant.style.animation="paused";

// }


function smashed1(){
    gamescore = gamescore+10;
    ant1.style.visibility="hidden";
    blood1.style.visibility="visible";
    ant1.style.animationPlayState="paused";
    blood1.style.animationPlayState="paused";
    portal1.style.animationPlayState="paused";    
    setTimeout(hide1,2000);
    document.getElementById("score").innerHTML = gamescore;
}

function hide1(){
    blood1.style.visibility="hidden";
    ant1.style.animationPlayState="running";
    blood1.style.animationPlayState="running";
    portal1.style.animationPlayState="running";
    setTimeout(show1,4000);
}

function show1(){ 
    portal1.style.animationPlayState="paused";
    ant1.style.animationPlayState="paused";
    blood1.style.animationPlayState="paused";
    portal1.style.visibility="visible";
    setTimeout(move1,1000);
}

function move1(){
    portal1.style.visibility="hidden";
    ant1.style.visibility="visible"; 
    ant1.style.animationPlayState="running";
    blood1.style.animationPlayState="running";
    portal1.style.animationPlayState="running"; 
}

//-----------------------------------------------------------------------------------------------------------------

function smashed2(){
    gamescore = gamescore+10;
    ant2.style.visibility="hidden";
    blood2.style.visibility="visible";
    ant2.style.animationPlayState="paused";
    blood2.style.animationPlayState="paused";
    portal2.style.animationPlayState="paused";    
    setTimeout(hide2,2000);
    document.getElementById("score").innerHTML = gamescore;
}

function hide2(){
    blood2.style.visibility="hidden";
    ant2.style.animationPlayState="running";
    blood2.style.animationPlayState="running";
    portal2.style.animationPlayState="running";
    setTimeout(show2,4000);
}

function show2(){ 
    portal2.style.animationPlayState="paused";
    ant2.style.animationPlayState="paused";
    blood2.style.animationPlayState="paused";
    portal2.style.visibility="visible";
    setTimeout(move2,1000);
}

function move2(){
    portal2.style.visibility="hidden";
    ant2.style.visibility="visible"; 
    ant2.style.animationPlayState="running";
    blood2.style.animationPlayState="running";
    portal2.style.animationPlayState="running"; 
}



//--------------------------------------------------------------------------------------------------------
function smashed3(){
    gamescore = gamescore+10;
    ant3.style.visibility="hidden";
    blood3.style.visibility="visible";
    ant3.style.animationPlayState="paused";
    blood3.style.animationPlayState="paused";
    portal3.style.animationPlayState="paused";    
    setTimeout(hide3,2000);
    document.getElementById("score").innerHTML = gamescore;
}

function hide3(){
    blood3.style.visibility="hidden";
    ant3.style.animationPlayState="running";
    blood3.style.animationPlayState="running";
    portal3.style.animationPlayState="running";
    setTimeout(show3,4000);
}

function show3(){ 
    portal3.style.animationPlayState="paused";
    ant3.style.animationPlayState="paused";
    blood3.style.animationPlayState="paused";
    portal3.style.visibility="visible";
    setTimeout(move3,2000);
}

function move3(){
    portal3.style.visibility="hidden";
    ant3.style.visibility="visible"; 
    ant3.style.animationPlayState="running";
    blood3.style.animationPlayState="running";
    portal3.style.animationPlayState="running"; 
}

//---------------------------------------------------------------------------------------------------------

function smashed4(){
    gamescore = gamescore+10;
    ant4.style.visibility="hidden";
    blood4.style.visibility="visible";
    ant4.style.animationPlayState="paused";
    blood4.style.animationPlayState="paused";
    portal4.style.animationPlayState="paused";    
    setTimeout(hide4,2000);
    document.getElementById("score").innerHTML = gamescore;
}

function hide4(){
    blood4.style.visibility="hidden";
    ant4.style.animationPlayState="running";
    blood4.style.animationPlayState="running";
    portal4.style.animationPlayState="running";
    setTimeout(show4,4000);
}

function show4(){ 
    portal4.style.animationPlayState="paused";
    ant4.style.animationPlayState="paused";
    blood4.style.animationPlayState="paused";
    portal4.style.visibility="visible";
    setTimeout(move4,2000);
}

function move4(){
    portal4.style.visibility="hidden";
    ant4.style.visibility="visible"; 
    ant4.style.animationPlayState="running";
    blood4.style.animationPlayState="running";
    portal4.style.animationPlayState="running"; 
}


//-----------------------------------------------------------------------------------------

function smashed5(){
    gamescore = gamescore+10;
    ant5.style.visibility="hidden";
    blood5.style.visibility="visible";
    ant5.style.animationPlayState="paused";
    blood5.style.animationPlayState="paused";
    portal5.style.animationPlayState="paused";    
    setTimeout(hide5,2000);
    document.getElementById("score").innerHTML = gamescore;
}

function hide5(){
    blood5.style.visibility="hidden";
    ant5.style.animationPlayState="running";
    blood5.style.animationPlayState="running";
    portal5.style.animationPlayState="running";
    setTimeout(show5,5000);
}

function show5(){ 
    portal5.style.animationPlayState="paused";
    ant5.style.animationPlayState="paused";
    blood5.style.animationPlayState="paused";
    portal5.style.visibility="visible";
    setTimeout(move5,2000);
}

function move5(){
    portal5.style.visibility="hidden";
    ant5.style.visibility="visible"; 
    ant5.style.animationPlayState="running";
    blood5.style.animationPlayState="running";
    portal5.style.animationPlayState="running"; 
}


//-------------------------------------------------------------------------------------------

function smashed6(){
    gamescore = gamescore+10;
    ant6.style.visibility="hidden";
    blood6.style.visibility="visible";
    ant6.style.animationPlayState="paused";
    blood6.style.animationPlayState="paused";
    portal6.style.animationPlayState="paused";    
    setTimeout(hide6,2000);
    document.getElementById("score").innerHTML = gamescore;
}

function hide6(){
    blood6.style.visibility="hidden";
    ant6.style.animationPlayState="running";
    blood6.style.animationPlayState="running";
    portal6.style.animationPlayState="running";
    setTimeout(show6,6000);
}

function show6(){ 
    portal6.style.animationPlayState="paused";
    ant6.style.animationPlayState="paused";
    blood6.style.animationPlayState="paused";
    portal6.style.visibility="visible";
    setTimeout(move6,2000);
}

function move6(){
    portal6.style.visibility="hidden";
    ant6.style.visibility="visible"; 
    ant6.style.animationPlayState="running";
    blood6.style.animationPlayState="running";
    portal6.style.animationPlayState="running"; 
}
//-------------------------------------------------------------------------------------

function smashed7(){
    gamescore = gamescore+10;
    ant7.style.visibility="hidden";
    blood7.style.visibility="visible";
    ant7.style.animationPlayState="paused";
    blood7.style.animationPlayState="paused";
    portal7.style.animationPlayState="paused";    
    setTimeout(hide7,2000);
    document.getElementById("score").innerHTML = gamescore;
}

function hide7(){
    blood7.style.visibility="hidden";
    ant7.style.animationPlayState="running";
    blood7.style.animationPlayState="running";
    portal7.style.animationPlayState="running";
    setTimeout(show7,6000);
}

function show7(){ 
    portal7.style.animationPlayState="paused";
    ant7.style.animationPlayState="paused";
    blood7.style.animationPlayState="paused";
    portal7.style.visibility="visible";
    setTimeout(move7,2000);
}

function move7(){
    portal7.style.visibility="hidden";
    ant7.style.visibility="visible"; 
    ant7.style.animationPlayState="running";
    blood7.style.animationPlayState="running";
    portal7.style.animationPlayState="running"; 
}


//---------------------------------------------------------------------------------------------

function smashed8(){
    gamescore = gamescore+10;
    ant8.style.visibility="hidden";
    blood8.style.visibility="visible";
    ant8.style.animationPlayState="paused";
    blood8.style.animationPlayState="paused";
    portal8.style.animationPlayState="paused";    
    setTimeout(hide8,2000);
    document.getElementById("score").innerHTML = gamescore;
}

function hide8(){
    blood8.style.visibility="hidden";
    ant8.style.animationPlayState="running";
    blood8.style.animationPlayState="running";
    portal8.style.animationPlayState="running";
    setTimeout(show8,6000);
}

function show8(){ 
    portal8.style.animationPlayState="paused";
    ant8.style.animationPlayState="paused";
    blood8.style.animationPlayState="paused";
    portal8.style.visibility="visible";
    setTimeout(move8,2000);
}

function move8(){
    portal8.style.visibility="hidden";
    ant8.style.visibility="visible"; 
    ant8.style.animationPlayState="running";
    blood8.style.animationPlayState="running";
    portal8.style.animationPlayState="running"; 
}

//-----------------------------------------------------------------------------------------------------------------

function smashed9(){
    gamescore = gamescore+10;
    ant9.style.visibility="hidden";
    blood9.style.visibility="visible";
    ant9.style.animationPlayState="paused";
    blood9.style.animationPlayState="paused";
    portal9.style.animationPlayState="paused";    
    setTimeout(hide9,2000);
    document.getElementById("score").innerHTML = gamescore;
}

function hide9(){
    blood9.style.visibility="hidden";
    ant9.style.animationPlayState="running";
    blood9.style.animationPlayState="running";
    portal9.style.animationPlayState="running";
    setTimeout(show9,6000);
}

function show9(){ 
    portal9.style.animationPlayState="paused";
    ant9.style.animationPlayState="paused";
    blood9.style.animationPlayState="paused";
    portal9.style.visibility="visible";
    setTimeout(move9,2000);
}

function move9(){
    portal9.style.visibility="hidden";
    ant9.style.visibility="visible"; 
    ant9.style.animationPlayState="running";
    blood9.style.animationPlayState="running";
    portal9.style.animationPlayState="running"; 
}


//--------------------------------------------------------------------------
function smashed10(){
    gamescore = gamescore+25;
    ant10.style.visibility="hidden";
    blood10.style.visibility="visible";
    ant10.style.animationPlayState="paused";
    blood10.style.animationPlayState="paused";
    portal10.style.animationPlayState="paused";    
    setTimeout(hide10,2000);
    document.getElementById("score").innerHTML = gamescore;
}

function hide10(){
    blood10.style.visibility="hidden";
    ant10.style.animationPlayState="running";
    blood10.style.animationPlayState="running";
    portal10.style.animationPlayState="running";
    setTimeout(show10,6000);
}

function show10(){ 
    portal10.style.animationPlayState="paused";
    ant10.style.animationPlayState="paused";
    blood10.style.animationPlayState="paused";
    portal10.style.visibility="visible";
    setTimeout(move10,2000);
}

function move10(){
    portal10.style.visibility="hidden";
    ant10.style.visibility="visible"; 
    ant10.style.animationPlayState="running";
    blood10.style.animationPlayState="running";
    portal10.style.animationPlayState="running"; 
}

//-----------------------------------------------------------------------------------

function smashed11(){
    gamescore = gamescore+25;
    ant11.style.visibility="hidden";
    blood11.style.visibility="visible";
    ant11.style.animationPlayState="paused";
    blood11.style.animationPlayState="paused";
    portal11.style.animationPlayState="paused";    
    setTimeout(hide11,2000);
    document.getElementById("score").innerHTML = gamescore;
}

function hide11(){
    blood11.style.visibility="hidden";
    ant11.style.animationPlayState="running";
    blood11.style.animationPlayState="running";
    portal11.style.animationPlayState="running";
    setTimeout(show11,6000);
}

function show11(){ 
    portal11.style.animationPlayState="paused";
    ant11.style.animationPlayState="paused";
    blood11.style.animationPlayState="paused";
    portal11.style.visibility="visible";
    setTimeout(move11,2000);
}

function move11(){
    portal11.style.visibility="hidden";
    ant11.style.visibility="visible"; 
    ant11.style.animationPlayState="running";
    blood11.style.animationPlayState="running";
    portal11.style.animationPlayState="running"; 
}

//----------------------------------------------------------------------------

// var disappear = [ant1,ant2,ant3,ant4,ant5,ant6,ant7,ant8,ant9,ant10,ant11];

function game_over(){
    document.getElementById("game-area").style.visibility="hidden";
    document.getElementById("game-over").style.visibility="visible";
    document.getElementById("your_score").innerHTML="Your Score was  " +gamescore;

    // disappear.remove();

    ant1.remove();
    blood1.remove();
    portal1.remove();

    ant2.remove();
    portal2.remove();
    blood2.remove();

    ant3.remove();
    portal3.remove();
    blood3.remove();

    ant4.remove();
    portal4.remove();
    blood4.remove();

    ant5.remove();
    portal5.remove();
    blood5.remove();

    ant6.remove();
    portal6.remove();
    blood6.remove();

    ant7.remove();
    portal7.remove();
    blood7.remove();

    ant8.remove();
    portal8.remove();
    blood8.remove();

    ant9.remove();
    portal9.remove();
    blood9.remove();
  
    ant10.remove();
    portal10.remove();
    blood10.remove();

    ant11.remove();
    portal11.remove();
    blood11.remove();

}