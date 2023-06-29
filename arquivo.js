const outInput = document.querySelector("#output");
let textCop = document.querySelector(".text-cop")




function criptografar(){

    const inputTexto = document.querySelector("#input-texto").value;

    //substituindo as letras por string ou substrings
    let resultCripto = inputTexto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    outInput.innerHTML =  resultCripto +  `${textCop.innerHTML} <button>Copiar</button>`



}
function descriptografar(){

    const inputTexto = document.querySelector("#input-texto").value;

    const resultDescripto = inputTexto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    outInput.innerHTML =  resultDescripto;

}
