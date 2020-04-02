function confirmar() {
    // VARIABLES FROM ANSWERS AND RESULT DIV.
    let answers = []
    answers[0] = document.querySelector("select#maca").value
    answers[1] = document.querySelector("select#banana").value
    answers[2] = document.querySelector("select#melancia").value
    answers[3] = document.querySelector("select#abacaxi").value
    answers[4] = document.querySelector("select#abacate").value
    const res = document.querySelector("div#res")
    let points = 0
    let _error = 0
    // alert(answers) //Used to check 'answers' content

    //Verificar a validade das respostas.
    for (let c in answers) {
        if (answers[c] == 'res') {//Check if any of the questions was left unanswered.
            _error = 1
        }
        if (answers[c] == 1) {//Check if the answers are correct.
            points++
        }
    }
    // alert(points) //Check the content of 'points'
    if (_error == 1) {//Error message, in case there's a unanswered question.
        alert('[ERRO]Você precisa responder todas as questões.')
    } else {//Print the result in the result Div
        switch (points) {
            case 0: res.innerHTML = `Que pena, você não fez nenhum ponto.`
                break
            case 1: res.innerHTML = `Que legal, você fez 1 ponto.`
                break
            case 2: res.innerHTML = `Que legal, você fez 2 pontos.`
                break
            case 3: res.innerHTML = `Que legal, você fez 3 pontos.`
                break
            case 4: res.innerHTML = `Parabéns, você fez 4 pontos.`
                break
            case 5: res.innerHTML = `Parabéns. você fez 5 pontos.`
                break
            default: `[ERRO]`
                break
        }
    }
}
