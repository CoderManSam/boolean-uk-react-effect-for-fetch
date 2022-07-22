import { SubjectList } from "./SubjectList"

export const ArtListItem = (props) => {
    const imgLink = "https://www.artic.edu/iiif/2" + "/" + `${props.item.image_id}` + "/full/843,/0/default.jpg"

    return (
        <li key={props.item.id}>
            <div class="frame">
                <img
                    src= {imgLink}
                />
            </div>
            <h3>{props.item.title}</h3>
            <p>Artist: {props.item.artist_title}</p>
            <h4>Artistic Subjects:</h4>
            <ul>
                {props.item.term_titles.map((element) => {
                    return <SubjectList element={element} />
                })}
            </ul>
        </li>
    )
}