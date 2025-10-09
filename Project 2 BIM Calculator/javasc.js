const form = document.querySelector('form')
let temp = 0;

form.addEventListener('submit' , function(element){
    element.preventDefault()  
  
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result1 = document.querySelector('#result1')
    const result2 = document.querySelector('#result2')

    if (height === "" || height < 0 || isNaN(height)) {
        result1.innerHTML = `<h2>Plz Enter Height...!!!</h2>`

    } else if (weight === "" || weight <0 || isNaN(weight)){
        result1.innerHTML = `<h2>Plz Enter Weight...!!!</h2>`

    } else{
        const bim = (weight / ((height * weight) / 10000)).toFixed(2);
        result1.innerHTML = `<h2>${bim}</h2>`
        line(bim);
    }

})

function line(bim) {
    if (bim <= 18.6) {
        temp = 1;
    } else if (bim > 18.6 && bim < 24.9 ){
        temp = 2;
    } else if (bim >= 24.9){
        temp = 3 
    }
    switch (temp) {
            case 1:
                result2.innerHTML = `<h3>"You Are Under weight"</h3>`
                break;
            
            case  2:
                result2.innerHTML = `<h3>You Are in Regular Rang</h3>`
                break;
            
            case 3:
                result2.innerHTML = `<h3>"You Are Over weight"</h3>`
                break;
            
            default:
                break;
        }   
}