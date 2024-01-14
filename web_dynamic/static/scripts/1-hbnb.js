$(document).ready(() => {
    const selectedAmenities = {};
    $('input[type="checkbox"]').change(function () {
        const amenityId = $(this).data('id');
        const amenityName = $(this).data('name');
        if ($(this).is(':checked')) {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }
        updateAmenitiesList();
    });
    const updateAmenitiesList = () => {
        const amenitiesList = Object.values(selectedAmenities).join(', ');
        $('.popover h4').text(amenitiesList);
    };
});
