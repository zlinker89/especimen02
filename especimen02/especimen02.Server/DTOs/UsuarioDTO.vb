Public Class UsuarioDTO
    Private Id As Long
    Private Nombre As String
    Private Comtrasena As String
    Private EmpleadoDTO As EmpleadoDTO
    Private UsuarioTipo As List(Of UsuarioTipoDTO)
    Public Property NewUsuarioTipo() As List(Of UsuarioTipoDTO)
        Get
            Return UsuarioTipo
        End Get
        Set(ByVal value As List(Of UsuarioTipoDTO))
            UsuarioTipo = value
        End Set
    End Property
    Public Property NewEmpleadoDTO() As EmpleadoDTO
        Get
            Return EmpleadoDTO
        End Get
        Set(ByVal value As EmpleadoDTO)
            EmpleadoDTO = value
        End Set
    End Property
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
