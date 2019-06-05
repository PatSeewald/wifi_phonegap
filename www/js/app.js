console.log('JS loaded')



document.addEventListener('deviceready', function () {
    console.log('Device Ready');
    $(document).ready(function () {
        console.log('DOM Ready => Alles Ready...');

        navigator.geolocation.getCurrentPosition(function(coords) {
            $('<div>').html(`${coords.coords.latitude}/${coords.coords.longitude}`).appendTo('body');
        },function() {
            $('<div>').html('Error - No Position').appendTo('body')
        });

    });
});