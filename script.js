function verificar() {
    let data = new Date()
    let ano = data.getFullYear() // FullYear vai pegar os 4 digitos do ano
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto') // isso é o mesmo de ir no html e inserir uma tag img com id

        if (fsex[0].checked) {
            gênero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './assets/bebe menina.png')

            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', './assets/jovem mulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', './assets/mulher adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', './assets/mulher idosa.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './assets/bebe menino.png')
            } else if (idade < 25) {
                // Jovem
                img.setAttribute('src', './assets/jovem homem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', './assets/homem adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', './assets/homem idoso.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)






    }



}