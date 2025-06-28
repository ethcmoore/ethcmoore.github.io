const DataViz = ({ design, index }) => {
    return (
        <a href={design.url} target="blank" className="webDesign">
            <figure>
                <img src={design.imagePath} />
            </figure>
        </a>
    )
}

export default DataViz