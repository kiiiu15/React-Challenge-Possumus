import Person from "../Model/Person";

const domain: string = "https://swapi.dev/api";
export const peopleEndpoint:string = `${domain}/people`;
export const emptyPerson: Person = {
    name: "",
    height: "",
    mass: "",
    hair_color: "",
    skin_color: "",
    eye_color: "",
    birth_year: "",
    gender: "",
    homeworld: "",
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    url: ""
};





