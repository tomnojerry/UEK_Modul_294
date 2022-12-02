/* Modal Generienern*/ 
$(document).ready(function(){
    $('.modal').modal();
  });

//Modal anpassen
$('#addcar').click(function (e) {
  e.preventDefault();
  $('#Modaltitle').html('Neues Auto Erfassen');
  $('#Modalcontent').load("/daytwo/forms/form.html", function() {
  $.getScript("/daytwo/forms/form.js")});
  $('#msubmit').html('Hinzufügen');
});

$('.editcar').click(function (e) {
  e.preventDefault();
  $('#Modaltitle').html('Auto Editieren');
  $('#Modalcontent').load("/daytwo/forms/form.html", function() {
  $.getScript("/daytwo/forms/form.js")});
  $('#msubmit').html('Speichern');
});


$('.deletecar').click(function (e) {
  e.preventDefault();
  var dialog = confirm('Auto Löschen');
  if (dialog) {
    console.log('Ja')
  }
  else {
    console.log('Nein')
  }
});

