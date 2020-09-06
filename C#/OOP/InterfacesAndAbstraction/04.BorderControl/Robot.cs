namespace BorderControl
{
    using System;
    public class Robot : IId
    {
        private string model;
        private string id;

        public Robot(string model, string id)
        {
            this.Model = model;
            this.Id = id;
        }

        public string Model
        {
            get => this.model;
            private set
            {
                if(string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Model can't be null or empty!");
                }
                this.model = value;
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

    }
}
