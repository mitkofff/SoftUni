using System;

namespace Telephony
{
    class StartUp
    {
        static void Main(string[] args)
        {
            Smartphone smartphone = new Smartphone();
            StationaryPhone stationaryPhone = new StationaryPhone();

            string[] telephonNumbers = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            string[] urls = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);

            foreach(string telephonNumber in telephonNumbers)
            {
                if(telephonNumber.Length==7)
                {
                    Console.WriteLine(stationaryPhone.Call(telephonNumber));
                }
                else if(telephonNumber.Length == 10)
                {
                    Console.WriteLine(smartphone.Call(telephonNumber));
                }
                else
                {
                    Console.WriteLine("Invalid number!");
                }
            }
            foreach(string url in urls)
            {
                Console.WriteLine(smartphone.Browse(url));
            }
        }
    }
}
