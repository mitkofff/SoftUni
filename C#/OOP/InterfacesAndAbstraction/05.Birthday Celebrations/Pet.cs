using System;
using System.Collections.Generic;
using System.Text;

namespace BorderControl
{
    public class Pet : IBirthdateable
    {
        private string name;
        private string birthdate;

        public Pet(string name, string birthdate)
        {
            this.Name = name;
            this.Birthdate = birthdate;
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
    }
}
