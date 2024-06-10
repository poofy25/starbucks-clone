'use client'

import Image from 'next/image'
import Link from 'next/link'
import {APIProvider, Map , AdvancedMarker, useMap, useAdvancedMarkerRef, InfoWindow} from '@vis.gl/react-google-maps';

import { useState, useCallback } from 'react';

const PoiMarkers = (props) => {
  

  return (
    <>
      {props.pois.map((poi, index) => {
        const location = {
          lat:poi.location[0],
          lng:poi.location[1],
        }
        return (
          <MarkerWithInfoWindow position={location} key={index}/>
        )
        
      })}
    </>
  );
};

export default function MapSection({blockData}) {
  const locations = blockData.locations



  return (
    <section className='w-full h-full px-16'>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY}>
            <LocationBlocks locations={locations}/>
            <Map
            style={{width: '100%', height: '100%'}}
            defaultCenter={{lat: 47.02518789880545, lng: 28.83476631234761}}
            defaultZoom={11}
            gestureHandlig={'greedy'}
            disableDefaultUI={true}
            mapId='MAP_ID'
            >
              <PoiMarkers pois={locations} />
            </Map>
            
        </APIProvider>
    </section>
  )
}

const MarkerWithInfoWindow = ({position}) => {

  const [markerRef, marker] = useAdvancedMarkerRef();
  const map = useMap()

  const [infoWindowShown, setInfoWindowShown] = useState(false);

  // clicking the marker will toggle the infowindow
  const handleMarkerClick = (ev) => {
      setInfoWindowShown(isShown => !isShown)
      map.panTo(ev.latLng);
      map.setZoom(15)
    }
    


  // if the maps api closes the infowindow, we have to synchronize our state
  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={position}
        onClick={handleMarkerClick}
      />

      {infoWindowShown && (
        <InfoWindow anchor={marker} onClose={handleClose}>
          <h2>InfoWindow content!</h2>
          <p>Some arbitrary html to be rendered into the InfoWindow.</p>
        </InfoWindow>
      )}
    </>
  );
};

const LocationBlocks = ({locations}) => {
  const map = useMap()
  console.log('map:' , map)

  const [currentLocation, setCurrentLocation] = useState(null)

  const handleClick = (position, index) => {
    map.panTo(position);
    map.setZoom(15)
    setCurrentLocation(index)
  }


  return (
    <div className='flex w-full gap-8'>
    {locations.map((location, index) => {

      const position = {
        lat:location.location[0],
        lng:location.location[1],
      }

      const isSelected = currentLocation === index

      return (
        <div className={`${isSelected ? 'bg-red-500' : ""} cursor-pointer flex-1 p-4 flex items-center justify-center flex-col`}
         key={index} onClick={()=>handleClick(position, index)}><h3>{location.adress}</h3></div>
      )
    })}
    </div>
  )
}