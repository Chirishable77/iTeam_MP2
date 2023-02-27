$(document).ready(function() {
  $('#submit-btn').click(function() {
    var origin = $('#origin').val();
    var destination = $('#destination').val();
    var pickupDate = $('#pickup-date').val();
    var deliveryDate = $('#delivery-date').val();
    var addressLine1 = $('#address-line-1').val();
    var addressLine2 = $('#address-line-2').val();
    var city = $('#city').val();
    var state = $('#state').val();
    var zip = $('#zip').val();
    
    var cost = 0;
    if (origin === 'Manila' && destination === 'Cebu') {
      cost = 5000;
    } else if (origin === 'Manila' && destination === 'Gensan') {
      cost = 10000;
    } else if (origin === 'Cebu' && destination === 'Manila') {
      cost = 5000;
    } else if (origin === 'Cebu' && destination === 'Gensan') {
      cost = 7500;
    } else if (origin === 'Gensan' && destination === 'Manila') {
      cost = 10000;
    } else if (origin === 'Gensan' && destination === 'Cebu') {
      cost = 7500;
    }
    
    $('#total-cost').text('$' + cost.toFixed(2));
    
    // code to submit order
  });
});
