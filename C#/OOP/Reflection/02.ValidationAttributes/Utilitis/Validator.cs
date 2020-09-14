using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace ValidationAttributes.Utilitis
{
    using System.Linq;
    using ValidationAttributes.Attributes;
    public static class Validator
    {
        public static bool IsValid(object obj)
        {
            if(obj == null)
            {
                return false;
            }

            Type objType = obj.GetType();
            PropertyInfo[] properties = objType.GetProperties();

            foreach(var property in properties)
            {
                MyValidationAttribute[] attributes = property
                    .GetCustomAttributes()
                    .Where(ca => ca is MyValidationAttribute)
                    .Cast<MyValidationAttribute>()
                    .ToArray();

                foreach(MyValidationAttribute attribute in attributes)
                {
                    if(!attribute.IsValid(property.GetValue(obj)))
                    {
                        return false;
                    }
                }
            }
            return true;
        }
    }
}
