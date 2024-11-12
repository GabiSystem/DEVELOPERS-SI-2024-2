function tgleMenu() {
    const menu = document.querySelector('.btnBar');
    const logoBar = document.querySelector('.logoBar');

    menu.classList.toggle('active');
    logoBar.classList.toggle('ocult');

    
}

function tgleServ() {
    const servOpt = document.querySelector('.srvcOpt');

    servOpt.classList.toggle('display');
}