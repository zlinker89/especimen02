/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewevaluacionItem.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.evaluacionItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.evaluacionItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

