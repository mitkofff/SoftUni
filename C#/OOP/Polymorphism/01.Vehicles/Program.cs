using System;

namespace Vehicles
{
    class Program
    {
        static void Main(string[] args)
        {

            string[] command = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            Vehicle car = new Car(double.Parse(command[1]), double.Parse(command[2]));
            
            command = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            Vehicle truck = new Truck(double.Parse(command[1]), double.Parse(command[2]));

            int numberOfCommands = int.Parse(Console.ReadLine());
            for(int i=0; i<numberOfCommands; i++)
            {
                command = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                
                if(command[0] == "Drive")
                {
                    if(command[1]=="Car")
                    {
                        Console.WriteLine(car.Drive(double.Parse(command[2])));
                    }
                    else if (command[1] == "Truck")
                    {
                        Console.WriteLine(truck.Drive(double.Parse(command[2])));
                    }
                }
                else if(command[0] == "Refuel")
                {
                    if (command[1] == "Car")
                    {
                        car.Refuel(double.Parse(command[2]));
                    }
                    else if (command[1] == "Truck")
                    {
                        truck.Refuel(double.Parse(command[2]));
                    }
                }
            }

            Console.WriteLine($"Car: {car.FuelQuantity:f2}");
            Console.WriteLine($"Truck: {truck.FuelQuantity:f2}");
        }
    }
}
