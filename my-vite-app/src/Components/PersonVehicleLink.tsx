import { Link } from "react-router-dom";
import { useVehicle } from "../Hooks/useVehicle";

type Props = {
  vehicleUrl: string;
};

export function PersonVehicleLink({ vehicleUrl }: Props) {
  const vehicleId = vehicleUrl.split("/")[5];

  const { vehicleData } = useVehicle(vehicleId);

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
