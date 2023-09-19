document.getElementById('calculate').addEventListener('click', function () {
  var list = document.getElementById('main-input').value;
  list = list.replaceAll(' ', '');
  list = list.split(',');

  list = list.map((item, index) => {
    return parseInt(item);
  })

  var operator = document.getElementById('operator').value;

  // Now you can perform calculations based on the selected operator
  var result;
  switch (operator) {
      case 'sum':
      var sum = 0;
        for (var i = 0; i < list.length; i++) {
           sum += parseInt(list[i]);
          }
      document.getElementById('output').innerHTML = sum;
      break;
      case 'average':
      var sum = 0;
        for (var i = 0; i < list.length; i++) {
          sum += parseInt(list[i]);
        }
      document.getElementById('output').innerHTML = sum / list.length;
      break;
      case 'min':
      var min = list[0];
         for (var i = 0; i < list.length; i++) {
            if (list[i] < min) {
              min = list[i];
            }
          }
      document.getElementById('output').innerHTML = min;
      break;

      case 'max':
      var max = list[0];
         for (var i = 0; i < list.length; i++) {
            if (list[i] > max) {
                max = list[i];
              }
          }
      document.getElementById('output').innerHTML = max;
      break;
      case 'median':
      list.sort((a, b) => a - b);
      for (var i = 0; i < list.length; i++) {
          for (var j = 0; j < list.length; j++) {
            if (list[i] < list[j]) {
              var temp = list[i];
              list[i] = list[j];
              list[j] = temp;
            }
          }
        }
        // get median
      var median = 0;
      if (list.length % 2 == 0) {
          median = (list[list.length / 2] + list[(list.length / 2) - 1]) / 2;
      } else {
          median = list[Math.floor(list.length / 2)];
      }
      document.getElementById('output').innerHTML = median;
      break;
      case 'mode':
      // Create an object to store the frequency of each element
      const frequencyCounter = {};

      // Initialize variables to keep track of the modes and their frequency
      const modes = [];
      let maxFrequency = 0;

      // Iterate through the array and count the frequency of each element
      for (const num of list) {
       frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;

         // Check if the current element has a higher frequency than the current modes
         if (frequencyCounter[num] > maxFrequency) {
            modes.length = 0; // Clear the previous modes
            modes.push(num);
            maxFrequency = frequencyCounter[num];
          } else if (frequencyCounter[num] === maxFrequency) {
            modes.push(num);
          }
      }

      if (modes.length === 0) {
        document.getElementById('output').innerHTML = 'No mode found';
      } else {
         document.getElementById('output').innerHTML = 'Mode(s): ' + modes.join(', ');
      }
      break;

      case 'range':
      var min = list[0];
          var max = list[0];
          for (var i = 0; i < list.length; i++) {
              if (list[i] < min) {
                 min = list[i];
              }
          if (list[i] > max) {
              max = list[i];
          }
      }
      document.getElementById('output').innerHTML = max - min;
      break;
      default:
      document.getElementById('output').innerHTML = 'Invalid operator';
      break
  }
});    