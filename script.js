const textoEntrada = document.querySelector(".texto-entrada");
const textoSaida = document.querySelector(".texto-saida");

// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida para "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`

function BtnEncriptar() {
    const textoEncriptado = Encriptar(textoEntrada.value);
    textoSaida.value = textoEncriptado;
    textoEntrada.value = "";
}

function Encriptar(stringEncriptada){
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o", "ober"] , ["u" , "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function BtnDesencriptar() {
    const textoDesencriptado = Desencriptar(textoEntrada.value);
    textoSaida.value = textoDesencriptado;
    textoEntrada.value = "";
}

function Desencriptar(stringDesencriptada){
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o", "ober"] , ["u" , "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function BtnCopiar(){
    navigator.clipboard.writeText(textoSaida.value)   
    
}