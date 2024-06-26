'use client'

import Image from 'next/image'
import Link from 'next/link'
import {APIProvider, Map , AdvancedMarker, useMap, useAdvancedMarkerRef, InfoWindow} from '@vis.gl/react-google-maps';

import { useState, useCallback, useEffect } from 'react';

import GlovoIconSvg from '/public/svgs/glovoDelivery.svg'
import StrausIconSvg from '/public/svgs/strausDelivery.svg'


//Map section component

export default function MapSection({blockData}) {

  const locations = blockData.locations

  return (
    <section className='w-full h-full flex flex-col justify-center items-center relative'>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY}>


            <LocationBlocks locations={locations}/>

            <div className='relative w-full h-[600px]
            laptop:h-[500px]
            '>
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
            </div>
            
        </APIProvider>
    </section>
  )
}

// Map markers
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

// Marker info window
const MarkerWithInfoWindow = ({position}) => {

  const [markerRef, marker] = useAdvancedMarkerRef();
  const map = useMap()

  const [infoWindowShown, setInfoWindowShown] = useState(false);

  // clicking the marker will toggle the infowindow
  const handleMarkerClick = (ev) => {
      setInfoWindowShown(isShown => !isShown)
      map.panTo(ev.latLng);
      map.setZoom(17)
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

// Location blocks
const LocationBlocks = ({locations}) => {
  const map = useMap()
  console.log('map:' , map)

  const [currentLocation, setCurrentLocation] = useState(0)

  const handleClick = (position, index) => {
    map.panTo(position);
    map.setZoom(17)
    setCurrentLocation(index)
  }

  useEffect(()=>{

    const defaultPosition = {
      lat:locations[0].location[0],
      lng:locations[0].location[1],
    }

    if (map){
      map.panTo(defaultPosition);
      map.setZoom(17)
    }
    
    console.log(defaultPosition)
  },[map, locations])


  return (
    <div className='site-container flex gap-[20px] mb-[70px]
    laptop:mb-[35px]
    tablet:overflow-auto tablet:[35px]

    '>

    {locations.map((location, index) => {

      const position = {
        lat:location.location[0],
        lng:location.location[1],
      }

      const isSelected = currentLocation === index
      return (
        <div className={`${isSelected ? 'border-brand_red' : "border-white"}
        border-2 border-solid bg-white rounded-[30px] gap-1 cursor-pointer flex-1 p-[30px] flex items-start justify-start flex-col
        laptop:p-[25px]
        tablet:min-w-[350px]
        `}

        key={index}
        onClick={()=>handleClick(position, index)}
        >

          <h4 className='text-[22px] font-bold mb-1'>{location.city}</h4>
          <p>{location.adress}</p>
          <h5 className='mt-[10px] font-[500]'>Livrare și precomandă</h5>
          <Link className='opacity-50' href={location.phoneHref}>{location.phone}</Link>
          <Link className='opacity-50' href={location.emailHref}>{location.email}</Link>
          <h5 className='mt-[10px] font-[500]'>{location.workingHours}</h5>

          <div className='flex gap-4 mt-3'>
            <Link href='/#' className='cursor-pointer'><Image src={GlovoIconSvg} alt='deliveryLogo' width='35' height='35'/></Link>
            <Link href='/#' className='cursor-pointer'><Image src={StrausIconSvg} alt='deliveryLogo' width='35' height='35'/></Link>
          </div>
        </div>
      )
    })}
    </div>
  )
}