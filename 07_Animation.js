
//------------------------------------2_ManuplatingStyles------------------------



//------------------------------------3_ManuplatingText------------------------


$("h1").text("Bye");


//------------------------------------4_ManuplatingAttributes------------------------

//Getting the value 
$("img").attr("src");



//Setting the Address of google to Yahoo


$("a").attr("href", "https://www.yahoo.com")



//------------------------------------5_AddingEventListener------------------------





//-------------------------Adding and Removing elements with jQuery ------------





//---------------------------------Animation---------------------------


hide 

$("button").on("click", function(){

    $("h1").hide();


});




//hide 

$("button").on("click", function(){

    $("h1").show();


});



//toggle

$("button").on("click", function(){

    $("h1").toggle();


})

//fadeout 

$("button").on("click", function(){

    $("h1").fadeOut();


})

//fadeIn 

$("button").on("click", function(){

    $("h1").fadeIn();


})


////fadeToggle 

$("button").on("click", function(){

    $("h1").fadeToggle();


})


// ////slideUp 

$("button").on("click", function(){

    $("h1").slideUp();


})

////slideDown 

$("button").on("click", function(){

    $("h1").slideDown();


})



////slideToggle 

$("button").on("click", function(){

    $("h1").slideToggle();


});






