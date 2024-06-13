import { Icon } from "@iconify/react";

export function Footers(){
    return (
        <div className="mt-7 pb-12 px-8 pt-2 w-full border-t bg-black/80 flex items-center justify-between">
            <div className="flex items-center gap-1">
                <Icon icon='material-symbols:copyright' className="size-6" />
                <p>Ace Design 2024</p>
            </div>
            <div className="flex items-center gap-2">
                <Icon icon='foundation:social-facebook' className="size-8" />
                <Icon icon='foundation:social-instagram' className="size-8" />
                <Icon icon='foundation:social-github' className="size-8" />
                <Icon icon='foundation:social-steam' className="size-8" />
            </div>
        </div>
    );
}