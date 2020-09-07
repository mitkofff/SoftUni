using System;
using System.Collections.Generic;
using System.Text;

namespace Vehicles
{
    public class Truck : Vehicle
    {
        private const double airconditionerExtraFuelConsumption = 1.6;
        private const double refuelQuntityLossRatio = 0.95;
        public Truck(double fuelQuantity, double fuelConsumption)
            :base(fuelQuantity, fuelConsumption)
        {

        }
        public override string Drive(double distance)
        {
            double necessaryFuel = distance * (this.FuelConsumption + airconditionerExtraFuelConsumption);
            if (necessaryFuel > this.FuelQuantity)
            {
                return $"{this.GetType().Name} needs refueling";
            }
            else
            {
                this.FuelQuantity -= necessaryFuel;
                return $"{this.GetType().Name} travelled {distance} km";
            }
        }
        public override void Refuel(double fuel)
        {
            double refuelQunaity = fuel * refuelQuntityLossRatio;
            this.FuelQuantity += refuelQunaity;
        }
    }
}
