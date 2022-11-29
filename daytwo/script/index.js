/* Modal Generienern*/ 

$(document).ready(function(){
    $('.modal').modal();
  });

// Modal anpassen
$('#addcar').click(function (e) {
  e.preventDefault();
  $('#Modaltitle').html('Neues Auto Erfassen');
  $('#mfsubmit').html('Hinzufügen');
  $('#Modalcontent').load("/daytwo/forms/form.html");
});

$('.editcar').click(function (e) {
  e.preventDefault();
  $('#Modaltitle').html('Auto Editieren');
  $('#mfsubmit').html('Speichern');
  $('#Modalcontent').load("/daytwo/forms/form.html", function() {
  $.getScript("/daytwo/forms/form.js")});
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