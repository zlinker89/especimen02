/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewEmpleados.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.empleadoItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.empleadoItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

