$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const toenaillength= parseInt($("input#toenail-length").val());
    const haircolor= parseInt($("#hair-color").val());
    const time= $("input:radio[name=time]:checked").val();

    if (haircolor === 1) {
      $('#Danny').show();
    } else if (haircolor === 2) {
      $('#G').show(); 
    } else if (haircolor === 3) {
      $('#Helen').show(); 
    } else if (haircolor === 4) {
      $('#Bernie').show();
    } else { 
      console.log(haircolor)
      $('#Flav').show(); 
    }
    event.preventDefault()
  });
});