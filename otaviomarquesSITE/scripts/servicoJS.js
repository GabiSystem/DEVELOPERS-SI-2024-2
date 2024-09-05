document.addEventListener('DOMContentLoaded', function() {
    const btnServicos = document.querySelector('.btnBarOpt:nth-child(3)');
    const menuServico = document.querySelector('.menuServico');

    btnServicos.addEventListener('mouseenter', function() {
        menuServico.style.display = 'block';
    });

    btnServicos.addEventListener('mouseleave', function() {
        menuServico.style.display = 'none';
    });

    menuServico.addEventListener('mouseenter', function() {
        menuServico.style.display = 'block';
    });

    menuServico.addEventListener('mouseleave', function() {
        menuServico.style.display = 'none';
    });
});