namespace BorderControl
{
    using System;
    public class Rebel : IBuyer
    {
        private string name;
        private int age;
        private string group;
        private int food;

        public Rebel(string name, int age, string group, int food = 0)
        {
            this.Name = name;
            this.Age = age;
            this.Group = group;
            this.Food = food;
        }

        public void BuyFood()
        {
            this.Food += 5;
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
        public string Group
        {
            get => this.group;
            private set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("ID can't be null or empty!");
                }
                this.group = value;
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
