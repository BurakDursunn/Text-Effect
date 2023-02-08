const content = document.getElementById('content')
const speedElement = document.getElementById('speed')

const text = "I am 21, live in Istanbul, Turkey. I am Computer Engineering Student. "

let varId=1
let varSpeed = 400/speedElement.value

write()

function write(){
    content.innerText=text.slice(0,varId)
    varId=varId+1
    if(varId>text.length){
        varId=1
    }
    setTimeout(write,varSpeed)
}

speedElement.addEventListener('input', (e) => (varSpeed=400/e.target.value))

