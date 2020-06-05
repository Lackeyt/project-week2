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
    let rq1v = true
    let rq2v = true
    let rq3v = true
    let rq5v = true

    if (firstName === "") {
      rq1v = false
    }

    if (lastName === "") {
      rq2v = false
    }

    if (experience === null) {
      rq3v = false
    }

    if (industry === "iOS") {
      if (swift) {
        langRec = "continuing with Swift"
        why = "because it's the primary language of iOS development"
      } else {
      langRec = "Swift"
      why = "because it's the primary language of iOS development"
      }
    } else if (industry === "android") {
      if (koltin === "1" && java === "1"){
        langRec = "more Java or Koltin"
        why = "because they're the primary languages in Android development"
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
    } else {
      rq5v = false
    };
    
    if (rq1v === false || rq2v === false || rq3v === false || rq5v === false) {
      if (rq1v === false) {
        $("li.rq1").show()
        $("input#q1").addClass("emptyForm")
      } else {
        $("li.rq1").hide()
        $("input#q1").removeClass("emptyForm")
      }
      if (rq2v === false) {
        $("li.rq2").show()
        $("input#q2").addClass("emptyForm")
      } else {
        $("li.rq2").hide()
        $("input#q2").removeClass("emptyForm")
      }
      if (rq3v === false) {
        $("li.rq3").show()
      } else {
        $("li.rq3").hide()
      }
      if (rq5v === false) {
        $("li.rq5").show()
      } else {
        $("li.rq5").hide()
      }
    } else {
      $(".output").show()
      $(".name").text(fullName);
      $(".language").text(langRec);
      $(".why").text(why);
      $("li.rq5").hide()
      $("li.rq3").hide()
      $("li.rq2").hide()
      $("input#q2").removeClass("emptyForm")
      $("li.rq1").hide()
      $("input#q1").removeClass("emptyForm")
    }
  });
});