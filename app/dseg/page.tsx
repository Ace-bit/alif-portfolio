import Image from "next/image";

export default function DSEG() {
    return (
        <div className="min-w-[500px] min-h-[176px] max-w-[500px] max-h-[176px] m-0 p-0 overflow-hidden">
            <Image src="djarum_sample_500x176.gif" alt="dj-sample" width={500} height={176}/>
        </div>
    )
}