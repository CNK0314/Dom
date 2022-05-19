// var newText = 'new Text'
// document.getElementById('ok').innerHTML = newText

// var newName = 'Chanakarn'
// document.getElementById('no').innerHTML = '<bi><i>' + newName + '</i></bi>';

document.getElementById('no').addEventListener('mousemove', function(e) {
    console.log('x = ', e.screenX, " y = ",  e.screenY)
})
let eleS = document.getElementsByClassName('flex-item')
for (let ele of eleS) {
    ele.addEventListener('mousemove', function(e) {
        console.log('x = ', e.screenX, " y = ",  e.screenY)
    })
    ele.addEventListener('click', function(e) {
        alert(ele.innerText)
    })
}