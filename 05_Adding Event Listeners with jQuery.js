
//Previously humko buhat kuch karna parr raha tha agr sare buttons paar Event lagana hai like below code 

// let numberOfDrumButtons = document.querySelectorAll(".drum").length; // no of buttons 



for (let i=0; i<numberOfDrumButtons; i++)
{

       //Detecting Button Click 
      
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){

      
        let buttonInnerHTML = this.innerHTML;
        });

}



//Abb jQuery k sath dekho maza------------------------------

$("button").click(function(){

    $("h1").css("color", "purple");



});




///Adding Key Press event with jQuery 


$("input").keypress(function(event){

    console.log(event.key);


});


//If you want to add the keyboard listener event to full document 


$(document).keypress(function(event){

    console.log(event.key);


});

//Challenge:- key press karen toh h1 change hojai 


$(document).keypress( function(event){

    $("h1").text(event.key)


});