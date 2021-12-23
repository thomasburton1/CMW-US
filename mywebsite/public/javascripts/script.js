/*$('#company-link').click(function () {
    $()

    $('html, body').animate({
        scrollTop: $('#company-section').offset().top
    }, 2000);
});

$('#team-link').click(function () {
    $('html, body').animate({
        scrollTop: $('#team-section').offset().top
    }, 2000);
});

$('#partners-link').click(function () {
    $('html, body').animate({
        scrollTop: $('#partners-section').offset().top
    }, 2000);
});*/

function initMap() {
    const cmw = {
        lat: 37.448522147157746, lng: -121.92017940721435
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: cmw
    });

    const marker = new google.maps.Marker({
        position: cmw,
        map: map
    });
}