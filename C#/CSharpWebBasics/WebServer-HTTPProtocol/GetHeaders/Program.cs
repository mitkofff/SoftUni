using System;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace HttpClientDemo3
{
    class Program
    {
        static async Task Main(string[] args)
        {
            Console.Write("Enter url: ");
            string url = Console.ReadLine();
            await GetHeaders(url);
        }

        private static async Task GetHeaders(string url)
        {
            Console.OutputEncoding = Encoding.UTF8;

            HttpClient httpClient = new HttpClient();

            httpClient.DefaultRequestHeaders.Add("X-Mit", "mit");
            string html = await httpClient.GetStringAsync(url);
            var html2 = await httpClient.GetAsync(url);
            Console.WriteLine(string.Join(Environment.NewLine,
                               html2.Headers.Select(x => x.Key + " : " + x.Value)));
        }
    }
}
