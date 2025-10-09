const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body');
// const text = document.querySelector('h2')

buttons.forEach( bu => {
    bu.addEventListener('click' , function(e){
        
        let data = e.target.id

        switch (data) {
            case "yellow":
                // console.log("Yellow");
                body.style.backgroundColor = "yellow"
                te(data)
                break;
            
            case "blue":
                // console.log("Blue");
                body.style.backgroundColor = "blue"
                te(data)
                break;
            
            case "white":
                // console.log("White");
                body.style.backgroundColor = "white"
                te(data)
                break;
            
            case "grey":
                // console.log("grey")
                body.style.backgroundColor = "grey"
                te(data)
                break;
            
            case "black":
                // console.log("black")
                body.style.backgroundColor = "black"
                te(data)
                break;

            case "red":
                // console.log("red")
                body.style.backgroundColor = "red"
                te(data)
                break;

            case "green":
                // console.log("green")
                body.style.backgroundColor = "green"
                te(data)
                break;

            case "cyan":
                // console.log("cyan")
                body.style.backgroundColor = "cyan"
                te(data)
                break;
            default:
                console.log("You Entered Worng Data.....!!");
                
                break;
        }
        
    })
})

// function te(ele) {
//     // switch (ele) {
//     //     case "yellow":
//     //         text.style.color = blueviolet
//     //         break;
    
//     //     default:
//     //         break;
//     // }
//     // text.style.color = darkred

//     console.log(text.style.color)
// }
// // (text.forEach(tex => {
   
// // }))