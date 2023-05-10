document.getElementById('text').innerHTML = `

<h4 class='text-light text-capitalize'>background : <span class='text-info'> rgb(78, 1, 41 )</span></h4>

`

document.getElementById('btn').addEventListener('click', function () {

    let c1 = Math.floor(Math.random() * 256)
    let c2 = Math.floor(Math.random() * 256)
    let c3 = Math.floor(Math.random() * 256)


    document.getElementById('background').style.background = 'rgb(' + c1 + ',' + c2 + ',' + c3 + ')'
    document.getElementById('text').innerHTML = `

<h4 class='text-light text-capitalize'>background : <span class='text-info'>rgb(${c1},${c2},${c3})</span></h4>

`


})
