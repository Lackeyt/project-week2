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
    } 
    
    $(".language").text(langRec)
  });
});