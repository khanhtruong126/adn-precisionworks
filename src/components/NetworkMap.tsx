import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import styled from "styled-components";
import { icon, marker } from "leaflet";

const NetworkMap = () => {
  const mapMarker = icon({
    iconUrl: require("../assets/app-map-marker.png"),
    iconSize: [20, 20], // size of the icon
    // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  // const MarkerMapLoad = () => {
  //   const map = useMap();
  //   marker([10.762622, 106.660172], { icon: mapMarker })
  //     .addTo(map)
  //     .bindPopup("Ho Chi Minh ADN Precision Works");
  //   return null;
  // };

  return (
    // Important! Always set the container height explicitly
    <NetworkMapContainer>
      <MapContainer center={[15.9030623, 105.8066925]} zoom={5}>
        {/* <MarkerMapLoad /> */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[10.762622, 106.660172]} icon={mapMarker}>
          <Popup>ADN Precision Works Ho Chi Minh</Popup>
        </Marker>
      </MapContainer>
    </NetworkMapContainer>
  );
};

export default NetworkMap;

const NetworkMapContainer = styled.div`
  height: 400px;
  width: 100%;

  .leaflet-container {
    height: 100%;
  }
`;
