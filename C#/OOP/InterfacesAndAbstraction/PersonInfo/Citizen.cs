namespace PersonInfo
{
using System;
    public class Citizen : IPerson
    {
        private string name;
        private int age;

        public Citizen(string name, int age)
        {
            this.Name = name;
            this.Age = age;
        }

        public string Name
        {
            get => this.name;
            set
            {
                if(value.Length<2 || string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("The name should be longer than one character");
                }
                this.name = value;
            }
        }
        public int Age
        {
            get => this.age;
            set
            {
                if(value<0)
                {
                    throw new ArgumentException("Age can't be negative number.");
                }
                this.age = value;
            }
        }
    }
}
