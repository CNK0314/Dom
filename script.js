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
// var borderTick = 33
// document.getElementById('cancel').style.border =`${borderTick}px solid white`

// let mar = 20
// mar = mar + 1
// document.getElementById('ok').addEventListener('click', function(e){
//     mar += 2
//     var marSize = `20px ${mar}px`
//     document.getElementById('cancel').style.margin = marSize
//     document.getElementById('no').style.margin = marSize
// })

let showText = ['ok','วิชานี้','ง่าย','จริงๆ นะ']
let showIndex = 0;
document.getElementById('no').addEventListener('dblclick', function(){
    showIndex++
    if (showIndex >= showText.length) {
        showIndex = 0;
    }
    console.log(`show index = ${showIndex}`)
    const elem = document.getElementById('ok')
    elem.innerText = showText[showIndex]

    // console.log(elem.innerText)
    // if (elem.innerText === 'ok') {
    //     elem.innerText = 'วิชานี้'
    // }
    // else if ( elem.innerText ==='วิชานี้') {
    //     elem.innerText ='ง่าย'
    // }
    // else if ( elem.innerTex ==='ง่าย') {
    //     elem.innerTex ='จริงๆ นะ'
    // }
    // else if ( elem.innerTex ==='จริงๆ นะ') {
    //     elem.innerTex ='ok'
    // }
})