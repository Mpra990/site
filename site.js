<script>
    // Função para rolar suavemente até o topo da página
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
</script>
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.card img');

    images.forEach(img => {
        img.addEventListener('error', () => {
            img.src = 'img/default-placeholder.png'; // Substituir por uma imagem de placeholder padrão
        });
    });
});

