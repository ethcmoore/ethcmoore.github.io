import { useState, useEffect } from "react";
import Image from './Image.jsx';
import PhotoModal from './PhotoModal.jsx';
import Design from './Design.jsx';
import WebDesign from './WebDesign.jsx';
import DataViz from './DataViz.jsx';
import Resume from "./Resume.jsx";
import FilterBar from './FilterBar.jsx';
import photos from '../photos.json';
import designs from '../design.json';
import webclips from '../webclips.json';
import dataviz from '../dataviz.json';

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
    function changeFilterData() { setDesignView("data") };

    let filterChagers = { changeFilterBest, changeFilterJacobs, changeFilterHocoParade, changeFilterFoodBank, changeFilterRoeProtest, changeFilterPrint, changeFilterWeb, changeFilterData };

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
        } else if (designView == "data") {
            return (
                <section className="gallery designGallery">
                    <FilterBar pageState={pageState} filterChagers={filterChagers} View={designView} />
                    {dataviz.map((design, index) => (
                        <DataViz design={design} key={index} />
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
        let storyTitle;
        let storyDescription;

        if (photoView == "best") {
            photos.forEach((image) => {
                if (image.best) {
                    images.push(image);
                }
            });
            storyTitle = "Photojournalism Selects";
            storyDescription = "Check out some of my best shots from previous assignments and projects.";
            // } else if (photoView == "jacobs") {
            //     photos.forEach((image) => {
            //         if (image.jacobs) {
            //             images.push(image);
            //         }
            //     });
        } else if (photoView == "hocoParade") {
            photos.forEach((image) => {
                if (image.hocoParade) {
                    images.push(image);
                }
            });
            storyTitle = "2022 IU Homecoming Parade";
            storyDescription = "I covered the annual homecoming parade for IU’s Arbutus yearbook, a sister publication to the IDS that relied heavily on collaboration between the two.";
        } else if (photoView == "foodBank") {
            photos.forEach((image) => {
                if (image.foodBank) {
                    images.push(image);
                }
            });
            storyTitle = "Pantry 279 Prepares for the 2022 Christmas Season";
            storyDescription = "I spent time with a local food pantry as the volunteers and staff geared up for the holiday season and their gift giving program. This project was for a photojournalism course and allowed me to immerse myself in the local community.";
        } else if (photoView == "roeProtest") {
            photos.forEach((image) => {
                if (image.roeProtest) {
                    images.push(image);
                }
            });
            storyTitle = "Protest After SCOTUS Overturns Roe v. Wade";
            storyDescription = "I was editor-in-chief of the IDS the summer when Roe v. Wade was overturned. This was the largest demonstration for abortion rights I covered while reporting on the community's reactions in the following weeks.";
        }

        return (
            <>
                <section className="gallery photoGallery">
                    <FilterBar pageState={pageState} filterChagers={filterChagers} View={photoView} />
                    <div className="photoStoryDesc">
                        <h2>{storyTitle}</h2>
                        <p>{storyDescription}</p>
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
