import { useEffect, useState } from "react";
import { Vehicle } from "../Model/Vehicle";
import { getVehicleById } from "../Services/Vehicle/getById";

export function useVehicle(vehicleId: string) {
  const [vehicleData, setVehicleData] = useState<Vehicle>();

  useEffect(() => {
    getVehicleById(vehicleId).then((filmData) => setVehicleData(filmData));
  }, [vehicleId]);

  return {
    vehicleData,
  };
}
