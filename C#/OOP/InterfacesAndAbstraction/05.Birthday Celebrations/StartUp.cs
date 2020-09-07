namespace BorderControl
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    class StartUp
    {
        static void Main(string[] args)
        {
            string command;
            var birthableList = new List<IBirthdateable>();
            var roboteList = new List<Robot>();

            while ((command=Console.ReadLine()) !="End")
            {
                string[] commandArray = command.Split(" ", StringSplitOptions.RemoveEmptyEntries);
                switch (commandArray[0])
                {
                    case "Robot":
                        {
                            roboteList.Add(new Robot(commandArray[1], commandArray[2]));
                            break;
                        }
                    case "Citizen":
                        {
                            birthableList.Add(new Citizen(commandArray[1], int.Parse(commandArray[2]), commandArray[3], commandArray[4]));
                            break;
                        }
                    case "Pet":
                        {
                            birthableList.Add(new Pet(commandArray[1], commandArray[2]));
                            break;
                        }
                    default:
                            throw new ArgumentException("Invalid input!");       
                }
            }

            var year = Console.ReadLine();

            birthableList.Where(e => e.Birthdate.EndsWith(year))
            .Select(e => e.Birthdate)
            .ToList()
            .ForEach(Console.WriteLine);
        }
    }
}
