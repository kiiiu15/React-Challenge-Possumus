import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeopleService from "../Services/PeopleService";

function DetailPerson() {


    const personAtributes = [
        "name",
        "height",
        "mass",
        "hair_color",
        "skin_color",
        "eye_color",
        "birth_year",
        "gender"
    ];
    const params = useParams();

    const id: number = parseInt(params.id + "", 10);

    const [person, setPerson] = useState<any>({});


    useEffect(() => {

        (async () => {
            try {
                const personData = await PeopleService.fetchPerson(id);
                console.log(personData);
                
                setPerson(personData);
            } catch (err) {
                setPerson({});
            }
        })();
    }, []);

    useEffect(()=> {
        (async () => {
            try {
                const personData = await PeopleService.fetchPerson(id);
                console.log(personData);
                
                setPerson(personData);
            } catch (err) {
                setPerson({});
            }
        })();
    }, [params.id]);


    return <>
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">{person.name}</h1>
                Details:
                <ul className="list-unstyled col-md-8 fs-4">
                    
                    {personAtributes.map((attr, index) => <li key={ (new Date().getMilliseconds() + index)}> {attr} = {person[attr]} </li>)}
                </ul>
            </div>
        </div>
    </>;
}


export default DetailPerson;