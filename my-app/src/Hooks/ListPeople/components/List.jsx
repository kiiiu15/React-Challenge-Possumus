import ListItem from "./ListItem";

export default function List({ people }) {

    return (
        <>
            <ul className="list-unstyled py-5 px-3" >
                {
                    people.map(({ name }, index) => <ListItem name={name} id={index + 1} key={index} />)
                }
            </ul>
        </>
    );
};