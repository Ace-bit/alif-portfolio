import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { PortoModal } from '../ui/comp-comp'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata:Metadata = {
    title:'Portofolio'
}

const data_zurich = [
    {bsrc:'/portofolio/zurich/thumbnails/1.jpg',btitle:'Instagram Post',dtype:'mp4',dsrc:'/portofolio/zurich/1.mp4',dw:1080,dh:1080,dtitle:'Instagram Post 1:1',},
    {bsrc:'/portofolio/zurich/thumbnails/2.jpg',btitle:'Google Ads',dtype:'gif',dsrc:'/portofolio/zurich/2.gif',dw:970,dh:90,dtitle:'Google Ads 970x90',},
    {bsrc:'/portofolio/zurich/thumbnails/3.jpg',btitle:'Google Ads',dtype:'gif',dsrc:'/portofolio/zurich/3.gif',dw:728,dh:90,dtitle:'Google Ads 728x90',},
    {bsrc:'/portofolio/zurich/thumbnails/4.jpg',btitle:'Google Ads',dtype:'gif',dsrc:'/portofolio/zurich/4.gif',dw:300,dh:250,dtitle:'Google Ads 300x250',},
    {bsrc:'/portofolio/zurich/thumbnails/5.jpg',btitle:'Instagram Story',dtype:'mp4',dsrc:'/portofolio/zurich/5.mp4',dw:1080,dh:1920,dtitle:'Instagram Story 9:16',},
    {bsrc:'/portofolio/zurich/thumbnails/6.jpg',btitle:'Youtube Ads',dtype:'mp4',dsrc:'/portofolio/zurich/6.mp4',dw:1920,dh:1080,dtitle:'Youtube Ads 16:9',},
]

const data_olx = [
    {bsrc:'/portofolio/olx/thumbnails/1.jpg',btitle:'Internal Video',dtype:'mp4',dsrc:'/portofolio/olx/1.mp4',dw:1920,dh:1080,dtitle:'Internal Video 16:9',},
    {bsrc:'/portofolio/olx/thumbnails/2.jpg',btitle:'Billboard',dtype:'mp4',dsrc:'/portofolio/olx/2.mp4',dw:1920,dh:1080,dtitle:'Billboard 16:9',},
    {bsrc:'/portofolio/olx/thumbnails/3.jpg',btitle:'Lift Video',dtype:'mp4',dsrc:'/portofolio/olx/3.mp4',dw:1080,dh:1920,dtitle:'Lift Video 9:16',},
]

const data_jcb = [
    {bsrc:'/portofolio/jcb/thumbnails/1.jpg',btitle:'Instagram Post',dtype:'mp4',dsrc:'/portofolio/jcb/1.mp4',dw:1080,dh:1920,dtitle:'Instagram Post 9:16',},
    {bsrc:'/portofolio/jcb/thumbnails/2.jpg',btitle:'Instagram Post',dtype:'mp4',dsrc:'/portofolio/jcb/2.mp4',dw:1080,dh:1920,dtitle:'Instagram Post 9:16',},
    {bsrc:'/portofolio/jcb/thumbnails/3.jpg',btitle:'Instagram Post',dtype:'mp4',dsrc:'/portofolio/jcb/3.mp4',dw:1080,dh:1920,dtitle:'Instagram Post 9:16',},
    {bsrc:'/portofolio/jcb/thumbnails/4.jpg',btitle:'Youtube Ads',dtype:'mp4',dsrc:'/portofolio/jcb/4.mp4',dw:1920,dh:1080,dtitle:'Youtube Ads 16:9',},
    {bsrc:'/portofolio/jcb/thumbnails/5.jpg',btitle:'Facebook Ads',dtype:'mp4',dsrc:'/portofolio/jcb/5.mp4',dw:1200,dh:628,dtitle:'Facebook Ads 16:9',},
]

const data_free = [
    {bsrc:'/portofolio/freelance/thumbnails/1.jpg',btitle:'Wedding Invitation',dtype:'html',dsrc:'/portofolio/freelance/weddinginvitation/index.html',dw:1280,dh:720,dtitle:'Wedding Invitation',},
    {bsrc:'/portofolio/freelance/thumbnails/2.jpg',btitle:'Company Profile',dtype:'html',dsrc:'/portofolio/freelance/companyprofile/index.html',dw:1280,dh:720,dtitle:'Company Profile',},
]

export default function Page(){
    return (
        <div className="mx-0 md:mx-auto max-w-7xl p-2">
            {/* Section Zurich */}
            <TabGroup>
                <TabList className="flex items-center justify-center gap-1">
                    <Tab className="p-2 data-[selected]:border-b data-[selected]:text-green-500 focus:outline-none">Motion</Tab>
                    {/*<Tab className="p-2 data-[selected]:border-b data-[selected]:text-green-500 focus:outline-none">Motion</Tab>*/}
                </TabList>
                <TabPanels>
                <TabPanel>
                        <p className='mt-7 text-center text-sm italic font-thin drop-shadow-xl'>{'*'}Click the image to show content</p>
                        <h1 className='mt-2 border-b text-5xl font-bold'>Zurich</h1>
                        <div className="columns-xs mt-3 gap-8 space-y-4">
                            {data_zurich.map((item) => (
                                <div key={item.btitle} className="w-full"><PortoModal bsrc={item.bsrc} btitle={item.btitle} dtype={item.dtype} dsrc={item.dsrc} dw={item.dw} dh={item.dh} dtitle={item.dtitle}/></div>
                            ))}
                        </div>
                        <h1 className='mt-7 border-b text-5xl font-bold'>OLX</h1>
                        <div className="columns-xs mt-3 gap-8 space-y-4">
                            {data_olx.map((item) => (
                                <div key={item.btitle} className="w-full"><PortoModal bsrc={item.bsrc} btitle={item.btitle} dtype={item.dtype} dsrc={item.dsrc} dw={item.dw} dh={item.dh} dtitle={item.dtitle}/></div>
                            ))}
                        </div>
                        <h1 className='mt-7 border-b text-5xl font-bold'>JCB</h1>
                        <div className="columns-xs mt-3 gap-8 space-y-4">
                            {data_jcb.map((item) => (
                                <div key={item.btitle} className="w-full"><PortoModal bsrc={item.bsrc} btitle={item.btitle} dtype={item.dtype} dsrc={item.dsrc} dw={item.dw} dh={item.dh} dtitle={item.dtitle}/></div>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <p className='mt-7 text-center text-sm italic font-thin drop-shadow-xl'>{'*'}Click the image to show content</p>
                        <h1 className='mt-2 border-b text-5xl font-bold'>Freelance</h1>
                        <div className="columns-xs mt-3 gap-8 space-y-4">
                            <a 
                                href='https://shoes-universe-store.vercel.app/'
                                target='blank'
                                className="relative group w-full aspect-square flex items-center justify-center bg-black"
                            >
                                <Image 
                                    src="/portofolio/freelance/thumbnails/3.jpg"
                                    width={500} 
                                    height={500} 
                                    alt="e-commerce" 
                                    className="group-hover:grayscale"
                                />
                                <div className="absolute bottom-0 md:hidden group-hover:block w-full p-4 text-center align-middle text-xl font-medium drop-shadow-xl bg-green-700/90">
                                    E-Commerce
                                </div>
                            </a>
                            {data_free.map((item) => (
                                <div key={item.btitle} className="w-full"><PortoModal bsrc={item.bsrc} btitle={item.btitle} dtype={item.dtype} dsrc={item.dsrc} dw={item.dw} dh={item.dh} dtitle={item.dtitle}/></div>
                            ))}
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
            
        </div>
    );
}