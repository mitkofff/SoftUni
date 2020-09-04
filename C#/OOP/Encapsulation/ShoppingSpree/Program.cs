namespace Shopping_Spree
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    class Program
    {
        static void Main(string[] args)
        {
            List<Person> persons = new List<Person>();
            List<Product> products = new List<Product>();

            string[] commandPersons = Console.ReadLine().Split(";");
            
            //Create a collection of persons
            foreach(var person in commandPersons)
            {
                string name = person.Split("=")[0];
                decimal money = decimal.Parse(person.Split("=")[1]);
                try
                {
                    persons.Add(new Person(name, money));
                }
                catch(ArgumentException ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }

            string[] commandProducts = Console.ReadLine().Split(";", StringSplitOptions.RemoveEmptyEntries);
            
            //Create a collection of products
            foreach (var product in commandProducts)
            {
                string name = product.Split("=")[0];
                decimal money = decimal.Parse(product.Split("=")[1]);
                try
                {
                    products.Add(new Product(name, money));
                }
                catch (ArgumentException ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }

            string command;

            while ((command=Console.ReadLine()) != "END")
            {
                var person = persons.FirstOrDefault(p => p.Name == command.Split()[0]);
                var product = products.FirstOrDefault(pr => pr.Name == command.Split()[1]);
                
                if(person.BuyProduct(product))
                {
                    Console.WriteLine($"{person.Name} bought {product.Name}");
                }
                else
                {
                    Console.WriteLine($"{person.Name} can't afford {product.Name}");
                }
            }

            foreach(var person in persons)
            {
                var sb = new StringBuilder();
                sb.Append($"{person.Name} - ");
                if(person.BagOfProducts.Count>0)
                {
                    sb.Append($"{string.Join(",", person.BagOfProducts.Select(p => p.Name))}");
                }
                else
                {
                    sb.Append($"Nothing bought");
                }
                Console.WriteLine(sb.ToString().TrimEnd());
            }
        }
    }
}
