const entrada = document.getElementById('entrada');
const botao = document.getElementById('calcular');
const campoSoma = document.getElementById('soma');
const numeros = document.getElementById('numeros');

botao.addEventListener('click', function() {
    const valorEntrada = parseInt(entrada.value, 10);
    validação(valorEntrada);
  });
  

entrada.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const valorEntrada = parseInt(entrada.value, 10);
      validação(valorEntrada);
    }
 });
  
function validação(valorEntrada){
    if (!isNaN(valorEntrada)) {
        const resultado = somaNum(valorEntrada);
        sucesso();
        campoSoma.value = resultado;
      } else {
        erro();
      }
}

function erro(){
    alert('ENTRADA INVÁLIDA');
    campoSoma.value = 'ERRO';
    campoSoma.style.outline = 'solid rgb(186, 0, 0)';
    campoSoma.style.color = 'rgb(186, 0, 0)';
}

function sucesso(){
    campoSoma.style.outline = 'solid #12d800';
    campoSoma.style.color = ' #12d800';
}



function somaNum(n) {
    numeros.value = '';
    let soma = 0;
    let elementosAdicionados = 0;
    
    for (let i = 1; i < n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
        numeros.value += i + '-';
        elementosAdicionados++;
  
        if (elementosAdicionados % 10 === 0) {
          numeros.value += '\n';
        }
      }
    }
  
    if (numeros.value.endsWith('-')) {
      numeros.value = numeros.value.slice(0, -1);
    }
  
    return soma;
  }
  
