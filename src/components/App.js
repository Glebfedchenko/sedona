import React from "react";
import Menu from "./Menu";
import Info from "./Info";
import MainContent from "./MainContent";
import Interested from "./Interested";
import Maps from "./Maps";
import Footer from "./Footer";
const App = () => (
  <div>
    <Menu />
    <Info />
    <MainContent />
    <Interested />
    <Maps
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCYpzOEL3t9SDwGC_E9mXvdmZC1qe4NJsA&callback=initMap"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      isMarkerShown
    />
    <Footer />
  </div>
);
export default App;
