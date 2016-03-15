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
        Public Sub PostValue(<FromBody()> ByVal value As String)

        End Sub

        ' PUT: api/GetUser/5
        Public Sub PutValue(ByVal id As Integer, <FromBody()> ByVal value As String)

        End Sub

        ' DELETE: api/GetUser/5
        Public Sub DeleteValue(ByVal id As Integer)

        End Sub
    End Class
End Namespace