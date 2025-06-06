import { useState } from "react";

const Image = ({ image, index, setModalPhoto, setModalShow }) => {

    function openModal(image) {
        setModalPhoto(image);
        setModalShow(true);
    }

    const [showPhoto, setShowPhoto] = useState(false);

    return (
        <>
            <figure key={index} onMouseEnter={() => { setShowPhoto(true) }} onMouseLeave={() => { setShowPhoto(false) }} className={image.vertical ? 'photo vertical' : 'photo'} onMouseUp={() => openModal(image)}>
                <img src={image.previewPath} />
                <figcaption className={showPhoto ? 'captionShow' : ''}>{image.caption}</figcaption>
            </figure>
        </>
    )
}

export default Image
