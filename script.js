// var newText = 'new Text'
// document.getElementById('ok').innerHTML = newText

// var newName = 'Chanakarn'
// document.getElementById('no').innerHTML = '<bi><i>' + newName + '</i></bi>';

// document.getElementById('no').addEventListener('mousemove', function(e) {
//     console.log('x = ', e.screenX, " y = ",  e.screenY)
// })
// let eleS = document.getElementsByClassName('flex-item')
// console.log(eleS)
// for (let ele of eleS) {
//     ele.addEventListener('mousemove', function(e) {
//         console.log('x = ', e.screenX, " y = ",  e.screenY)
//     })
//     ele.addEventListener('click', function(e) {
//         alert(ele.innerText)
//     })
// }

// document.getElementById('ok').addEventListener('click', function(e) {
//     document.getElementById('no').classList.add('toggleOn')
// })

document.getElementById('ok').addEventListener('click', function(e) {
    let noElement = document.getElementById('no')
    if (noElement.classList.contains('toggleOn')) {
        noElement.classList.replace('toggleOn', 'toggleOff')
    }
    else if (noElement.classList.contains('toggleOff')) {
        noElement.classList.replace('toggleOff', 'toggleOn')
    }
    else {
        noElement.classList.add('toggleOn')
    }
})
var borderTick = 33
document.getElementById('cancel').style.border =`${borderTick}px solid white`
let mar = 20
mar = mar + 1
document.getElementById('ok').addEventListener('click', function(e){
    mar += 2
    var marSize = `20px ${mar}px`
    document.getElementById('cancel').style.margin = marSize
    document.getElementById('no').style.margin = marSize
})
