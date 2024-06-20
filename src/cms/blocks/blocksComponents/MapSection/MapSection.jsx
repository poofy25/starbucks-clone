'use client'

import Image from 'next/image'
import Link from 'next/link'
import {APIProvider, Map , AdvancedMarker, useMap, useAdvancedMarkerRef, InfoWindow} from '@vis.gl/react-google-maps';

import { useState, useCallback } from 'react';

import GlovoIconSvg from '/public/svgs/glovoDelivery.svg'
import StrausIconSvg from '/public/svgs/strausDelivery.svg'


export default function MapSection({blockData}) {
  const locations = blockData.locations



  return (
    <section className='w-full h-full flex flex-col justify-center items-center relative'>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY}>
            <LocationBlocks locations={locations}/>
            <div className='relative w-full h-[700px]'>
            <Map
            style={{width: '100%', height: '700px'}}
            defaultCenter={{lat: 47.02518789880545, lng: 28.83476631234761}}
            defaultZoom={11}
            gestureHandlig={'greedy'}
            disableDefaultUI={true}
            mapId='MAP_ID'
            >
              <PoiMarkers pois={locations} />
            </Map>
            </div>
            
        </APIProvider>
    </section>
  )
}

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
    <div className='flex w-[1410px] gap-[30px]'>
    {locations.map((location, index) => {

      const position = {
        lat:location.location[0],
        lng:location.location[1],
      }

      const isSelected = currentLocation === index
      return (
        <div className={`${isSelected ? 'border-brand_red' : "border-white"}
        border-2 border-solid 
        bg-white rounded-[30px] gap-1 cursor-pointer flex-1 p-8 mb-8 flex items-start justify-start flex-col`}
        key={index} onClick={()=>handleClick(position, index)}>
          <h4 className='text-[22px] font-bold mb-1'>{location.city}</h4>
          <p>{location.adress}</p>
          <p>Livrare și precomandă</p>
          <p>{location.phone}</p>
          <p>{location.email}</p>
          <p>{location.workingHours}</p>
          <div className='flex gap-4 mt-3'>
            <Link href='/#' className='cursor-pointer'><Image src={GlovoIconSvg} alt='deliveryLogo' width='40' height='40'/></Link>
            <Link href='/#' className='cursor-pointer'><Image src={StrausIconSvg} alt='deliveryLogo' width='40' height='40'/></Link>
          </div>
        </div>
      )
    })}
    </div>
  )
}