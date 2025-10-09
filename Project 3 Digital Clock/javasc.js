const clock = document.getElementById('clock')

setInterval((e) => {
    let dat = new Date();
    clock.innerHTML = dat.toLocaleTimeString()
    
}, 1000);