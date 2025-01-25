import { v4 } from "uuid"

import "./photo-gallery.scss"

export type PhotoGalleryImageType = {
    src: string,
    width?: number,
    height?: number,
    alt?: string
}

type PropsType = {
    images: Array<PhotoGalleryImageType>
}

export const PhotoGallery = ( {images} : PropsType ) => {
    return (
        <div className="photo-gallery-container">
            {
                images.map(photo => 
                    <img key={v4()} src={photo.src} alt={photo.alt}
                        style={{
                            width: photo.width || "auto",
                            maxWidth: 300,
                            height: photo.height || "auto",
                            maxHeight: 300,
                            borderRadius: 8,
                        }}
                    />
                )
            }
        </div>
    )
}