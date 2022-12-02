function sendformular() {
};

$('select').formSelect();

$('#mcancel').click(function (e) { 
    e.preventDefault();
    alert('close');
    $('#FeldName').val('wert after close').addClass('validate');
    M.updateTextfields();
});

$('#msubmit').click(function (e) { 
    e.preventDefault();
    var name = $('FeldName').val();
    alert(name);
});

$('.datepicker').datepicker({
    format: 'dd-mm-yyyy',
    i18n: {
        months: [
            'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
        ],
        monthsShort: [
            'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'
        ],
        weekdays: [
            'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'
        ],
        weekdaysShort: [
            'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'
        ],
        weekdaysAbbrev: [
            'S', 'M', 'D', 'M', 'D', 'F', 'S'
        ],
        cancel: 'Abbrechen',
        clear: 'Löschen',
        done: 'Ok'
    }
  });