namespace CommandPattern.Core
{
    using System;
    using System.Linq;
    using System.Reflection;
    using CommandPattern.Core.Contracts;
    public class CommandInterpreter : ICommandInterpreter
    {
            private const string CommandSufix = "Command";
        public string Read(string args)
        {

            string[] commandTokens = args
                .Split(' ', System.StringSplitOptions.RemoveEmptyEntries)
                .ToArray();

            string commandName = commandTokens[0] + CommandSufix;
            string[] commandArgs = commandTokens
                .Skip(1)
                .ToArray();

            Assembly assembly = Assembly.GetCallingAssembly();
            Type commandType = assembly
                .GetTypes()
                .FirstOrDefault(t => t.Name.ToLower() == commandName.ToLower());

            if(commandType == null)
            {
                throw new ArgumentException("Invalid command type!");
            }
            ICommand commandInstance = (ICommand)Activator.CreateInstance(commandType);

            string result = commandInstance.Execute(commandArgs);
            return result;
        }
    }
}
