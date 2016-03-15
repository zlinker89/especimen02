/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseEmpleadosSet.created = function (screen) {
    // Write code here.
    $.ajax({
        type: 'get',
        data: {},
        url: '/api/GetUser/',
        success: function (d) {
            screen.findContentItem('Hola').displayName = d;
        }
    });
    
};
myapp.BrowseEmpleadosSet.Method_execute = function (screen) {
    // Write code here.
    // This function will be wrapped in a Promise object
    screen.findContentItem('Hola').displayName = "muy bien gracias";
    var usuario = {
        nombre_usuario: '',
        password:''
    };
    
};
/*
function CallGetUserName() {
    $.ajax({
        type: 'post',
        data: {},
        url: 'api/GetUser',
        success: function(d){
            alert(d);
        }
    });
    $.getJSON("../Perms/UserPermissions/", function (data) {

        //attach the permissions to the global 'myapp' object 
        //so it is accessible to the client anywhere.

        // Using a Promise object we can call the CallGetUserName function

        myapp.permissions = data;
        alert(JSON.stringify(data));
    });
}*/