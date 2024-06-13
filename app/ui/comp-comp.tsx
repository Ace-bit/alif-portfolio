'use client';

import Image from "next/image";
import { VideoCameraIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export function PortoModal({
    bsrc,
    btitle,
    dtype,
    dsrc,
    dw,
    dh,
    dtitle,
} : {
    bsrc:string;
    btitle:string;
    dtype:string;
    dsrc:string;
    dw:number;
    dh:number;
    dtitle:string;
}){
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    return (
    <div>
        <button 
            onClick={() => setModalOpen(true)}
            className="relative group w-full aspect-square flex items-center justify-center bg-black"
        >
            <Image src={bsrc} width={500} height={500} alt="" className="group-hover:grayscale max-h-full w-auto"></Image>
            <div className="absolute bottom-0 md:hidden group-hover:block w-full p-4 text-center align-middle text-xl font-medium drop-shadow-xl bg-green-700/90">{btitle}</div>
        </button>

        <Transition show={modalOpen} as={Fragment}>
        <Dialog onClose={() => setModalOpen(false)}>

          {/* 2. The backdrop layer */}
          <div
            className="fixed inset-0 z-50 bg-green-950/90 backdrop-blur-lg"
            aria-hidden="true"
          />

          {/* 3. The modal video */}
          <div className="fixed inset-0 z-50 flex p-6 scale-100">
            <div className="max-w-5xl mx-auto h-full flex items-center">
              <Dialog.Panel className="w-full max-h-full shadow-2xl aspect-auto relative">
                <div className="absolute -top-11 left-0 flex items-center p-2 rounded-t-md bg-black gap-2">
                  <VideoCameraIcon className="w-4 h-4" />
                  <p className="text-xl font-semibold">{dtitle}</p>
                </div>
                <button className="absolute -top-11 right-0 flex items-center p-2 rounded-t-md bg-black" onClick={() => setModalOpen(false)}>
                  <XMarkIcon className="w-7 h-7" />
                </button>
                {(dtype === 'mp4') &&
                  <video width={dw} height={dh} loop controls autoPlay className="w-auto max-h-[calc(100dvh_-_8rem)]">
                    <source src={dsrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                }
                {(dtype === 'gif') &&
                  <Image src={dsrc} width={dw} height={dh} alt="" unoptimized className="max-h-[calc(100dvh_-_8rem)]" />
                }
                {(dtype === 'html') &&
                  <iframe src={dsrc} width={dw} height={dh} className="max-w-full max-h-[calc(100dvh_-_8rem)]" />
                }
              </Dialog.Panel>
            </div>
          </div>

        </Dialog>
      </Transition>

    </div>
    );
}