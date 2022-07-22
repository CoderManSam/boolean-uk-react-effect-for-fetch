import { useEffect, useState } from "react"
import { ArtList } from "./components/ArtList"

function ArtsSection() {
  const [art, setArt] = useState([])

  useEffect(() => {
    
    fetch(`https://api.artic.edu/api/v1/artworks`)
      .then((res) => res.json())
      .then((data) => setArt(data.data));

  }, []); 

  console.log("art", art)

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
          <ArtList art={art}/>
      </div>
    </section>
  )
}

export default ArtsSection
