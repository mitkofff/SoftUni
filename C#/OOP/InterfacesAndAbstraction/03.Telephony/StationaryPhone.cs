namespace Telephony
{
    public class StationaryPhone: ICallable
    {
        public string Call(string number)
        {
            int telephonNumber;
            bool isNumber = int.TryParse(number, out telephonNumber);

            if (!isNumber)
            {
                return "Invalid number!";
            }
            return $"Dialing... {number}";
        }
    }
}
