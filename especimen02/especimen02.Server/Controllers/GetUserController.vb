Imports System.Net
Imports System.Web.Http

Namespace Controllers
    Public Class GetUserController
        Inherits ApiController

        ' GET: api/GetUser
        Public Function GetValues() As String
            Dim Nombre As String
            Using ctx As ServerApplicationContext = ServerApplicationContext.CreateContext()
                Dim currentUser = ctx.Application.User

                'If the requestor is not logged in then nothing is returned. 
                ' Only properly logged in users can retrieve their own permissions
                If currentUser.IsAuthenticated Then
                    Nombre = currentUser.Name
                End If
            End Using
            Return Nombre
        End Function

        ' GET: api/GetUser/5
        Public Function GetValue(ByVal id As Integer) As String
            Return "value"
        End Function

        ' POST: api/GetUser
        Public Function PostValue(ByVal obj As UsuarioDTO) As UsuarioDTO
            Dim usuario As UsuarioDTO = New UsuarioDTO()

            Using ctx As ServerApplicationContext = ServerApplicationContext.CreateContext()
                Dim usuariolst = From u In ctx.DataWorkspace.Drummond02Data.usuarios
                                 Where u.nombre_usuario.Equals(obj.NewNombre) & u.password_usuario.Equals(obj.NewContrasena)

                If usuariolst.Count() >= 1 Then
                    ' obtenemos el usuario
                    usuario.NewId = usuariolst.FirstOrDefault().id
                    usuario.NewNombre = usuariolst.FirstOrDefault().nombre_usuario
                    usuario.NewContrasena = usuariolst.FirstOrDefault().password_usuario
                    ' obtenemos el empleado
                    usuario.NewEmpleadoDTO = New EmpleadoDTO()
                    usuario.NewEmpleadoDTO.NewId = usuariolst.FirstOrDefault().empleadoQuery.FirstOrDefault().id
                    usuario.NewEmpleadoDTO.NewCedula = usuariolst.FirstOrDefault().empleadoQuery.FirstOrDefault().cedula
                    usuario.NewEmpleadoDTO.NewNombre = usuariolst.FirstOrDefault().empleadoQuery.FirstOrDefault().Nombre
                    ' obtenemos los tipos o roles
                    usuario.NewUsuarioTipo = New List(Of UsuarioTipoDTO)
                    Dim tiposlst = usuariolst.FirstOrDefault().Usuario_Tipo_usuarioQuery

                    For Each tipoItem As Usuario_Tipo_usuarioItem In tiposlst
                        Dim tipos As UsuarioTipoDTO = New UsuarioTipoDTO()
                        tipos.NewId = tipoItem.tipo_usuarioItem.id
                        tipos.NewTipo = tipoItem.tipo_usuarioItem.tipo_usuario
                        usuario.NewUsuarioTipo.Add(tipos)
                    Next
                End If

                Return usuario
            End Using
        End Function

        ' PUT: api/GetUser/5
        Public Sub PutValue(ByVal id As Integer, <FromBody()> ByVal value As String)

        End Sub

        ' DELETE: api/GetUser/5
        Public Sub DeleteValue(ByVal id As Integer)

        End Sub
    End Class
End Namespace