/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewResultados.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.R_EvaluacionItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.R_EvaluacionItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

