import { useState } from 'react';
import Header from './assets/components/Header.jsx';
import Gallery from './assets/components/Gallery.jsx';

const App = () => {
  const [pageState, setPageState] = useState("photo");

  function changePagePhoto() { setPageState("photo"); }
  function changePageDesign() { setPageState("design"); }
  function changePageResume() { setPageState("resume"); }

  let pageChangers = { changePagePhoto, changePageDesign, changePageResume };

  return (
    <>
      <Header pageState={pageState} pageChangers={pageChangers} />
      <main>
        <Gallery pageState={pageState} />
      </main>
    </>
  )
}

export default App
