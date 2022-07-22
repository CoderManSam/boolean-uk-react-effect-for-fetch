import { UsersListItem } from "./UsersListItem"

export const UsersList = (props) => {
    return (
        <ul class="users-list">
            {props.users.map((item) => {
                return <UsersListItem item={item} />
            })}
        </ul>  
    )
}