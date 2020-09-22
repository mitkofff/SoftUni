namespace SimpleHttpServer
{
    using System;
    using System.Net;
    using System.Net.Sockets;
    using System.Text;
    using System.Threading.Tasks;
    class Program
    {
        static async Task Main(string[] args)
        {
            const string NewLine = "\n\r";
            TcpListener tcpListener = new TcpListener(IPAddress.Loopback, 1984);
            tcpListener.Start();

            while (true)
            {
                var client = tcpListener.AcceptTcpClient();
                var stream = client.GetStream();

                byte[] buffer = new byte[100000];
                var length = stream.Read(buffer, 0, buffer.Length);

                string requestString = Encoding.UTF8.GetString(buffer, 0, length);
                Console.WriteLine(requestString);

                string html = $"<h1> Hello, I am MitkofffServer! <h1>" +
                    $"<h2>{DateTime.Now}<h2>"+
                    $"<form method=post><input name=username /><input name=password />"+
                    $"<input type=submit /></form>";

                string response = "HTTP/1.1 200 OK" + NewLine
                    + "Server: MitkofffServer" + NewLine
                    + "Content-Type: text/html; charset=utf-8" + NewLine
                    + "Content-Lenght: " + html.Length + NewLine
                    + NewLine
                    + html + NewLine;

                byte[] responseBytes = Encoding.UTF8.GetBytes(response);
                stream.Write(responseBytes);

                Console.WriteLine(new string('*', 80));
            }
            
        }
    }
}
