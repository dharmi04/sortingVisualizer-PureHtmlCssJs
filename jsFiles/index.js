const userInputNumOfEl=document.querySelector('.el_input').value
const sortElContainer=document.querySelector(".elements_insort input")
const container = document.querySelector('.container');
const count = userInputNumOfEl>=10?userInputNumOfEl:10;
let numbers = generateRandomNumbers(count);

async function bubbleSort(arr) {
sleep(200)
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
        await updateBars(arr, i, i + 1);
    }
}




async function updateBars(arr, index1, index2) {
    const bars = document.querySelectorAll('.bar');
    // Update the heights of the bars with a smooth transition
    bars[index1].style.height = `${arr[index1]}px`;
    bars[index2].style.height = `${arr[index2]}px`;
    bars[index1].innerHTML=`<p>${arr[index1]}</p>`
    bars[index2].innerHTML=`<p>${arr[index2]}</p>`
    
    
    
 

    // Add a delay to make the sorting process visible
    await sleep(500);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function generateRandomNumbers(count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {

        const num=Math.floor(Math.random() * 300) + 50 // Generate random numbers between 50 and 350
        while(num in numbers){
            num=Math.floor(Math.random() * 300) + 50 
        }
        numbers.push(num)
    }
    return numbers;
}



function startSorting() {
    createBars(count);
    sortElContainer.value=numbers
    bubbleSort(numbers);
    numbers = generateRandomNumbers(count);
    userInputNumOfEl.value=''
}
//CREATE BARS FUNCTION
function createBars(number){

    const container = document.querySelector('.container');
    container.innerHTML=""
    const numBars = number; // Number of bars to generate
    for (let i = 0; i < numBars; i++) {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${Math.floor(numbers[i])}px`;
        bar.innerHTML=`<p>${numbers[i]}</p>`
        container.appendChild(bar);

}
}
// Initialize the bars with random heights on page load

document.addEventListener('DOMContentLoaded',()=>{
    startSorting()
})
