namespace SelfHostOwinServer
{
    using System;
    using System.Runtime.Remoting.Contexts;
    using System.Web.Http;

    using Owin;

    /// <summary>
    /// The OWIN start up.
    /// </summary>
    public class OwinStartup
    {
        /// <summary>
        /// The configuration.
        /// </summary>
        /// <param name="app">
        /// The app.
        /// </param>
        public void Configuration(IAppBuilder app)
        {
            app.Use(
               async (context, next) =>
               {
                   Console.WriteLine("1 ==> After web api");
                   await next.Invoke();
                   Console.WriteLine("1 ==> End");
               });

            app.Use(
               async (context, next) =>
               {
                   Console.WriteLine("2 ==> After web api");
                   await next.Invoke();
                   Console.WriteLine("2 ==> End");
               });

            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);

            HttpConfiguration config = new HttpConfiguration();
            config.Routes.MapHttpRoute(
                    name: "DefaultApi",
                    routeTemplate: "api/{controller}/{id}",
                    defaults: new { id = RouteParameter.Optional });

            app.UseWebApi(config);
        }
    }
}
