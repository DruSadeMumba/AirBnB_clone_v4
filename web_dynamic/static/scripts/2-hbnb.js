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

  $.getJSON('http://0.0.0.0:5001/api/v1/status/', (data) => {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
