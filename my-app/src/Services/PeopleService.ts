import axios from "axios";
import { Constants } from '../Config/Constants';
import Person from '../Model/Person';

export default {
    async fetchPeople(): Promise<Array<Person>> {
        try {
            const { results  }: { results : Array<Person>} = await (await axios.get(Constants.peopleEndpoint)).data;
            console.log(results);
            return Promise.resolve(results);
        } catch (error) {
            return Promise.reject([])
        }
    },

    async fetchPerson(id: string = "0"): Promise<Person> {

        try {
            const {data: person}: {data : Person} = await (await axios.get(Constants.peopleEndpoint + `/${id}`));
            return Promise.resolve(person);
        } catch (error) {
            return Promise.reject({});
        }

    }


};


