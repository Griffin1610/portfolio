import Link from 'next/link';
import { ResumeIcon } from '../../components/icons';

export default function ResumePage() {
    return (
        <div className="pt-40 pl-[10%]">
            <div className="animate-fade-in">
                <h1 className="font-heading text-4xl">resume</h1>
                <h3 className="font-heading2 text-large pt-10">Thanks for checking out my portfolio!</h3>
                <h3 className="font-heading2 text-large pt-2">Please click the icon below to view my detailed experience in my resume
                </h3>
                <Link href="/Griffin_Polly_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="pt-15 ml-50">
                        <ResumeIcon className="w-20 cursor-pointer"/>
                    </div>
                </Link>
            </div>
        </div>
    );
}