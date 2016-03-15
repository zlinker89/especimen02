/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Home.nombreusuario_render = function (element, contentItem) {
    /* Modificar atributos
    $(element).parent().css({
        "background-color": "green",
        "background-image": "none",
        color: "yellow"
    });
    */
    $(element).parent().css({
        "font-weight": "700",
    });
    $(element).parent().find("label")[0].innerHTML += " <input id='nombre_usuario' type='text'/>";
};

myapp.Home.contrasena_render = function (element, contentItem) {
    $(element).parent().css({
        "font-weight": "700",
    });
    $(element).parent().find("label")[0].innerHTML += " <input id='contrasena' type='password'/>";
};

myapp.Home.LoginForm_postRender = function (element, contentItem) {
    $(element).parent().css({
        "width": "80%",
        "margin": "0 auto"
    });
};

/*
*   FUNCION para autenticar el usuario
*/
myapp.Home.IniciarSesion_execute = function (screen) {
    var usuario = {
        NewId:null,
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