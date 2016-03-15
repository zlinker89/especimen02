Public Class UsuarioDTO
    Private Id As Long
    Private Nombre As String
    Private Comtrasena As String

    Public Property NewId() As Long
        Get
            Return Id
        End Get
        Set(ByVal value As Long)
            Id = value
        End Set
    End Property
    Public Property NewNombre() As String
        Get
            Return Nombre
        End Get
        Set(ByVal value As String)
            Nombre = value
        End Set
    End Property
    Public Property NewContrasena() As String
        Get
            Return Comtrasena
        End Get
        Set(ByVal value As String)
            Comtrasena = value
        End Set
    End Property
End Class
