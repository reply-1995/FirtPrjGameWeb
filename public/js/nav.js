// function showDropdown(id) {
//     $(id).removeClass("display-none");
// }
// function hideDropdown(id) {
//     $(id).addClass("display-none");
// }
// //
// function closeButton(id) {
//     $(id).addClass("display-none");
// }

var target;
            
// $("nav ul li").on("mouseover", function( obj ){
//     target = obj.currentTarget;
//     console.log( target );
    
//     $('nav ul div').removeClass("hidden");
// });

// $("nav ul li").on("mouseleave", function( obj ){
//     target = obj.currentTarget;
//     console.log( target );
    
//     $('nav ul div').addClass("hidden");
// });


//->>
// $(".nav_ul").on("mouseover", function(obj){
//     target = obj.currentTarget;
//     console.log(target);

//     $('nav ul div').removeClass("hidden");
// });

// $(".nav_ul").on("mouseleave", function(obj){
//     target = obj.currentTarget;
//     console.log(target);

//     $('nav ul div').addClass("hidden");
// });




$(".container5").on("mouseover", function(obj){
    target = obj.currentTarget;
    console.log(target);

    $('nav ul div').removeClass("hidden");
});

$(".container5").on("mouseleave", function(obj){
    target = obj.currentTarget;
    console.log(target);

    $('nav ul div').addClass("hidden");
});