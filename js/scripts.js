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

    // Verifies that required fields have been entered - Trying guard clauses for readability
    function requiredFieldsValid(firstName, lastName, experience, industry) {
      if (firstName === "") return false
      if (lastName === "") return false
      if (experience === null) return false
      if (industry === null) return false
      return true
    }

    // Error output handling - Could be refactored with array/looping to remove the need to custom IDs for each 
    function errorOutput(firstName, lastName, experience, industry) { 
      if (firstName === "") {
        $("#q1").siblings("li.rq").show();
        $("#q1").addClass("emptyForm");
      } else {
        $("#q1").siblings("li.rq").hide();
        $("#q1").removeClass("emptyForm");
      };
      if (lastName === "") {
        $("#q2").siblings("li.rq").show();
        $("#q2").addClass("emptyForm");
      } else {
        $("#q2").siblings("li.rq").hide();
        $("#q2").removeClass("emptyForm");
      };
      if (experience === null) {
        $("#q3").siblings("li.rq").show();
      } else {
        $("#q3").siblings("li.rq").hide();
      };
      if (industry === null) {
        $("#q5").siblings("li.rq").show();
      } else {
        $("#q5").siblings("li.rq").hide();
      };
      $("#slider").removeClass("open");
    } 

    // Output logic - Multi-select should be handled by an array. There must a better way to refactor this into something more concise
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
        why = ""
      } else {
        langRec = "HTML, CSS, and JavaScript";
        why = ""
      };
    } else if (industry === "data") {
      if (python === "1") {
        langRec = "R or MATLAB";
        why = ""
      } else {
        langRec = "Python";
        why = ""
      };
    } else if (industry === "engi") {
      if (r === "1") {
        langRec = "Python or MATLAB";
        why = ""
      } else {
        langRec = "R";
        why = ""
      };
    } else if (industry === "sci") {
        langRec = "MATLAB";
        why = ""
    } else if (industry === "gameDev") {
      if (c === "1") {
        langRec = "continuing with C++ or C#";
        why = ""
      } else {
        langRec = "C++ or C#";
        why = ""
      };
    } else if (industry === "other") {
        langRec = "Python";
        why = " because it is forgiving and one of the fastest growing languages";
    };

    // Output
    if (requiredFieldsValid(firstName, lastName, experience, industry)) {  
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
    } else { //possibly redundant?
      errorOutput(firstName, lastName, experience, industry);
    };
  });

  // Simple "clear form" or start over button logic available on the output
  $("#reload").click(function() {
    location.reload();
  });
});