// Variabler skapta för att göra Arrayer 
let subSave = [];
let save  = [];


//Variabler för att nå Html Element
let Res1 = $("#Res1");

let Next = $("#Next");


//Variabler
let sum = 0;
let sum1 = 0;
let slut = 0


// Detta är tillhör formuläret, ska ej uppdatera sidan så vi kan behålla värden. 
$("#Stay").on("submit", function(){
    return false;
})






/*En knapp med funktion att spara värden i array skriva ut i DOM 
nollställa värden för nästa beräkning*/

const Sub1 = document.getElementById("Sub1");
Sub1.addEventListener("click", pushCurrent)

function pushCurrent(){
   Res1.empty();
    let B1 = $("#Box1").val();

 sum = 0;
 slut = 0;
 
 save.push (B1);
 
 if(save.length == 1 && subSave.length == 0) {
    Next.append(B1)
   } 
   else{
    Next.append("+" + B1);
 } 

 
 $("#Box1").val("");
 return false ;

};




/*En knapp med funktion att spara värden i array skriva ut i DOM 
nollställa värden för nästa beräkning*/

const subtract = document.getElementById("Subtract");
subtract.addEventListener("click", Minus)

function Minus() {
 Res1.empty();
 let B1 = $("#Box1").val(); 

 sum1 = 0;
 slut = 0;
 
 subSave.push (B1);

 Next.append("-" + B1);


 $("#Box1").val("");
 return false ;
 
}; 





/*En knapp som beräknar de som finns i Arrayerna, skriva ut i DOM 
nollställa värden för nästa beräkning*/
const Equal = document.getElementById("Equal");

Equal.addEventListener("click",Result)

function Result(){
    
    Next.empty();

    
   
    for  (let i = 0; i < save.length; i++){
      sum += parseFloat( save[i])
      };

    
      for  (let i = 0; i < subSave.length; i++){
         sum1 += parseFloat( subSave[i])
         };
    
     
     
      slut = sum - sum1;
      Res1.append(slut);
      save = [];
      subSave = [];
   };
