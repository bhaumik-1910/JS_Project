const started = document.querySelector('#start');
const stoped = document.querySelector('#stop');
const body = document.querySelector('body');
const nav = document.querySelector('#navid');


let intervalID ;
let coloerChanger; 

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const intervalFunction = function(str){
    // console.log(`Interval Started ${str}`);
    coloerChanger = randomColor();
    body.style.backgroundColor = coloerChanger;
    nav.style.backgroundColor = coloerChanger;
    console.log(coloerChanger);
    
}

const startIntervalFunction = function ()
{
    if (!intervalID)
    {
        intervalID = setInterval(intervalFunction , 500 , "BHAUMIK4566");
        console.log("Started")
    }
        
}

const stopIntervalFunction = function(){   
 
    clearInterval(intervalID)
    console.log("Stoped")
    intervalID = null;
    body.style.backgroundColor = coloerChanger;
    nav.style.backgroundColor = coloerChanger;


}

started.addEventListener('click',startIntervalFunction)
    
stoped.addEventListener('click', stopIntervalFunction)
