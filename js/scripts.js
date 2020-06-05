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
      if (java === "1" && koltin === false){
        langRec = "Koltin"
      } else if (koltin === true && java === false) {
        langRec = "Java"
      } else if (koltin === false && java === false) {
        langRec = "Java or Koltin"
      } else if (koltin === true && java === true) {
        langRec = "More Java or Koltin"
      };
    } 
    
    $(".language").text(langRec)
  });
});