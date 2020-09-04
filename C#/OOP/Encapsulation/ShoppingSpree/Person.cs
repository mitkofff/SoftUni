namespace Shopping_Spree
{
    using System;
    using System.Collections.Generic;
    public class Person
    {
        private string name;
        private decimal money;
        private readonly List<Product> bagOfProducts;

        public Person(string name, decimal money)
        {
            this.Name = name;
            this.Money = money;
            this.bagOfProducts = new List<Product>();
        }
        public bool BuyProduct(Product product)
        {
            if(this.money >= product.Cost)
            {
                this.money -= product.Cost;
                this.bagOfProducts.Add(product);
                return true;
            }
            return false;
        }
        public string Name
        {
            get => this.name;
            private set
            {
                if(isNullEmptyOrSpace(value))
                {
                    throw new ArgumentException("Name cannot be empty");
                }
                this.name = value;
            }
        }
        public decimal Money
        {
            get => this.money;
            set
            {
                if(isNegative(value))
                {
                    throw new ArgumentException("Money cannot be negative");
                }
                this.money = value;
            }
        }
        public List<Product> BagOfProducts
        {
            get => this.bagOfProducts;
        }

        private bool isNegative(decimal value)
        {
            if (value < 0)
                return true;
            return false;
        }
        private bool isNullEmptyOrSpace(string value)
        {
            if (string.IsNullOrEmpty(value) || string.IsNullOrWhiteSpace(value))
                return true;
            return false;
        }
    }
}
