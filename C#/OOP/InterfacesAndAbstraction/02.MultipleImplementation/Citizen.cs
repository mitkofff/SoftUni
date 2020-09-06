namespace PersonInfo
{
using System;
    public class Citizen : IPerson, IIdentifiable, IBirthable
    {
        private string name;
        private int age;
        private string id;
        private string birthdate;

        public Citizen(string name, int age, string id, string birthdate)
        {
            this.Name = name;
            this.Age = age;
            this.Id = id;
            this.Birthdate = birthdate;
        }

        public string Name
        {
            get => this.name;
            private set
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
            private set
            {
                if(value<0)
                {
                    throw new ArgumentException("Age can't be negative number.");
                }
                this.age = value;
            }
        }

        public string Id
        {
            get => this.id;
            private set
            {
                if (value.Length < 10 || string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("The Id should be longer than 9 character");
                }
                this.id = value;
            }
        }
        public string Birthdate
        {
            get => this.birthdate;
            private set
            {
                if (value.Length < 10 || string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("The Id should be 10 character");
                }
                this.birthdate = value;
            }
        }

    }
}
