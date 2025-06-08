const Header = ({ pageState, pageChangers }) => {
    return (
        <header>
            <div>
                <h1 className="namePlate">Ethan Moore</h1>
                <p className="lead">Multiemedia Reporter</p>
            </div>
            <nav>
                <p className={pageState == "photo" ? 'active' : ''} onClick={pageChangers.changePagePhoto}>Photography</p >
                <p className={pageState == "design" ? 'active' : ''} onClick={pageChangers.changePageDesign}>Design</p>
                <p className={pageState == "resume" ? 'active' : ''} onClick={pageChangers.changePageResume}>Resume</p>
            </nav >
        </header >
    )
}

export default Header
