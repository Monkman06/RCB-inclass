// Bubble Sort: Solution
// =====================
// Grab the result and start divs.
var resultDiv = document.getElementById('result');
var startDiv = document.getElementById('start');

// Grab the button.
var button = document.getElementsByTagName('button');

// Our numbers array
var numbers = [1, 326, 251, 89, 63, 455, 130, 408, 378, 333, 49, 98, 382, 401, 452, 233, 150, 109, 252];

// Show the numbers in the start div.
startDiv.innerHTML = numbers;

// Our Bubble Sort Function
function sorter(nums) {

  // Loop through the array of numbers...
  for (var i = 0; i < nums.length;i++) {

    // ...and loop through them for each selected number.
    for (var j = 0; j < nums.length; j++){

      // Check if the number to the left is greater than the number to the right.
      if(nums[j-1] > nums[j]){

        // Store the number on the left.
        var tmp = nums[j-1];

        // Replace the number on the left with the number on the right.
        nums[j-1] = nums[j];

        // Replace the number on the right with the stored number on the left.
        nums[j] = tmp;
      }
    }
  }

  // Store the sorted results in the result div.
  resultDiv.innerHTML = nums;
}

// Function to run the Bubble Sort function when an element is clicked.
function clicked(){
  sorter(numbers);
}

// Add the clicked() function to the button.
button[0].addEventListener('click',clicked);