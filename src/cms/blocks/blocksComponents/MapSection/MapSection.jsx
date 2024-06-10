'use client'

import Image from 'next/image'
import Link from 'next/link'
import {APIProvider, Map , AdvancedMarker , Pin} from '@vis.gl/react-google-maps';


const PoiMarkers = (props) => {
  return (
    <>
      {props.pois.map((poi, index) => {
        const location = {
          lat:poi.location[0],
          lng:poi.location[1],
        }
        return (
          <AdvancedMarker
            key={index}
            position={location}>
            <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
          </AdvancedMarker>
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

