import axios from "axios";
import { peopleEndpoint, emptyPerson } from '../Config/Constants';

import Person from '../Model/Person';


interface typeAlias {
    getAllResponse : { data : {results : Array<Person>}}
    getById: {data : Person}
}

export default {
    async fetchPeople(): Promise<Array<Person>> {
        try {
            const {data}: typeAlias["getAllResponse"] = await (axios.get(peopleEndpoint));
            const { results } = data;
            return Promise.resolve(results);
        } catch (error) {
            return Promise.reject([])
        }
    },

    async fetchPerson(id: string = "0"): Promise<Person> {

        try {
            const {data : person}: typeAlias["getById"] = await (axios.get(`${peopleEndpoint}/${id}`));
            return Promise.resolve(person);
        } catch (error) {
            return Promise.reject(emptyPerson);
        }

    }


};


