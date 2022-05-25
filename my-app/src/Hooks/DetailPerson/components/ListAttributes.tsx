export default function DisplayProperty({ attr, value  } : {attr : string, value: Array<string>|string}) {

    return (
        <li> {attr} = { Array.isArray(value) ? value.length : value } </li>
    );
}