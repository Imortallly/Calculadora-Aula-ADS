let d = document;
let ultimoBotaoPressionado = '';
let tamanhoMaximoVisor = 10;
let pontosUtilizados = 0;

function insert(num) {
	var numero = d.getElementById('resultado').innerHTML;
	if (ultimoBotaoPressionado === 'igual') {
		// se o último botão pressionado foi o igual, começamos um novo cálculo
		d.getElementById('resultado').innerHTML = num;
		ultimoBotaoPressionado = '';
		pontosUtilizados = 0;
	} else if (numero.length < tamanhoMaximoVisor) {
		// caso contrário, apenas adicionamos o novo dígito se o visor não estiver cheio
		if (num === '.') {
			if (pontosUtilizados < 1) {
				d.getElementById('resultado').innerHTML = numero + num;
				pontosUtilizados++;
			}
		} else {
			d.getElementById('resultado').innerHTML = numero + num;
		}
	}

	// esconde os dígitos que ultrapassam o tamanho máximo do display
	d.getElementById('resultado').style.overflow = 'hidden';
}

function clean() {
	d.getElementById('resultado').innerHTML = "";
	ultimoBotaoPressionado = '';
	pontosUtilizados = 0;
}

function back() {
	var resultado = d.getElementById('resultado').innerHTML;
	d.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
	if (resultado.slice(-1) === '.') {
		pontosUtilizados--;
	}
}

function calcular(operador) {
	var resultado = d.getElementById('resultado').innerHTML;

	if (resultado) {
		d.getElementById('resultado').innerHTML = eval(resultado);
		ultimoBotaoPressionado = 'igual';
		pontosUtilizados = 0;
	} else {
		d.getElementById('resultado').innerHTML = "Nada..."
	}

	if (operador) {
		// se um operador foi pressionado, atualiza o último botão pressionado
		ultimoBotaoPressionado = 'operador';
		pontosUtilizados = 0;
	}

	// esconde os dígitos que ultrapassam o tamanho máximo do display
	d.getElementById('resultado').style.overflow = 'hidden';
}

// Adicionando evento de redimensionamento para monitorar o tamanho da tela
window.addEventListener('resize', function() {
	setDisplayMaxWidth();
  });
  
  // Define o tamanho máximo do display com base no tamanho da tela
  function setDisplayMaxWidth() {
	var width = window.innerWidth;
	var maxWidth = Math.floor(width / 10); // divide a largura da tela por 10 para definir o tamanho máximo do display
	d.getElementById('resultado').style.maxWidth = maxWidth + 'em';
  }
  
  // Define o tamanho máximo do display no carregamento da página
  setDisplayMaxWidth();