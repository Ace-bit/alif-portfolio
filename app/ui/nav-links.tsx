'use client'
 
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
 
export function NavLinks() {
  const pathname = usePathname()
 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-transparent border-b border-white">
      <nav className="mx-0 md:mx-auto flex max-w-screen-2xl items-center px-8" aria-label="Global">
        <div className="flex">
            <UserIcon className="h-8 w-auto" />
        </div>
        <div className="flex flex-1 justify-end md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center py-5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 fill-white" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <Link href="/" className={`link ${pathname === '/' ? 'p-5 text-1xl leading-6 cursor-not-allowed text-green-300' : 'p-5 text-1xl font-semibold leading-6 text-white hover:bg-green-900'}`}>
            Me
          </Link>
          <Link href="/portofolio" className={`link ${pathname === '/portofolio' ? 'p-5 text-1xl leading-6 cursor-not-allowed text-green-300' : 'p-5 text-1xl font-semibold leading-6 text-white hover:bg-green-900'}`}>
            Portofolio
          </Link>
        </div>
      </nav>
      <Dialog className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-2/3 overflow-y-auto bg-green-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className={`link ${pathname === '/' ? '-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white border-l' : '-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white'}`}
                >
                  Me
                </a>
                <a
                  href="/portofolio"
                  className={`link ${pathname === '/portofolio' ? '-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white border-l' : '-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white'}`}
                >
                  Portofolio
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}