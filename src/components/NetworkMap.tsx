import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import { icon } from "leaflet";

interface Props {
  height?: string;
  zoom?: number;
}

const NetworkMap = ({ height, zoom }: Props) => {
  const mapMarker = icon({
    iconUrl: require("../assets/app-map-marker.png"),
    iconSize: [20, 20], // size of the icon
    // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  return (
    // Important! Always set the container height explicitly
    <NetworkMapContainer height={height}>
      <MapContainer center={[15.9030623, 105.8066925]} zoom={zoom ?? 4.4}>
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

const NetworkMapContainer = styled.div<{ height?: string; }>`
  height: ${props => props.height ?? "15rem"};
  width: 100%;

  .leaflet-container {
    height: 100%;
  }
`;
