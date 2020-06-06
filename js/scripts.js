$(document).ready(function() {
  $("#survey").submit(function(event) {

    event.preventDefault();
    const firstName = $("input#q1").val();
    const lastName = $("input#q2").val();
    const fullName = firstName + " " + lastName + ","
    const experience = $("#q3").val();
    const swift = $("input#swift:checked").val();
    const java = $("input#java:checked").val();
    const kotlin = $("input#kotlin:checked").val();
    const html = $("input#html:checked").val();
    const python = $("input#python:checked").val();
    const r = $("input#r:checked").val();
    const c = $("input#c:checked").val();
    const industry = $("#q5").val();

    // check for blank fields - line 91-93 should be moved here and wrapped in a function
    let rq1v = true
    let rq2v = true
    let rq3v = true
    let rq5v = true

    function requiredFieldsValid(firstName, lastName, experience, industry) {
      if (firstName === "") return false
      if (lastName === "") return false
      if (experience === null) return false
      if (industry === null) return false
      return true
    }

    //Industry + known Coding languages logic - Known coding languages should be handled by an array. There must a better way to refactor this into something more concise
    let langRec
    let why

    if (industry === "iOS") {
      if (swift) {
        langRec = "continuing with Swift";
        why = " because it's the primary language of iOS development";
      } else {
      langRec = "Swift";
      why = " because it's the primary language of iOS development";
      };
    } else if (industry === "android") {
      if (kotlin === "1" && java === "1"){
        langRec = "more Java or Kotlin";
        why = " because they're the primary languages in Android development";
      } else if (kotlin === "1") {
        langRec = "Java";
        why = " because it pairs well with your Kotlin experience";
      } else if (java === "1") {
        langRec = "Kotlin";
        why = " because it pairs well with your Java experience";
      } else {
        langRec = "Java or Kotlin";
        why = " because they're the primary languages in Android development";
      };
    } else if (industry === "websites") {
      if (html === "1"){
        langRec = "continuing with JavaScript";
      } else {
        langRec = "HTML, CSS, and JavaScript";
      };
    } else if (industry === "data") {
      if (python === "1") {
        langRec = "R or MATLAB";
      } else {
        langRec = "Python";
      };
    } else if (industry === "engi") {
      if (r === "1") {
        langRec = "Python or MATLAB";
      } else {
        langRec = "R";
      };
    } else if (industry === "sci") {
        langRec = "MATLAB";
    } else if (industry === "gameDev") {
      if (c === "1") {
        langRec = "continuing with C++ or C#";
      } else {
        langRec = "C++ or C#";
      };
    } else if (industry === "other") {
        langRec = "Python";
        why = " because it is forgiving and one of the fastest growing languages";
    };
    
    //error output - needs to be broken away from validated output. Needs to be housed in it own error function and moved to blank field validation area
    if (!requiredFieldsValid(firstName, lastName, experience, industry)) { //If any forms 
      if (firstName === "") {
        $("li.rq1").show();
        $("input#q1").addClass("emptyForm");
        $("#slider").removeClass("open");
      } else {
        $("li.rq1").hide();
        $("input#q1").removeClass("emptyForm");
        $("#slider").removeClass("open");
      };
      if (lastName === "") {
        $("li.rq2").show();
        $("input#q2").addClass("emptyForm");
        $("#slider").removeClass("open");
      } else {
        $("li.rq2").hide();
        $("input#q2").removeClass("emptyForm");
        $("#slider").removeClass("open");
      };
      if (experience === null) {
        $("li.rq3").show();
        $("#slider").removeClass("open");
      } else {
        $("li.rq3").hide();
        $("#slider").removeClass("open");
      };
      if (industry === null) {
        $("li.rq5").show();
        $("#slider").removeClass("open");
      } else {
        $("li.rq5").hide();
        $("#slider").removeClass("open");
      }; 
    } else {  // validated output - needs to be a separate function that calls error/validation functions.
      $(".output").show();
      $(".name").text(fullName);
      $(".language").text(langRec);
      $(".why").text(why);
      $("li.rq5").hide();
      $("li.rq3").hide();
      $("li.rq2").hide();
      $("input#q2").removeClass("emptyForm");
      $("li.rq1").hide();
      $("input#q1").removeClass("emptyForm");
      $("#slider").addClass("open");
    };
  });

  // Simple "clear form" or start over button logic available on the output
  $("#reload").click(function() {
    location.reload();
  });
});