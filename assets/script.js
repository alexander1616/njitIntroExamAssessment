//Name
let yourName = "Alex Chan" 
document.getElementById('credit').textContent = `Created by ${yourName}`

//Variable Count Declaration
let gb = 0       // Gingerbread
let cc = 0     // Chocolate Chip
let sugar = 0  // Sugar Sprinkle

//Sum Function
function sumCookies(displayTotal)
{
    let totalCookies = document.getElementById('qty-total')
    totalCookies.innerHTML = displayTotal
}

//Gingerbread Cookie
let gingCell = document.getElementById('qty-gb') //Gingerbread Cell Reference
let gbQuantUp = document.getElementById('add-gb') //Gingerbread Plus Button
gbQuantUp.addEventListener('click', function(e)
{
    gb++;
    gingCell.textContent = gb;
    sumCookies(`${gb+cc+sugar}`);
})

let gbQuantDown = document.getElementById('minus-gb') //Gingerbread Minus Button
gbQuantDown.addEventListener('click', function(e)
{    
    if (gb > 0) 
    {
        gb--;
    }
    gingCell.textContent = gb;
    sumCookies(`${gb+cc+sugar}`)
})

//Chocolate Cookie
let chocCell = document.getElementById('qty-cc') //Choc Cell Ref
let ccQuantUp = document.getElementById('add-cc') //Choc Plus Button
ccQuantUp.addEventListener('click', function(e)
{
    cc++;
    chocCell.textContent = cc;
    sumCookies(`${cc+gb+sugar}`);
})

let ccQuantDown = document.getElementById('minus-cc') //Choc Minus Button
ccQuantDown.addEventListener('click', function(e)
{
    if (cc > 0) 
    {
        cc--;
    }
    chocCell.textContent = cc;
    sumCookies(`${cc+gb+sugar}`)
})

//Sugar Cookie
let sugarCell = document.getElementById('qty-sugar') //Sugar Cell Ref
let sugarQuantUp = document.getElementById('add-sugar') //Sugar Plus Button
sugarQuantUp.addEventListener('click', function(e)
{
    sugar++;
    sugarCell.textContent = sugar;
    sumCookies(`${cc+gb+sugar}`);
})

let sugarQuantDown = document.getElementById('minus-sugar') //Sugar Minus Button
sugarQuantDown.addEventListener('click', function(e)
{
    if (sugar > 0) 
    {
        sugar--;
    }
    sugarCell.textContent = sugar;
    sumCookies(`${cc+gb+sugar}`)
})