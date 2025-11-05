'use client'
import { ResumeIcon } from "./icons";

export default function Resume() {

    const handleClick = (url : string) => {
        window.open(url, "_blank", "noreferrer");
    }

    return (
        <section id="resume" className="h-screen pl-[10%]">
            <h1 className="font-heading text-4xl">resume</h1>
            <h3 className="font-heading text-xl pt-10 pl-60">Please click below to view my Resume</h3>
           <ResumeIcon className="w-20 mt-10" onClick={() => handleClick("/Polly_Resume.pdf")}/>
        </section>
    )
}