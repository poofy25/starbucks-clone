import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from '@payload-config'

import SplitSection from './SplitSection'


export default async function HomePageContent() {

    const payload = await getPayloadHMR({config:configPromise})

    const data = await payload.find({
        collection:"section"
    })

    const sectionsData = data.docs[0].SplitSection
    console.log(sectionsData)
    return (
        <section className="px-8 flex flex-col gap-8">

            {sectionsData.map((block, index) => {
                return (
                    <SplitSection blockData={block} key={index}/>
                )
            })}

        </section>
    );
}