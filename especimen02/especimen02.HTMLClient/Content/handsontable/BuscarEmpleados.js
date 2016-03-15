var hot;
// verifico si existe una sesion
var sesion = JSON.parse(localStorage.getItem("usuario")) || null;
console.log(sesion.tipo_usuario[0].tipo);
if (sesion === null) {
    location.href = "../login.html";
} else if (sesion.tipo_usuario.length < 2) {
    if (sesion.tipo_usuario[0].tipo !== 'Administrador') {
        cerrarSession();
    }
} else {
    var cont = 0;
    for (var i in sesion.tipo_usuario) {
        if (sesion.tipo_usuario[i] === 'Administrador') {
            cont++;
        }
    }
    if (cont > 0) {
        cerrarSession();
        location.href = "../login.html";
    }
}
var url = '/api/logout/' + sesion.id;
var empleado_seleccionado;
var row;
angular.module("miApp", []).controller("tabla", function ($scope, $http) {
    $scope.tipos = "Administrador";
    $scope.usuario = sesion;

    $scope.LogOut = function () {
        // cerramos session
        cerrarSession();
    };
    $scope.CambiarPagina = function () {
        // session
        if ($scope.tipos == "Administrador") {
            location.href = "/public_html/Empleados/indexempleado.html";
        } else if ($scope.tipos == "Seguridad") {
            location.href = "/public_html/seguridad/index.html";
        } else {
            location.href = "/public_html/login-empleados/evaluacion-empleados.html";
        }
    };
    // fin session
    $scope.enviado = false;

    $scope.iniciar = function () {
        $http.get('/api/Empleado/').then(function (d) {
            var empleados = d.data;
            console.log(empleados);
            var hotElement = document.getElementById('example');
            hot = new Handsontable(hotElement, {
                data: empleados,
                columns: [
                        {
                            data: "id",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "cedula",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "Nombre",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "email",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "tipo",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "Departament",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "Area",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "SubArea",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "CrewCd",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "RosterPosition",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "Unit",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "liderado1",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "liderado2",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "liderado3",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "liderado4",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "liderado5",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "liderado6",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "liderado7",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "liderado8",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "liderado9",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "liderado10",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "par1",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "par2",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "par3",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "par4",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "par5",
                            type: "text",
                            readOnly: true,
                        },
                        {
                            data: "Jefe",
                            type: "text",
                            readOnly: true,
                        }
                ],
                search:true,
                stretchH: "all",
                rowHeaders: true,
                columnSorting: true,
                afterSelectionByProp: function (r1, c1, rf, ct) {
                    row = r1;
                    $("#nombre").val(empleados[r1].Nombre);
                    $("#documento").val(empleados[r1].cedula);
                    $("#email").val(empleados[r1].email);
                    $("#tipo").val(empleados[r1].tipo);
                    $("#department").val(empleados[r1].Departament);
                    $("#area").val(empleados[r1].Area);
                    $("#subarea").val(empleados[r1].SubArea);
                    $("#crewcd").val(empleados[r1].CrewCd);
                    $("#unit").val(empleados[r1].Unit);
                    $("#rosterposition").val(empleados[r1].RosterPosition);
                    empleado_seleccionado = empleados[r1];
                    $("#ventana").modal("show");
                },
                colHeaders: [
                    "ID",
                    "Cedula",
                    "Nombre",
                    "Email",
                    "Type",
                    "Department",
                    "Area",
                    "SubArea",
                    "Crew Cd",
                    "Roster position",
                    "Unit",
                    "Liderado 1",
                    "Liderado 2",
                    "Liderado 3",
                    "Liderado 4",
                    "Liderado 5",
                    "Liderado 6",
                    "Liderado 7",
                    "Liderado 8",
                    "Liderado 9",
                    "Liderado 10",
                    "Par 1",
                    "Par 2",
                    "Par 3",
                    "Par 4",
                    "Par 5",
                    "Jefe",
                ],
            });
            /*----------------BUSCAR EN TABLA----------------------------------------------------------------*/
            var buscarField = document.getElementById("buscar");
            // funciones
            Handsontable.Dom.addEvent(buscarField, 'keyup', function (event) {
                //                    debugger
                hot.loadData(empleados);

                var queryResult = hot.search.query(this.value);
                rows = getRowsFromObjects(queryResult);
                //console.log('searchFiled', buscarField.value);
                //console.log('rows', rows);

                //console.log('tData', empleados);
                var filtered = empleados.filter(function (_, index) {
                    return !buscarField.value || rows.indexOf(index) >= 0;
                });
                //console.log('filtered', filtered);

                hot.loadData(filtered);

                //                                        hot.render();
            });
            function getRowsFromObjects(queryResult) {
                rows = [];
                for (var i = 0, l = queryResult.length; i < l; i++) {
                    //                        debugger
                    rows.push(queryResult[i].row);
                }
                console.log('rows', rows);
                return rows;
            }
            /*-------fin---------BUSCAR EN TABLA----------------------------------------------------------------*/


            $scope.SaveEmpleado = function () {
                // AQUI EL CODIGO PARA ENVIAR el empleado AL SERVIDOR a seleccionados
                var empleado = {
                    id: empleado_seleccionado.id,
                    Nombre: $("#nombre").val(),
                    cedula: $("#documento").val(),
                    email: $("#email").val(),
                    tipo: $("#tipo").val(),
                    Departament: $("#department").val(),
                    Area: $("#area").val(),
                    SubArea: $("#subarea").val(),
                    CrewCd: $("#crewcd").val(),
                    Unit: $("#unit").val(),
                    RosterPosition: $("#rosterposition").val()
                }
                $http.put('/api/Empleado/' + empleado.id, empleado).then(function () {
                    hot.destroy();
                    $scope.iniciar();
                });
            };
            $scope.enviar = function () {
                if (confirm("¿Desea guardar cambios?")) {
                    var dataTable = hot.getData();
                    for (var i in dataTable) {
                        var empleado = {
                            id: dataTable[i][0],
                            Cedula: dataTable[i][1],
                            Nombre: dataTable[i][2],
                            tipo: dataTable[i][3],
                            Departament: dataTable[i][4],
                            Area: dataTable[i][5],
                            SubArea: dataTable[i][6],
                            CrewCd: dataTable[i][7],
                            RosterPosition: dataTable[i][8],
                            Unit: dataTable[i][9]
                        }
                        /*$http.post("/api/empleado/", empleado).then(function (data) {
                            console.log(JSON.stringify(data.data));
                        });*/
                        console.log(JSON.stringify(empleado));
                    }
                }
            };
        });
    };

    // iniciamos el script
    $scope.iniciar();
    
});
function cerrarSession() {
    localStorage.removeItem("usuario");
    location.href = "../login.html";
}
