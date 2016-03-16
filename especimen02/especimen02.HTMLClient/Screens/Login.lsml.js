/// <reference path="~/GeneratedArtifacts/viewModel.js" />
/*------------------------Render Login--------------------------------*/
myapp.Login.LoginForm_postRender = function (element, contentItem) {
    $(element).parent().css({
        "width": "80%",
        "margin": "0 auto"
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
};
myapp.Login.IniciarSesion_postRender = function (element, contentItem) {
    // hacer css

};