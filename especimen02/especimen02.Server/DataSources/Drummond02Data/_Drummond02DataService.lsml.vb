Namespace LightSwitchApplication
    Public Class Drummond02DataService
        Private Sub empleado_CanRead(ByRef result As Boolean)
            result = Me.Application.User.HasPermission(Permissions.CanViewEmpleado)
        End Sub
    End Class
End Namespace
