import { IoClose } from "react-icons/io5";

const PhotoModal = ({ photo, modalShow, setModalShow, setModalPhoto }) => {
    function closeModal() {
        setModalShow(false);
        setModalPhoto('');
    }

    return (
        <div className={modalShow ? "photoModal modalShow" : "photoModal"}>
            <IoClose onMouseUp={closeModal} />
            <figure>
                <img src={`src/assets/images/${photo.imagePath}`} alt="" />
                <figcaption>{photo.caption}</figcaption>
            </figure>
        </div>
    )
}

export default PhotoModal
