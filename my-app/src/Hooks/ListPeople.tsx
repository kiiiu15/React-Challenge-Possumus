import { useEffect, useId, useState } from "react";
import PeopleService from "../Services/PeopleService";




function ListPeople() {


    const personAtributes = ["name",
        "height",
        "mass",
        "hair_color",
        "skin_color",
        "eye_color",
        "birth_year",
        "gender"
    ];



    const [people, setPeople] = useState<any>([]);

    useEffect(() => {

        (async () => {


            try {
                const people = await PeopleService.fetchPeople();

                setPeople(people);

            } catch (err) {
                setPeople([]);
            }

        })();

    }, []); // inital load


    return <table className="table table-dark">
        <thead>
            <tr>
                {personAtributes.map(atributeName => <td> {atributeName} </td>)}
            </tr>
        </thead>
        <tbody>
            {people.map((person: any, index: number) => <tr key={index}> {
                personAtributes.map(atrribute => <td>{person[atrribute]}</td>)
            }</tr>)}




        </tbody>
    </table>;
}


export default ListPeople;