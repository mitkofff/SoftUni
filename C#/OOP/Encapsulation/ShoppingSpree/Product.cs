namespace Shopping_Spree
{
using System;
    public class Product
    {
        private string name;
        private decimal cost;

        public Product(string name, decimal cost)
        {
            this.Name = name;
            this.Cost = cost;
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
        public decimal Cost
        {
            get => this.cost;
            private set
            {
                if(isNegative(value))
                {
                    throw new ArgumentException("Money cannot be negative");
                }
                this.cost = value;
            }
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
