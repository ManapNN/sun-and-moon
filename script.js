let btn = document.getElementById('toggleBtn')
let bulb = document.getElementById('bulb')
let text = document.getElementById('text')

btn.addEventListener('click', toggleBulb)

function toggleBulb(e){
    if(btn.textContent.includes('On')){
        bulb.src = './moon.png'
        btn.textContent = 'Turn Off'
        btn.style.backgroundColor = 'red'
        text.innerHTML = 'tyn'
        document.body.style.backgroundColor = 'black'
        text.style.color = 'aqua'
        document.body.style.transition = '1s'
    } else {
        document.body.style.transition = '1s'
        bulb.src = './sun.png'
        btn.textContent = 'Turn On'
        btn.style.backgroundColor = 'blue'
        text.style.color = 'black'
        text.innerHTML = 'kyn'
        document.body.style.backgroundColor = 'yellow'
    }
}