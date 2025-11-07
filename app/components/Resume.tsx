import Link from "next/link";
import { ResumeIcon } from "./icons";

export default function Resume() {
    return (
        <section className="h-screen pl-[10%] pt-40">
            <h1 className="font-heading text-4xl">resume</h1>
            <h3 className="font-heading text-large pt-2">Please click below to view my Resume</h3>
            <Link href="/Polly_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <div className="pl-25 pt-15">
                    <ResumeIcon className="w-20 cursor-pointer"/>
                </div>
            </Link>
            <h3 className="font-heading text-large pt-15">Thank you for visting my portfolio!</h3>
        </section>
    )
}