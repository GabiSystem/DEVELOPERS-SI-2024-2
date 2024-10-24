(function() {
    emailjs.init("_8jL2DYfQ75ArdviL");
})();
emailjs.debug = true;

function toggleTipOutro() {
    const select = document.getElementById('tipFest');
    const outroFesta = document.getElementById('outroFesta');

    if (select.value === 'another') {
        outroFesta.style.display = 'table-row';
    } else {
        outroFesta.style.display = 'none';
    }
}

function preferido(){
        let preferenciaOrcamento = document.getElementById('zaporemail').value;
        let campoEmail = document.getElementById('emailCli');
        let campoTelefone = document.getElementById('tellWhats');
    
        if (preferenciaOrcamento === 'orcEmail') {
            campoEmail.placeholder = "email@email.com (Obrigatório)";
            campoTelefone.placeholder = "(00)90000-0000";
    
        } else if (preferenciaOrcamento === 'zapCell') {
            campoTelefone.placeholder = "(00)90000-0000 (Obrigatório)";
            campoEmail.placeholder = "email@email.com";
        }
}


function verifCamps(event) {
    event.preventDefault();

    let nomeComp = document.getElementById('nomeComp').value.trim();
    let preferenciaOrcamento = document.getElementById('zaporemail').value;
    let email = document.getElementById('emailCli').value.trim();
    let telefone = document.getElementById('tellWhats').value.trim();
    let tipoEvento = document.getElementById('tipFest').value;
    let tipoEvento2 = document.getElementById('outroFesta').value;
    let dataEvento = document.getElementById('dataevento').value;

    if (nomeComp === "" || dataEvento === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }
    if ( tipoEvento === "OUTRO" && tipoEvento2 === ""){
        alert("Por favor, preencha o tipo de evento.");
        return;
    }
    if (preferenciaOrcamento === '') {
        alert("Por favor, insira por onde deseja receber o orçamento.");
        return;
    }
    if (preferenciaOrcamento === 'orcEmail' && email === "") {
        alert("Por favor, preencha o campo de email.");
        return;
    }

    if (preferenciaOrcamento === 'zapCell' && telefone === "") {
        alert("Por favor, preencha o campo de telefone.");
        return;
    }

enviarFormulario();
}


    function enviarFormulario() {
    const formData12 = {
        nome: document.getElementById('nomeComp').value,
        orc_pref: document.getElementById('zaporemail').value,
        email_cliente: document.getElementById('emailCli').value,
        telefone_cliente: document.getElementById('tellWhats').value,
        tipo_evento: document.getElementById('tipFest').value,
        tipo_evento2: document.getElementById('outroFesta').value,
        data_evento: document.getElementById('dataevento').value,
        descri_evento: document.getElementById('orcText').value,
        local_evento: document.getElementById('enderecoLocal').value
    };

    emailjs.send("service_0wpyaik", "template_l99zukg", formData12)
        .then(function(response) {
            alert("Formulário enviado com sucesso!");
            console.log("SUCCESS!", response.status, response.text);
            console.log(formData12);
        }, function(error) {
            alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
            console.log("FAILED...", error);
        });
