// Function to parse the comma-separated block heights
function parseBlockHeights(input) {
  return input.split(',').map(Number);
}

// Function to calculate units of water stored between blocks
function calculateWaterStorage(blockHeights) {
  let left = 0;
  let right = blockHeights.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let units = 0;

  while (left < right) {
    if (blockHeights[left] <= blockHeights[right]) {
      if (blockHeights[left] >= leftMax) {
        leftMax = blockHeights[left];
      } else {
        units += leftMax - blockHeights[left];
      }
      left++;
    } else {
      if (blockHeights[right] >= rightMax) {
        rightMax = blockHeights[right];
      } else {
        units += rightMax - blockHeights[right];
      }
      right--;
    }
  }

  return units;
}

// Function to handle the button click event
function calculateButtonClick() {
  const blockHeightInput = document.getElementById('block-height');
  const blockHeightsInput = blockHeightInput.value;

  // Parse the block heights
  const blockHeights = parseBlockHeights(blockHeightsInput);

  // Validate the block heights
  if (!Array.isArray(blockHeights) || blockHeights.length === 0) {
    alert('Please enter a valid list of block heights.');
    return;
  }

  const resultContainer = document.getElementById('result-container');
  const units = calculateWaterStorage(blockHeights);
  resultContainer.textContent = `Units of water stored: ${units}`;
}

// Add event listener to the calculate button
const calculateBtn = document.getElementById('calculate-btn');
calculateBtn.addEventListener('click', calculateButtonClick);
