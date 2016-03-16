/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewperiodosItem.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.periodosItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.periodosItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

