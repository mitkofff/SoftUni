namespace BorderControl
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    class StartUp
    {
        static void Main(string[] args)
        {
            var buyerList = new List<IBuyer>();

            int buyerCount = int.Parse(Console.ReadLine());

            for(int i=0; i<buyerCount; i++)
            {
                string[] commandArray = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                if(commandArray.Length == 4)
                {
                    buyerList.Add(new Citizen(commandArray[0], int.Parse(commandArray[1]), commandArray[2], commandArray[3]));
                }
                else if(commandArray.Length == 3)
                {
                    buyerList.Add(new Rebel(commandArray[0], int.Parse(commandArray[1]), commandArray[2]));
                }
            }
            string command;
            while ((command = Console.ReadLine()) != "End")
            {

                var buyer = buyerList
                    .FirstOrDefault(b => b.Name == command);
                if (buyer != null)
                {
                    buyer.BuyFood();
                }
            }

            int totalFood = buyerList.Sum(b => b.Food);
            Console.WriteLine(totalFood);
        }
    }
}
