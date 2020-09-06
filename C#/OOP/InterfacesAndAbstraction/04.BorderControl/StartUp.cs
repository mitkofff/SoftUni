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
            var allList = new List<IId>();

            while((command=Console.ReadLine()) !="End")
            {
                string[] commandArray = command.Split(" ", StringSplitOptions.RemoveEmptyEntries);
                if(commandArray.Length == 2)
                {
                    allList.Add(new Robot(commandArray[0], commandArray[1]));
                }
                else if(commandArray.Length == 3)
                {
                    allList.Add(new Citizen(commandArray[0], int.Parse(commandArray[1]), commandArray[2]));
                }
                else
                {
                    throw new ArgumentException("Invalid input!");
                }
            }

            var lastDigitsOfFakeIds = Console.ReadLine();

            allList.Where(e => e.Id.EndsWith(lastDigitsOfFakeIds))
            .Select(e => e.Id)
            .ToList()
            .ForEach(Console.WriteLine);
        }
    }
}
