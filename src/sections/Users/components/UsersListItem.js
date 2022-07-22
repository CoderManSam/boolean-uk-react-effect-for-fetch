export const UsersListItem = (props) => {
    const name = `${props.item.name.title} ` + `${props.item.name.first} ` + `${props.item.name.last} `

    return (
        <li class="bg-blue">
            <img
            src={props.item.picture.medium}
            alt={name}
            />
            <h3>{name}</h3>
            <p>Email: {props.item.email}</p>
        </li>
    )
}