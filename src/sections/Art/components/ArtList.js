import { ArtListItem } from "./ArtListItem"

export const ArtList = (props) => {

    return (
        <ul class="art-list">
            {props.art.map((item) => {
                return <ArtListItem item={item} />
            })}
         
        </ul>
    )
}