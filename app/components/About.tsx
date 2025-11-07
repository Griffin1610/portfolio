import Image from 'next/image';
import { ReactIcon, NextIcon, TypeScriptIcon, JavaScriptIcon, PHPIcon, PythonIcon, CSIcon, GitIcon, TailwindIcon, LaravelIcon, NodeJSIcon, ElectronIcon } from '../components/icons';

export default function About() {
    return (
        <section className="pl-[10%] h-screen pt-30">
            <h1 className="font-heading text-4xl">About Me</h1>
                <div className="flex">
                    <p className="font-body pt-5 w-[50%]">
                        I am a software developer graduating in December 2025 from the University of Wisconsin–Whitewater. 
                        I have practical experience building web applications using TypeScript, JavaScript, React, and Next.js, with additional experience using Python and C#. 
                        I'm passionate about contributing to meaningful work, and I am excited to make a positive impact on a team.
                    </p>
                    <div className="pl-40 -mt-8">
                        <Image src="/headshot.png" alt="headshot" width={150} height={100}/>
                    </div>
                </div>
                <div className="gap-10">
                    <h3 className="font-heading text-xl pl-30 pt-15">Some of The Technologies Im Experienced with</h3>
                    <div id="row-1"className="flex pt-10">
                        <JavaScriptIcon className="w-20 ml-33" />
                        <TypeScriptIcon className="w-20 ml-10" />
                        <PythonIcon className="w-20 ml-10" />
                        <CSIcon className="w-20  ml-10" />
                    </div>
                    <div id="row-2" className="flex pt-5">
                        <PHPIcon className="w-20 ml-33" />
                        <ReactIcon className="w-20 ml-10" />
                        <NextIcon className="w-20 ml-10" />
                        <NodeJSIcon className="w-20  ml-10" />
                    </div>
                    <div id="row-3" className="flex pt-5">
                        <LaravelIcon className="w-20 ml-33" />
                        <ElectronIcon className="w-20  ml-10" />
                        <GitIcon className="w-20  ml-10" />
                        <TailwindIcon className="w-20  ml-10" />
                    </div>
                </div>
        </section>
    )
}