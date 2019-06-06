$(document).ready(function(){
console.log("Jquery is working!");





$("#ageSubmit").click(function(event){
  event.preventDefault();
  // this doesn't need parseInt because it reads the integer not a string, eg 5 not "5"
  var age = $("#ageInput").val();
  console.log(age);

  if (age >=18) {
    $(".over-18").show();
    //this hides the age gate div
    $(".age-gate").hide();
    console.log("Showed page content");
  } else if (age < 18){
    $(".under-18").show();
    //this hides the age gate div
    $(".age-gate").hide();
    console.log("Showed page content");
  } else {
    // in case there is no age entered
    console.log("Enter your age");
  }

});






// if ($("#over18").click()) {
//     console.log("#over18 has been clicked");
//     $(".over-18").show();
//   } else {
//     $(".under-18").show();
//   };




});
