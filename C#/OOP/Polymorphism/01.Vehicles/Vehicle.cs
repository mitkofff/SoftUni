namespace Vehicles
{
using System;
    public abstract class Vehicle
    {
        private double fuelQuantity;
        private double fuelConsumption;
        private const double airconditionerExtraFuelConsumption = 0.9;
        private const double refuelQuntityLossRatio = 1;

        public Vehicle(double fuelQuantity, double fuelConsumption)
        {
            this.FuelQuantity = fuelQuantity;
            this.FuelConsumption = fuelConsumption;
        }
        public virtual string Drive(double distance)
        {
            double necessaryFuel = distance * (this.FuelConsumption + airconditionerExtraFuelConsumption);
            if(necessaryFuel>this.FuelQuantity)
            {
                return $"{this.GetType().Name} needs refueling";
            }
            else
            {
                this.FuelQuantity -= necessaryFuel;
                return $"{this.GetType().Name} travelled {distance} km";
            }
        }

        public virtual void Refuel(double fuel)
        {
            double refuelQunaity = fuel*refuelQuntityLossRatio;
            this.FuelQuantity += refuelQunaity;
        }
        public double FuelQuantity
        {
            get => this.fuelQuantity;
            protected set
            {
                if(value<0)
                {
                    throw new ArgumentException("The fuel quantity can not be negativ number!");
                }
                this.fuelQuantity = value;
            }
        }
        public double FuelConsumption
        {
            get => this.fuelConsumption;
            private set
            {
                if(value<0)
                {
                    throw new ArgumentException("The fuel consumption can not be negativ number!");
                }
                this.fuelConsumption = value;
            }
        }
    }
}
