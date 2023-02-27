$(document).ready(function() {
    // Variables to store user input
    var originSelect = $('#origin');
    var destinationSelect = $('#destination');
    var weightInput = $('#weight');
    var quantityInput = $('#quantity');
    var packageTracker = $('#package-tracker');
  
    // Function to calculate freight price and revenue
    function calculatePrice(origin, destination, weight) {
      var freightPrice = 0;
      var revenue = 0;
  
      if (origin === 'Manila' && destination === 'Cebu') {
        freightPrice = weight * 100;
      } else if (origin === 'Manila' && destination === 'Davao') {
        freightPrice = weight * 150;
      } else if (origin === 'Cebu' && destination === 'Manila') {
        freightPrice = weight * 120;
      } else if (origin === 'Cebu' && destination === 'Davao') {
        freightPrice = weight * 200;
      } else if (origin === 'Davao' && destination === 'Manila') {
        freightPrice = weight * 200;
      } else if (origin === 'Davao' && destination === 'Cebu') {
        freightPrice = weight * 180;
      }
  
      revenue = freightPrice * quantityInput.val();
  
      return { freightPrice, revenue };
    }
  
    // Function to update the order table
    function updateOrderTable(origin, destination, weight, freightPrice, revenue) {
      var orderTable = $('#order-table');
      var newRow = $('<tr>');
  
      newRow.append($('<td>').text(origin));
      newRow.append($('<td>').text(destination));
      newRow.append($('<td>').text(weight + ' kg'));
      newRow.append($('<td>').text('$' + freightPrice.toFixed(2)));
      newRow.append($('<td>').text('$' + revenue.toFixed(2)));
  
      orderTable.append(newRow);
    }
  
    // Function to update the package tracker
    function updatePackageTracker(status) {
      var statusDiv = packageTracker.find('.status');
  
      if (status === 'in-transit') {
        statusDiv.find('h3').text('Status: In Transit');
        statusDiv.find('p').text('Package has left the origin facility and is on its way to the destination facility.');
      } else if (status === 'delivered') {
        statusDiv.find('h3').text('Status: Delivered');
        statusDiv.find('p').text('Package has been delivered to the destination facility.');
      }
    }
  
    // Function to handle form submission
    $('form').submit(function(event) {
      event.preventDefault();
  
      // Get user input
      var origin = originSelect.val();
      var destination = destinationSelect.val();
      var weight = weightInput.val();
      var quantity = quantityInput.val();
  
      // Calculate price and revenue
      var { freightPrice, revenue } = calculatePrice(origin, destination, weight);
  
      // Update order table
      updateOrderTable(origin, destination, weight, freightPrice, revenue);
  
      // Update package tracker
      updatePackageTracker('in-transit');
  
      // Reset form
      $('form')[0].reset();
  
      // Update total
      var orderTotal = $('#order-total');
      orderTotal.text('$' + (parseFloat(orderTotal.text().substring(1)) + revenue).toFixed(2));
    });
  
    // Function to handle "Ship Now" button click
    $('#ship-now').click(function() {
      updatePackageTracker('delivered');
    });
  });
  