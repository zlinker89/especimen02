function ToPDF() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    source = $('#tabla')[0];

    // we support special element handlers. Register them with jQuery-style
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors
    // (class, of compound) at this time.
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    };
    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
    source, // HTML string or DOM elem ref.
    margins.left, // x coord
    margins.top, { // y coord
        'width': margins.width, // max width of content on PDF
        'elementHandlers': specialElementHandlers
    },

    function (dispose) {
        // dispose: object with X, Y of the last line add to the PDF
        //          this allow the insertion of new lines after html
        
                var svg = document.querySelector("svg");
                if (svg) {
                    var xml = new XMLSerializer().serializeToString(svg);
                    // var data = "data:image/svg+xml;base64," + btoa(xml);
                    canvg('canvas', xml); // envio imagen al canvas
                    // obtengo la imagen
                    // the canvas calls to output a png
                    var canvas = document.getElementById("canvas");
                    var img = canvas.toDataURL("image/png");
                    // tomo fecha
                    var d = new Date();
                    pdf.addImage(img, 'jpg', 100, 350, 400, 400);
                    pdf.setFontSize(16);
                    pdf.text("Liderados", 430, 330);
                    pdf.text("Jefe", 430, 350);
                    pdf.text("Pares", 430, 370);
                    pdf.text("Autoevaluación", 430, 390);
                    // liderados
                    pdf.setFillColor(237, 201, 81);
                    pdf.circle(410, 323, 8, 'FD');
                    // Jefe
                    pdf.setFillColor(204, 51, 63);
                    pdf.circle(410, 343, 8, 'FD');
                    // Pares
                    pdf.setFillColor(0, 160, 176);
                    pdf.circle(410, 363, 8, 'FD');
                    // autoevaluacion
                    pdf.setFillColor(255, 170, 153);
                    pdf.circle(410, 383, 8, 'FD');

                    // save
                    pdf.save('resultado' + d.getDate() + '_' + (d.getMonth() + 1) + '_' + d.getFullYear() + '__' + d.getHours() + '_' + d.getMinutes() + '_' + d.getMilliseconds() + '.pdf');
                }
           
        
        
    }, margins);
}