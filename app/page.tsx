import Image from "next/image";
import { AcademicCapIcon, BriefcaseIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";

const logos = [
  {icon:'logos:adobe-after-effects',size:'70%'},
  {icon:'logos:adobe-premiere',size:'40%'},
  {icon:'logos:adobe-photoshop',size:'15%'},
  {icon:'logos:adobe-illustrator',size:'10%'},
  {icon:'logos:nextjs-icon',size:'45%'},
  {icon:'logos:laravel',size:'15%'},
  {icon:'logos:tailwindcss-icon',size:'35%'},
]

export default function Home() {
  return (
    <div className="mx-0 md:mx-auto max-w-7xl p-2">
      <div className="flex flex-wrap gap-8 mt-3">
        {/* Me Section */}
        <div className="flex flex-col lg:flex-row w-full items-center gap-2">
          <div className="basis-full lg:basis-auto flex justify-center">
            <Image
              src="/my-avatar.jpg"
              width={400}
              height={400}
              alt="My Photo"
              className="rounded-full"
            />
          </div>
          <div className="basis-full lg:basis-auto">
            <p className="text-3xl lg:text-5xl text-center lg:text-left font-bold">Muhammad Alif Ramadhan</p>
            <p className="text-lg lg:text-xl text-center lg:text-left font-medium">Motion Designer & Web Development</p>
          </div>
        </div>
        {/* Skill Section */}
        <div className="flex flex-col md:flex-row-reverse w-full items-center gap-2">
          <div className="basis-full md:basis-auto bg-black p-3 flex flex-col rounded-tr-3xl rounded-bl-3xl">
            <p className="text-center md:text-left text-5xl font-bold mb-2">Skill</p>
            <div className="flex flex-wrap md:flex-nowrap gap-2">
              {/* AE */}
              <div className="w-auto">
                <Icon icon='logos:adobe-after-effects' className="size-12 mb-1" />
                <div className="w-full rounded-sm bg-white">
                  <div className={`w-[70%] h-1 bg-green-700`}></div>
                </div>
              </div>
              {/* PR */}
              <div className="w-auto">
                <Icon icon='logos:adobe-premiere' className="size-12 mb-1" />
                <div className="w-full rounded-sm bg-white">
                  <div className={`w-[40%] h-1 bg-green-700`}></div>
                </div>
              </div>
              {/* PS */}
              <div className="w-auto">
                <Icon icon='logos:adobe-photoshop' className="size-12 mb-1" />
                <div className="w-full rounded-sm bg-white">
                  <div className={`w-[15%] h-1 bg-green-700`}></div>
                </div>
              </div>
              {/* AI */}
              <div className="w-auto">
                <Icon icon='logos:adobe-illustrator' className="size-12 mb-1" />
                <div className="w-full rounded-sm bg-white">
                  <div className={`w-[10%] h-1 bg-green-700`}></div>
                </div>
              </div>
              {/* Next */}
              <div className="w-auto">
                <Icon icon='logos:nextjs-icon' className="size-12 mb-1" />
                <div className="w-full rounded-sm bg-white">
                  <div className={`w-[45%] h-1 bg-green-700`}></div>
                </div>
              </div>
              {/* Laravel */}
              <div className="w-auto">
                <Icon icon='logos:laravel' className="size-12 mb-1" />
                <div className="w-full rounded-sm bg-white">
                  <div className={`w-[15%] h-1 bg-green-700`}></div>
                </div>
              </div>
              {/* Tailwind */}
              <div className="w-auto">
                <Icon icon='logos:tailwindcss-icon' className="size-12 mb-1" />
                <div className="w-full rounded-sm bg-white">
                  <div className={`w-[35%] h-1 bg-green-700`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Timeline Section */}
        <div className="flex flex-col md:flex-row w-full items-center gap-2">
          <div className="basis-full md:basis-auto bg-black p-3 rounded-tl-3xl rounded-br-3xl">
            <p className="text-center md:text-left text-5xl font-bold mb-2">Timeline</p>
            <div className="ml-6 mt-6">
              <ol className="relative border-s border-gray-700">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-green-800 rounded-full -start-3 ring-8 ring-green-800">
                    <AcademicCapIcon />
                  </span>
                  <h3 className="flex items-center mb-1 text-xl font-semibold text-white">Vocational High School</h3>
                  <p className="block mb-2 text-sm font-normal leading-none text-gray-500">2010-2013</p>
                  <ul className="mb-4 list-disc list-inside text-base font-normal text-gray-400">
                    <li>Learn a Design Structure {'('}Adobe Photoshop & Adobe Illustrator{')'}</li>
                    <li>Learn a Animate Structur {'('}Adobe Animate{')'}</li>
                    <li>Learn a Logic Code {'('}Actionscript 3.0{')'}</li>
                    <li>Learn a 3D Concept {'('}3Ds Max{')'}</li>
                    <li>Create a Video Music {'('}Adobe Premiere Pro & Adobe After Effect{')'}</li>
                    <li>Create a Module Interactive {'('}Adobe Animate & Actionscript 3.0{')'}</li>
                  </ul>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-green-800 rounded-full -start-3 ring-8 ring-green-800">
                    <BriefcaseIcon />
                  </span>
                  <h3 className="flex items-center mb-1 text-xl font-semibold text-white">Web Development {'('}Yapindo Jaya Abadi{')'}</h3>
                  <p className="block mb-2 text-sm font-normal leading-none text-gray-500">2013-2014</p>
                  <ul className="mb-4 list-disc list-inside text-base font-normal text-gray-400">
                    <li>Develop a Desktop App {'('}Actionscript 3.0{')'}</li>
                    <li>Migrate a Desktop App to Android App {'('}Java{')'}</li>
                    <li>Develop a Android App {'('}Java{')'}</li>
                    <li>Create a Company Website {'('}HTML,CSS,Javascript{')'}</li>
                  </ul>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-green-800 rounded-full -start-3 ring-8 ring-green-800">
                    <AcademicCapIcon />
                  </span>
                  <h3 className="flex items-center mb-1 text-xl font-semibold text-white">University Indraprasta</h3>
                  <p className="block mb-2 text-sm font-normal leading-none text-gray-500">2015</p>
                  <ul className="mb-4 list-disc list-inside text-base font-normal text-gray-400">
                    <li>Learn a Logic Code {'('}Java{')'}</li>
                    <li>Learn a Website Structure {'('}HTML,CSS,Javascript{')'}</li>
                    <li>Learn a Android App {'('}Java{')'}</li>
                    <li>Create a Website {'('}HTML,CSS,Javascript{')'}</li>
                    <li>Create a Android App {'('}Java{')'}</li>
                  </ul>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-green-800 rounded-full -start-3 ring-8 ring-green-800">
                    <BriefcaseIcon />
                  </span>
                  <h3 className="flex items-center mb-1 text-xl font-semibold text-white">Motion Designer {'('}Hakuhodo Jakarta{')'}</h3>
                  <p className="block mb-2 text-sm font-normal leading-none text-gray-500">2019-2024</p>
                  <ul className="mb-4 list-disc list-inside text-base font-normal text-gray-400">
                    <li>Create a Motion for HTML5 Banner {'('}Google Web Designer{')'}</li>
                    <li>Create a Motion for Sosial Media {'('}Adobe After Effect{')'}</li>
                    <li>Create a Video for Internal Video Client {'('}Adobe Premiere Pro & Adobe After Effect{')'}</li>
                    <li>Create a Company Website {'('}Next.js{')'}</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
        {/* Info Section */}
        <div className="flex flex-col md:flex-row-reverse w-full items-center gap-2">
          <div className="basis-full md:basis-auto bg-black p-3 rounded-tr-3xl rounded-bl-3xl">
            <p className="text-center md:text-left text-5xl font-bold mb-2">Information</p>
            <div className="flex">
              <EnvelopeIcon className="h-6 w-6" />
              <span className="ml-2 font-medium">muhammadaliframadhan95@gmail.com</span>
            </div>
            <div className="flex">
              <MapPinIcon className="h-6 w-6" />
              <span className="ml-2 font-medium">Jakarta, Indonesia</span>
            </div>
          </div>
        </div>
        {/* End Section */}
      </div>
    </div>
  );
}
