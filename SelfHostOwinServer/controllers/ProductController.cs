namespace SelfHostOwinServer.controllers
{
    using System.Collections.Generic;
    using System.Web.Http;

    using SelfHostOwinServer.model;

    /// <summary>
    /// The values controller.
    /// </summary>
    public class ProductController : ApiController
    {
        /// <summary>
        /// The get.
        /// </summary>
        /// <returns>
        /// The list of products
        /// </returns>
        public IEnumerable<Product> Get()
        {
            return new Product[]
                       {
                           new Product
                               {
                                   Id = "PRD1",
                                   Title = "Acer GF276 Monitor",
                                   Description = "Acer GF276 27 Full HD LED Monitor"
                               },
                           new Product
                               {
                                   Id = "PRD2",
                                   Title = "TP-Link Archer",
                                   Description = "TP-Link Archer C20i AC750 Wireless"
                               },
                            new Product
                               {
                                   Id = "PRD3",
                                   Title = "Samsung Portable",
                                   Description = "Samsung Portable 500GB T3 SSD"
                               },
                            new Product
                               {
                                   Id = "PRD4",
                                   Title = "Acer G246HLF",
                                   Description = "Acer G246HLF 24 LED HDMI DVI Gaming Monitor"
                               },
                            new Product
                               {
                                   Id = "PRD5",
                                   Title = "HPE ProLiant",
                                   Description = "HPE ProLiant Gen8 G1610T 819185"
                               },
                            new Product
                               {
                                   Id = "PRD6",
                                   Title = "MSI GeForce",
                                   Description = "MSI GeForce GTX 1060 GAMING X"
                               }
                       };
        }
    }
}
