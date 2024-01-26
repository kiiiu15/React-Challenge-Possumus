import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Vehicle } from "../Model/Vehicle";
import { getVehicleById } from "../Services/Vehicle/getById";

type Props = {
  vehicleUrl: string;
};

export function PersonVehicleLink({ vehicleUrl }: Props) {
  const [vehicleData, setVehicleData] = useState<Vehicle>();

  useEffect(() => {
    const vehicleId = vehicleUrl.split("/")[5];
    getVehicleById(vehicleId).then((filmData) => setVehicleData(filmData));
  }, [vehicleUrl]);

  return (
    <>
      <Link
        className={`link-underline-opacity-0 ${
          vehicleData?.name ? "" : "placeholder bg-secondary col-12"
        }`}
        to={""}
      >
        {vehicleData?.name}
      </Link>
    </>
  );
}
