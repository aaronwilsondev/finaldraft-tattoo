import React, { useState, useEffect } from "react";

import "./gallery.styles.scss";
import GALLERY_DATA from "./gallery-data.js";
import { SRLWrapper } from "simple-react-lightbox";

function GalleryPage() {

    const [ tag, setTag ] = useState("all");
    const [ filteredImages, setFilteredImages ] = useState([]);
    

    useEffect(
        () => {
            tag === "all" ? setFilteredImages(GALLERY_DATA) : setFilteredImages(GALLERY_DATA.filter( image => image.tag === tag))
        }, [tag]);
    
    
    
    return (
    <div className="gallery-page">
      <div className="tags" handleSetTag={setTag}>
       <TagButton name="all" handleSetTag={setTag} tagActive={ tag === "all" ? true : false }/>
       <TagButton name="artist1" handleSetTag={setTag} tagActive={ tag === "artist1" ? true : false }/>
       <TagButton name="artist2" handleSetTag={setTag} tagActive={ tag === "artist2" ? true : false }/>
       <TagButton name="artist3" handleSetTag={setTag} tagActive={ tag === "artist3" ? true : false }/>
      </div>
    <SRLWrapper>
      <div className="container">
         {filteredImages.map(image => (
          <div key={image.id} className="image-card">
          <a href={`/gallery-images/${image.imageUrl}`}>
           <img className="image" src={`/gallery-images/${image.imageUrl}`} alt="" />
           </a>
          </div>
         ))}
      </div>
    </SRLWrapper>
    </div>
);
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
    return (
        <button 
        className={ `tag ${ tagActive ? "active" : null }` }
        onClick={() => handleSetTag(name)}>
            {name.toUpperCase()}
        </button>
    )
};

export default GalleryPage;