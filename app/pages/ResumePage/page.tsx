import Link from 'next/link';
import { ResumeIcon } from '../../components/icons';

export default function ResumePage() {
    return (
        <div id="right" className="pt-40 pl-[10%]">
            <h1 className="font-heading text-4xl">resume</h1>
            <h3 className="font-heading2 text-large pt-2">click the icon below to view my resume
            </h3>
            <Link href="/Polly_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <div className="pt-25 ml-10">
                    <ResumeIcon className="w-20 cursor-pointer"/>
                </div>
            </Link>
        </div>
    );
}