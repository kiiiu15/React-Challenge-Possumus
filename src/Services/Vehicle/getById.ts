import axios from "axios";
import { vehiclesEndpoint } from "../../Config/Constants";
import { Vehicle } from "../../Model/Vehicle";

export async function getVehicleById(id: string) {
  return axios
    .get<Vehicle>(vehiclesEndpoint + "/" + id)
    .then((response) => response.data);
}
