namespace SelfHostOwinServer
{
    using System;

    using Microsoft.Owin.Hosting;

    /// <summary>
    /// The program.
    /// </summary>
    public class Program
    {
        /// <summary>
        /// The main.
        /// </summary>
        private static void Main()
        {
            const string BaseAddress = "http://localhost:9000/";

            Console.WriteLine("Self host base address: " + BaseAddress);

            using (WebApp.Start<OwinStartup>(url: BaseAddress))
            {
                Console.ReadLine();
            }
        }
    }
}
