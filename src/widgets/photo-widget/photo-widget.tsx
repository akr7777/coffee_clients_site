import { Gallery } from "react-grid-gallery"

import "./photo-widget.scss"

import photo1 from "../../assets/images/interier/interier-1.png"
import photo2 from "../../assets/images/interier/interier-2.jpg"
import photo3 from "../../assets/images/interier/interier-3.jpg"
import photo4 from "../../assets/images/interier/interier-4.jpg"
import { PhotoGallery } from "../../components/photo-gallery/photo-galley"


const images = [
    {
        src: photo1,
        // width: 159,
        // height: 194,
    },
    {
        src: photo2,
        // width: 298,
        // height: 327,
    },
    {
        src: photo3,
        // width: 255,
        // height: 332,
    },
    {
        src: photo4,
        // width: 160,
        // height: 178,
    },
]

export const PhotoWidget = () => {
    return (
        <div className="chapter">
            <h3>Наши фотографии</h3>

            <PhotoGallery images={images} />

            {/* <Gallery images={images} /> */}

            {/* <div className={"photo-widget-container"}>
                <img alt="Интерьер кофейни" src={photo1} />
                <img alt="Интерьер кофейни" src={photo2} />
                <img alt="Интерьер кофейни" src={photo3} />
                <img alt="Интерьер кофейни" src={photo4} />
            </div> */}
        </div>
    )
}