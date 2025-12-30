import Link from 'next/link';
import { ResumeIcon } from '../../components/icons';

export default function ResumePage() {
    return (
        <div id="right" className="pt-[20%] pl-[20%]">
            <h1 className="font-heading text-5xl">resume</h1>
            <h3 className="font-heading2 text-large pt-4">Thanks for checking out my portfolio!</h3>
            <h3 className="font-heading2 text-large pt-2">Please click the icon below to view my detailed experience in my resume
            </h3>
            <Link href="/Griffin_Polly_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <div className="pt-15 ml-50">
                    <ResumeIcon className="w-20 cursor-pointer"/>
                </div>
            </Link>
        </div>
    );
}