const Header = ({ pageState, pageChangers }) => {
    return (
        <header>
            <div>
                <h1 className="namePlate">Ethan Moore</h1>
                <p className="lead">Multiemedia Reporter</p>
                <p className="lead">& Web Developer</p>
            </div>
            <nav>
                <p className={pageState == "resume" ? 'active' : ''} onClick={pageChangers.changePageResume}>Resume</p>
                <p className={pageState == "photo" ? 'active' : ''} onClick={pageChangers.changePagePhoto}>Photograhy</p >
                <p className={pageState == "design" ? 'active' : ''} onClick={pageChangers.changePageDesign}>Print Design</p>
            </nav >
        </header >
    )
}

export default Header
