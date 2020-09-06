namespace Telephony
{
    using System.Linq;
    public class Smartphone : ICallable, IBrowsable
    {
        public string Call(string number)
        {
            int telephonNumber;
            bool isNumber = int.TryParse(number, out telephonNumber);

            if(!isNumber)
            {
                return "Invalid number!";
            }
            return $"Calling... {number}";
        }

        public string Browse(string url)
        {
            bool isContainsNumber = url.Any(char.IsDigit);
            if(isContainsNumber)
            {
                return "Invalid URL!";
            }
            return $"Browsing: {url}!";
        }
    }
}
