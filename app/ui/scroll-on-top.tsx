'use client';

import { ArrowUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export function ScrollToTop(){
    const [isVisible, setIsVisible] = useState(false);

    const ScrollInto = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
        if (window.pageYOffset > 70) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        };
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [isVisible]);
    return (
        <div className="fixed bottom-0 z-40 w-full flex justify-center">
          {isVisible && (
            <Link href="#tops" onClick={ScrollInto} className="size-10 bg-green-800 flex items-center justify-center rounded-t-md">
                <ArrowUpIcon className="size-5 fill-white animate-bounce" />
            </Link>
          )}
        </div>
    );
}