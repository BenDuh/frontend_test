import React from "react";

import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import styled from "styled-components";

interface Props {
  position?: LatLngExpression;
  cityName?: string;
}

const Title = styled.span`
  font-size: 17px;
  weight: 400;
`;
export default function Map({ position, cityName }: Props) {
  const ChangeView = ({ center, zoom }: any) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  };

  return (
    <MapContainer center={position ? position : [40, -118]} zoom={5}>
      {position && <ChangeView center={position} zoom={8} />}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {position && (
        <Marker position={position}>
          <Popup>
            <Title>{cityName}</Title>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
