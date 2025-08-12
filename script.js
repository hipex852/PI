document.addEventListener('DOMContentLoaded', () => {
    // Adiciona um "ouvinte de evento" ao botão com o ID 'cta-button'
    const ctaButton = document.getElementById('cta-button');

    ctaButton.addEventListener('click', () => {
        // Quando o botão for clicado, esta função será executada
        alert('Você clicou no botão! Ação do JavaScript.');
    });
});
