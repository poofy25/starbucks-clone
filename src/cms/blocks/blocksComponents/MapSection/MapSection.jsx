'use client'

import Image from 'next/image'
import Link from 'next/link'
import {APIProvider, Map} from '@vis.gl/react-google-maps';


export default function MapSection() {
  return (
    <section className='w-full h-full mx-16'>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY}>
            <Map
            style={{width: '100%', height: '100%'}}
            defaultCenter={{lat: 47.02518789880545, lng: 28.83476631234761}}
            defaultZoom={13}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            />
        </APIProvider>
    </section>
  )
}
