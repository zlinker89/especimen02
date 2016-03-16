/// <reference path="~/GeneratedArtifacts/viewModel.js" />
/*------------------------Render Login--------------------------------*/
myapp.Login.LoginForm_postRender = function (element, contentItem) {
    $(element).parent().css({
        "width": "80%",
        "margin": "0 auto"
    });
};
myapp.Login.cajaBoton_postRender = function (element, contentItem) {
    $(element).find('div').css({
        "width": "50%",
        "margin": "0 auto",
    });
    
    $(element).find('a').css({
        "width": "100px",
        "margin": "0 auto",
        "padding-top": "5px",
        "padding-bottom": "5px",
        // EVA CAMBIAR COLORES BOTON LOGIN 
    });
};
myapp.Login.nombreusuario_render = function (element, contentItem) {
    $(element).parent().css({
        "font-weight": "700",
    });
    $(element).parent().find("label")[0].innerHTML += " <input id='nombre_usuario' type='text'/>";
};
myapp.Login.contrasena_render = function (element, contentItem) {
    $(element).parent().css({
        "font-weight": "700",
    });
    $(element).parent().find("label")[0].innerHTML += " <input id='contrasena' type='password'/>";
};
/*-------------------FIN-----Render Login--------------------------------*/
/*
*   FUNCION para autenticar el usuario
*/
myapp.Login.IniciarSesion_execute = function (screen) {
    var usuario = {
        NewId: null,
        NewNombre: $("#nombre_usuario").val(),
        NewContrasena: $("#contrasena").val(),
    };
    alert(JSON.stringify(usuario));
    $.ajax({
        type: 'post',
        data: usuario,
        url: '/api/GetUser/',
        success: function (d) {
            alert("Resultado es" + JSON.stringify(d));
        }
    });
<<<<<<< HEAD
};
myapp.Login.IniciarSesion_postRender = function (element, contentItem) {
    // hacer css

=======
>>>>>>> origin/master
};