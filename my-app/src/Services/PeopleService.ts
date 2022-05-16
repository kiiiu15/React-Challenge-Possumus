import axios from "axios";
import { Constants } from '../Config/Constants';

export default {
    async fetchPeople(): Promise<Array<any>> {

        try {
            const response = await (await axios.get(Constants.peopleEndpoint)).data;
            return Promise.resolve(response.results);

        } catch (error) {
            return Promise.reject([])
        }


    }
};