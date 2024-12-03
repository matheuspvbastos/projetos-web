function calcule(){
   var nx = document.querySelector('input#nx')
    nx = Number(nx.value)

    for (var i = 1; i <= 10; i++) { 
        document.getElementById('n' + i).innerHTML = `${nx} x ${i} = ${nx * i}`; }
/*
    n1.innerHTML = `${nx} x 1 = ${nx * 1}`
    n2.innerHTML = `${nx} x 2 = ${nx * 2}`
    n3.innerHTML = `${nx} x 3 = ${nx * 3}`
    n4.innerHTML = `${nx} x 4 = ${nx * 4}`
    n5.innerHTML = `${nx} x 5 = ${nx * 5}`
    n6.innerHTML = `${nx} x 6 = ${nx * 6}`
    n7.innerHTML = `${nx} x 7 = ${nx * 7}`
    n8.innerHTML = `${nx} x 8 = ${nx * 8}`
    n9.innerHTML = `${nx} x 9 = ${nx * 9}`
    n10.innerHTML = `${nx} x 10 = ${nx * 10}`
*/

}
