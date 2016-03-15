Public Class UsuarioTipoDTO
    Private Id As Long
    Public Property NewId() As Long
        Get
            Return Id
        End Get
        Set(ByVal value As Long)
            Id = value
        End Set
    End Property
    Private Tipo As String
    Public Property NewTipo() As String
        Get
            Return Tipo
        End Get
        Set(ByVal value As String)
            Tipo = value
        End Set
    End Property
End Class
