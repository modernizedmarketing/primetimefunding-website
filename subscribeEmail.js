function sendForm() {
  console.log("clicado envio de email")
  const form = document.getElementById('contactForm');
  const formData = new FormData(form);

  // Substitua 'http://seu-backend.com/api/email' pela URL do seu backend
  const apiUrl = 'http://seu-backend.com/api/email';

  fetch(apiUrl, {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    console.log('Resposta do servidor:', data);
    // Lógica adicional se necessário
  })
  .catch(error => {
    console.error('Erro ao enviar formulário:', error);
  });
}