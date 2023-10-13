async function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements in the array
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                // Visually update the bars with a delay
                await updateBars(arr, j, j + 1);
            }
        }
    }
}

async function updateBars(arr, index1, index2) {
    const bars = document.querySelectorAll('.bar');

    // Update the heights of the bars with a smooth transition
    bars[index1].style.height = `${arr[index1]}px`;
    bars[index2].style.height = `${arr[index2]}px`;

    // Add a delay to make the sorting process visible
    await sleep(100);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function generateRandomNumbers(count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 300) + 50); // Generate random numbers between 50 and 350
    }
    return numbers;
}

function startSorting() {
    const container = document.querySelector('.container');
    const count = container.childElementCount;

    // Generate random numbers
    const numbers = generateRandomNumbers(count);

    // Apply the sorting animation
    bubbleSort(numbers);
}

// Initialize the bars with random heights on page load
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const numBars = 10; // Number of bars to generate
    for (let i = 0; i < numBars; i++) {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${Math.floor(Math.random() * 300) + 50}px`;
        container.appendChild(bar);
    }
});
