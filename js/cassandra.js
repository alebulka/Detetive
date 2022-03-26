function escolha1() {
    tentativa = 2;
    while (tentativa > 0) {
        var resposta = prompt('Qual a alternativa correta?');
        if(resposta != null){
            if(resposta == '2'|| resposta =='3'){
                tentativa--;
                alert(`Você tem ${tentativa} tentativas restantes`);
            }else if(resposta =='1'){    
                window.location.assign('./cassandrafase2.html');        
                break;
            }else{
                alert("Resposta inválida");
            }
        }
    }
    if (tentativa == 0 ) {
        alert('Suas tentativas acabaram');
        window.location.assign('../../projeto/wrong.html');
    }
}

function escolha2() {
    tentativa = 2;
    while (tentativa > 0) {
        var resposta = prompt('Qual a alternativa correta?');
        if(resposta != null){
            if(resposta == '2'){
                tentativa--;
                alert(`Você tem ${tentativa} tentativas restantes`);
            }else if(resposta =='1'){    
                window.location.assign('./cassandrafase3.html');        
                break;
            }else{
                alert("Resposta inválida");
            }
        }
    }
    if (tentativa == 0 ) {
        alert('Suas tentativas acabaram');
        window.location.assign('../../projeto/wrong.html');
    }
}

function escolha3() {
    tentativa = 2;
    while (tentativa > 0) {
        var resposta = prompt('Qual a alternativa correta?');
        if(resposta != null){
            if(resposta == '2'|| resposta =='3'){
                tentativa--;
                alert(`Você tem ${tentativa} tentativas restantes`);
            }else if(resposta =='1'){    
                window.location.assign('../../projeto/victory.html');        
                break;
            }else{
                alert("Resposta inválida");
            }
        }
    }
    if (tentativa == 0 ) {
        alert('Suas tentativas acabaram');
        window.location.assign('../../projeto/wrong.html');
    }
}