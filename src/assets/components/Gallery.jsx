import { useState, useEffect } from "react";
import Image from './Image.jsx';
import PhotoModal from './PhotoModal.jsx';
import Design from './Design.jsx';
import WebDesign from './WebDesign.jsx';
import Resume from "./Resume.jsx";
import FilterBar from './FilterBar.jsx';
import photos from '../photos.json';
import designs from '../design.json';
import webclips from '../webclips.json';

const Gallery = ({ pageState }) => {

    useEffect(() => { window.scrollTo(0, 0) });

    const [photoView, setPhotoView] = useState("best");
    const [modalPhoto, setModalPhoto] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    function changeFilterBest() { setPhotoView("best") };
    function changeFilterJacobs() { setPhotoView("jacobs") };
    function changeFilterHocoParade() { setPhotoView("hocoParade") };
    function changeFilterFoodBank() { setPhotoView("foodBank") };
    function changeFilterRoeProtest() { setPhotoView("roeProtest") };

    const [designView, setDesignView] = useState("print");
    function changeFilterPrint() { setDesignView("print") };
    function changeFilterWeb() { setDesignView("web") };

    let filterChagers = { changeFilterBest, changeFilterJacobs, changeFilterHocoParade, changeFilterFoodBank, changeFilterRoeProtest, changeFilterPrint, changeFilterWeb };

    if (pageState == "design") {
        if (designView == "print") {
            return (
                <section className="gallery designGallery">
                    <FilterBar pageState={pageState} filterChagers={filterChagers} View={designView} />
                    {designs.map((design, index) => (
                        <Design design={design} key={index} />
                    ))
                    }
                </section>
            )
        } else if (designView == "web") {
            return (
                <section className="gallery designGallery">
                    <FilterBar pageState={pageState} filterChagers={filterChagers} View={designView} />
                    {webclips.map((design, index) => (
                        <WebDesign design={design} key={index} />
                    ))
                    }
                </section>
            )
        }
    } else if (pageState == "resume") {
        return (
            <div className="gallery">
                <Resume />
            </div>
        )
    } else if (pageState == "photo") {
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
                    <FilterBar pageState={pageState} filterChagers={filterChagers} View={photoView} />
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
