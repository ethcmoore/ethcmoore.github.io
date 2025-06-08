const WebDesign = ({ design, index }) => {
    return (
        <a href={design.url} target="blank" className="webDesign" onMouseEnter={() => { setShowPhoto(true) }} onMouseLeave={() => { setShowPhoto(false) }}>
            <figure>
                <img src={design.imagePath} />
            </figure>
        </a>
    )
}

export default WebDesign