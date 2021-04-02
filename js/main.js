function calcular(tipo, valor) {

    if (tipo === 'acao') {

        if (valor === 'c') {
            //limpar o visor do resultado
            document.getElementById('resultado').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            //contatenar com o resultado para adicionar ao visor
            document.getElementById('resultado').value += valor
        }

        if (valor === '=') {
            //efetuar o calculo
            var valorCampo = eval(document.getElementById('resultado').value)
            console.log(eval(valorCampo))
            document.getElementById('resultado').value = valorCampo
        }

    } else if (tipo === 'valor') {
        document.getElementById('resultado').value += valor
    }
}