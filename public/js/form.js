$(document).on('click', '.dropdown-item', function(event) {
    event.preventDefault();
    
    if ($(this).attr('href').toLowerCase() === 'add-picture') {
        $('#picture-form').show();
    }
});

$(document).on('submit', '#search-form', function(event) {
    
})