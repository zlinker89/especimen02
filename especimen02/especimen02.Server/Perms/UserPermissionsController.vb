Imports System.Net
Imports System.Web.Http
Imports LightSwitchApplication
Imports Microsoft.LightSwitch.Server
Imports Microsoft.LightSwitch.Security

Public Class UserPermissionsController
    Inherits ApiController

    ' GET api/<controller>
    Public Function GetValues() As Dictionary(Of String, Boolean)
        'This will generically retrieve all the permissions of the current logged in user. 

        Dim perms As New Dictionary(Of String, Boolean)

        Using ctx As ServerApplicationContext = ServerApplicationContext.CreateContext()
            Dim currentUser = ctx.Application.User

            'If the requestor is not logged in then nothing is returned. 
            ' Only properly logged in users can retrieve their own permissions
            If currentUser.IsAuthenticated Then

                perms.Add(Permissions.SecurityAdministration,
                          currentUser.HasPermission(Permissions.SecurityAdministration))

                'elevate permissions temporarily
                currentUser.AddPermissions(Permissions.SecurityAdministration)

                For Each perm As Permission In ctx.DataWorkspace.SecurityData.Permissions()
                    If perm.Id <> Permissions.SecurityAdministration Then

                        perms.Add(perm.Id, currentUser.HasPermission(perm.Id))
                    End If
                Next
            End If
        End Using

        Return perms
    End Function



End Class