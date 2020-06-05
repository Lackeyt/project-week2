$(document).ready(function() {
  $("#survey").submit(function(event) {

    event.preventDefault();
    const firstName = $("input#q1").val();
    const lastName = $("input#q2").val();
    const experience = $("#q3").val();
    //const swift = $("#swift").is("checked");
    //const java = $("#java").is("checked");
    //const html = $("#html").is("checked");
    //const python = $("#python").is("checked");
    //const r = $("#r").is("checked");
    //const c = $("#c").is("checked");
    const industry = $("#q5").val();

    return firstName
  });
});