import { useState } from "react";
import Image from './Image.jsx';
import PhotoModal from './PhotoModal.jsx';
import Design from './Design.jsx';
import Resume from "./Resume";
import photos from '../photos.json';
import designs from '../design.json';

const Gallery = ({ pageState }) => {

    if (pageState == "design") {
        return (
            <section className="gallery designGallery">
                {designs.map((design, index) => (
                    <Design design={design} key={index} />
                ))
                }
            </section>
        )
    } else if (pageState == "resume") {
        return (
            <div className="gallery">
                <Resume />
            </div>
        )
    } else if (pageState == "photo") {

        const [photoView, setPhotoView] = useState("best");
        const [modalPhoto, setModalPhoto] = useState(0);
        const [modalShow, setModalShow] = useState(false);

        function changeFilterBest() { setPhotoView("best") };
        function changeFilterJacobs() { setPhotoView("jacobs") };
        function changeFilterHocoParade() { setPhotoView("hocoParade") };
        function changeFilterFoodBank() { setPhotoView("foodBank") };
        function changeFilterRoeProtest() { setPhotoView("roeProtest") };


        const images = [];

        if (photoView == "best") {
            photos.forEach((image) => {
                if (image.best) {
                    images.push(image);
                }
            });
        } else if (photoView == "jacobs") {
            photos.forEach((image) => {
                if (image.jacobs) {
                    images.push(image);
                }
            });
        } else if (photoView == "hocoParade") {
            photos.forEach((image) => {
                if (image.hocoParade) {
                    images.push(image);
                }
            });
        } else if (photoView == "foodBank") {
            photos.forEach((image) => {
                if (image.foodBank) {
                    images.push(image);
                }
            });
        } else if (photoView == "roeProtest") {
            photos.forEach((image) => {
                if (image.roeProtest) {
                    images.push(image);
                }
            });
        }

        return (
            <>
                <section className="gallery photoGallery">
                    <div className="photoFilters" style={{ gridColumn: "span 2" }}>
                        <p className={photoView == "best" ? "photoFilterOption activeFilter" : "photoFilterOption"} onMouseUp={changeFilterBest}>Selects</p>
                        <p className={photoView == "jacobs" ? "photoFilterOption activeFilter" : "photoFilterOption"} onMouseUp={changeFilterJacobs}>Jacobs School Assualt Investigation</p>
                        <p className={photoView == "hocoParade" ? "photoFilterOption activeFilter" : "photoFilterOption"} onMouseUp={changeFilterHocoParade}>2022 IU homecoming Parade</p>
                        <p className={photoView == "foodBank" ? "photoFilterOption activeFilter" : "photoFilterOption"} onMouseUp={changeFilterFoodBank}>Pantry 279 Food Bank</p>
                        <p className={photoView == "roeProtest" ? "photoFilterOption activeFilter" : "photoFilterOption"} onMouseUp={changeFilterRoeProtest}>Protest for Abortion Rights</p>
                    </div>
                    {
                        images.map((image, index) => (
                            <Image image={image} key={index} setModalPhoto={setModalPhoto} setModalShow={setModalShow} />
                        ))
                    }
                </section >
                <PhotoModal photo={modalPhoto} modalShow={modalShow} setModalShow={setModalShow} setModalPhoto={setModalPhoto} />
            </>
        )
    }

}

export default Gallery
