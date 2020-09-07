namespace BorderControl
{
using System;
    public class Citizen : IBuyer, IBirthdateable
    {
        private string name;
        private int age;
        private string id;
        private string birthdate;
        private int food;

        public Citizen(string name, int age, string id, string birthdate, int food = 0)
        {
            this.Name = name;
            this.Age = age;
            this.Id = id;
            this.Birthdate = birthdate;
            this.Food = food;
        }

        public void BuyFood()
        {
            this.Food += 10;
        }

        public string Name
        {
            get => this.name;
            private set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Name can't be null or empty!");
                }
                this.name = value;
            }
        }
        public int Age
        {
            get => this.age;
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Age can't be negativ number!");
                }
                this.age = value;
            }
        }
        public string Id
        {
            get => this.id;
            private set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("ID can't be null or empty!");
                }
                this.id = value;
            }
        }
        public string Birthdate
        {
            get => this.birthdate;
            private set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Birthdate can't be null or empty!");
                }
                this.birthdate = value;
            }
        }
        public int Food
        {
            get => this.food;
            private set
            {
                this.food = value;
            }
        }

    }
}
