const dia = document.querySelector('#dias')         
const hora = document.querySelector('#horas')
const minuto = document.querySelector('#minutos')
const segundo = document.querySelector('#segundos')
const aniversario = '16 apr 2023'    // so funciona  mês em 3 letras

countdown = () => {   
    const transdata = new Date(aniversario)   //data desejada
    const atual = new Date()                  //data atual  

    const segundostotal = (transdata - atual)/1000

    const emDias = Math.floor(segundostotal /60 /60 /24)
    const emHoras = Math.floor(segundostotal /60 /60) % 24
    const emMinutos = Math.floor(segundostotal /60) % 60
    const emSegundos = Math.floor(segundostotal) % 60

    dia.innerHTML = `${formatotime(emDias)} D`
    hora.innerHTML = `${formatotime(emHoras)} H`
    minuto.innerHTML = `${formatotime(emMinutos)} M`
    segundo.innerHTML = `${formatotime(emSegundos)} S`



    // dia.innerHTML = formatotime(emDias) 
    // hora.innerHTML = formatotime(emhoras) 
    // minuto.innerHTML = formatotime(emMinutos)
    // segundo.innerHTML = formatotime(emSegundos)
}

formatotime = (time) => { // para acrecentar (0) 
    return time < 10? `0 ${time}`: time 

}

countdown()
setInterval(countdown,1000) // funçao atualizar tela (setInterval)= mostrar na tela em segundos (um segundo = 1000)




