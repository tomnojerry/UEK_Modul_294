/* Modal Generienern*/ 

$(document).ready(function(){
    $('.modal').modal();
  });

/* Modal anpassen */
$('#addcar').click(function (e) {
  e.preventDefault();
  $('#Modaltitle').html('Neues Auto Erfassen');
});

$('#editcar').click(function (e) {
  e.preventDefault();
  $('#Modaltitle').html('Auto Editieren');
});

$('#deletecar').click(function (e) {
  e.preventDefault();
  var dialog = confirm("Auto Löschen");
  if (dialog) {
    console.log('Ja')
  }
  else {
    console.log('Nein')
  }
});


