$(document).ready(function() {
  $("#survey").submit(function(event) {

    event.preventDefault();
    const firstName = $("input#q1").val();
    const lastName = $("input#q2").val();
    const experience = $("#q3").val();
    const swift = $("input#swift:checked").val();
    const java = $("input#java:checked").val();
    const koltin = $("input#koltin:checked").val();
    const html = $("input#html:checked").val();
    const python = $("input#python:checked").val();
    const r = $("input#r:checked").val();
    const c = $("input#c:checked").val();
    const industry = $("#q5").val();

    let langRec
    let why
    const fullName = firstName + " " + lastName + ","

    if (industry === "iOS") {
      langRec = "Swift"
    } else if (industry === "android") {
      if (koltin === "1" && java === "1"){
        langRec = "More Java or Koltin"
      } else if (koltin === "1") {
        langRec = "Java"
      } else if (java === "1") {
        langRec = "Koltin"
      } else {
        langRec = "Jave or Koltin"
      };
    } else if (industry === "websites") {
      langRec = "HTML, CSS, and JavaScript"
    } else if (industry === "data") {
      langRec = "Python"
    } else if (industry === "engi") {
      langRec = "R"
    } else if (industry === "sci") {
      langRec = "MATLAB"
    } else if (industry === "gameDev") {
      langRec = "C++ or C#"
    } else if (industry === "other") {
        langRec = "Python";
        why = " because it is forgiving and one of the fastest growing languages";
    };
    
    $(".name").text(fullName);
    $(".language").text(langRec);
    $(".why").text(why);
  });
});