// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Alex Chan" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0       // Gingerbread
let cc = 0     // Chocolate Chip
let sugar = 0  // Sugar Sprinkle


// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
//document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Gingerbread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
//})

// TODO: Hook up event listeners for the rest of the buttons

function sumCookies(displayTotal){
    let totalCookies = document.getElementById('qty-total')
    totalCookies.innerHTML = displayTotal
}
// gingerbreak buttons

let gingCell = document.getElementById('qty-gb')

const gbQuantUp = document.getElementById('add-gb')
gbQuantUp.addEventListener('click', function(e){
    //gb = parseInt(gingCell.textContent);
    gb++;
    gingCell.textContent = gb;
    sumCookies(`${gb+cc+sugar}`);
    //console.log(sumCookies)
    //console.log(gb)
})

const gbQuantDown = document.getElementById('minus-gb')
gbQuantDown.addEventListener('click', function(e){
    //gb = parseInt(gingCell.textContent);
    if (gb > 0) {
        gb--;
    }
    gingCell.textContent = gb;
    sumCookies(`${gb+cc+sugar}`)
})
// chocolate buttons
let chocCell = document.getElementById('qty-cc')

const ccQuantUp = document.getElementById('add-cc')
ccQuantUp.addEventListener('click', function(e){
   // cc = parseInt(chocCell.textContent);
    cc++;
    chocCell.textContent = cc;
    sumCookies(`${cc+gb+sugar}`);
    //console.log(sumCookies)
    //console.log(cc)
})

const ccQuantDown = document.getElementById('minus-cc')
ccQuantDown.addEventListener('click', function(e){
   // cc = parseInt(chocCell.textContent);
    if (cc > 0) {
        cc--;
    }
    chocCell.textContent = cc;
    sumCookies(`${cc+gb+sugar}`)
})

// sugar buttons

let sugarCell = document.getElementById('qty-sugar')

const sugarQuantUp = document.getElementById('add-sugar')
sugarQuantUp.addEventListener('click', function(e){
   // sugar = parseInt(sugarCell.textContent);
    sugar++;
    sugarCell.textContent = sugar;
    sumCookies(`${cc+gb+sugar}`);
    //console.log(sumCookies)
    //console.log(cc)
})

const sugarQuantDown = document.getElementById('minus-sugar')
sugarQuantDown.addEventListener('click', function(e){
    //sugar = parseInt(sugarCell.textContent);
    if (sugar > 0) {
        sugar--;
    }
    sugarCell.textContent = sugar;
    sumCookies(`${cc+gb+sugar}`)
})