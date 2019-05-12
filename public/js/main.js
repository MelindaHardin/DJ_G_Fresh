//home slides
$( document ).ready(function() {
    console.log( "go!" );


});

//modal
$('#testimonialSubmitted').click(function(event){
    alert("Thank you for your submission")
    event.preventDevault();
    $('.modal').modal('hide');
    return false;
});