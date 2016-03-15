Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Web
Imports System.Web.Http
Imports System.Web.Routing

Public Class WebApiApplication
    Inherits System.Web.HttpApplication

    Sub Application_Start()
        GlobalConfiguration.Configure(AddressOf WebApiConfig.Register)
        RouteTable.Routes.MapHttpRoute("PermsApi", "Perms/{controller}")
    End Sub
End Class