// Função chamada ao clicar no botão de "Confirmar Presença"
function confirmarPresenca() {
  alert("Obrigado por confirmar presença! Esperamos você lá ☕❤️"); // Exibe uma mensagem de confirmação
}

// Função que atualiza o contador regressivo até a data da festa
function atualizarContador() {
  // Define a data da festa (10 de Outubro de 2025 às 16h)
  const dataFesta = new Date("2025-09-21T11:30:00").getTime();

  // Pega a data/hora atual
  const agora = new Date().getTime();

  // Calcula a diferença em milissegundos
  const diferenca = dataFesta - agora;

  // Converte a diferença em dias, horas, minutos e segundos
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24)); // 1 dia = 1000ms * 60s * 60min * 24h
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // resto dividido por horas
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)); // resto dividido por minutos
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000); // resto dividido por segundos

  // Seleciona o elemento <p id="contador"> e insere o texto
  document.getElementById("contador").innerText =
    `⏳ Faltam ${dias} dias, ${horas}h ${minutos}m ${segundos}s para a festa!`;

  // Se a data já passou, mostra uma mensagem diferente
  if (diferenca < 0) {
    document.getElementById("contador").innerText = "🎉 O grande dia chegou! Vamos festejar!";
  }
}

// Atualiza o contador a cada 1 segundo (1000 ms)
setInterval(atualizarContador, 1000);

// Chama a função imediatamente para não esperar 1s
atualizarContador();
