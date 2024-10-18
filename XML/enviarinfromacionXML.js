function enviarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const anio = document.getElementById("anio").value;
    const telefono = document.getElementById("telefono").value;



    const xmlData = `
    <usuario>
        <nombre>${nombre}</nombre>
        <email>${email}</email>
        <anio>${anio}</anio>
        <telefono>${telefono}</telefono>
    </usuario>`;

    localStorage.setItem(`usuarioXML`,xmlData)

    window.location.href = 'visualizar.html';

    return false;


}