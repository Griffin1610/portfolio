import Image from 'next/image';
import { JavaScriptIcon, TypeScriptIcon, PythonIcon, CSIcon, PHPIcon, ReactIcon, NextIcon, NodeJSIcon, LaravelIcon, ElectronIcon, GitIcon, TailwindIcon } from '../../components/icons';

export default function aboutPage() {
    const iconHover = "inline-block transition-all hover:scale-120 hover:drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)]";
    return (
        <section className="pl-[10%] h-screen pt-40">
            <div className="animate-fade-in">
                <h1 className="font-heading text-4xl">About Me</h1>
                    <div className="flex">
                        <p className="font-body pt-5 w-[50%]">
                            I am an entry-level software developer who graduated from the University of Wisconsin-Whitewater with a Bachelors of Science in Computer Science in December of 2025.
                            <br></br>
                            <br></br>
                            I have professional experience building full stack web applications using TypeScript, JavaScript, React, and Next.js through an Agile and Git environment. I also have additional experience building Python and .NET applications. 
                            I'm passionate about contributing to meaningful work, and I am excited to make a positive impact on a team.
                        </p>
                        <div className="pl-40">
                            <Image src="/headshot.png" alt="headshot" width={150} height={100}/>
                        </div>
                    </div>
                    <div className="gap-10">
                        <h3 className="font-heading2 text-xl pl-30 pt-15">Some of The Technologies I'm Experienced with</h3>
                        <div id="row-1"className="flex pt-10">
                            <JavaScriptIcon className={`w-20 ml-33 ${iconHover}`} />
                            <TypeScriptIcon className={`w-20 ml-10 ${iconHover}`} />
                            <PythonIcon className={`w-20 ml-10 ${iconHover}`} />
                            <CSIcon className={`w-20 ml-10 ${iconHover}`} />
                        </div>
                        <div id="row-2" className="flex pt-5">
                            <PHPIcon className={`w-20 ml-33 ${iconHover}`} />
                            <ReactIcon className={`w-20 ml-10 ${iconHover}`} />
                            <NextIcon className={`w-20 ml-10 ${iconHover}`} />
                            <NodeJSIcon className={`w-20 ml-10 ${iconHover}`} />
                        </div>
                        <div id="row-3" className="flex pt-5">
                            <LaravelIcon className={`w-20 ml-33 ${iconHover}`} />
                            <ElectronIcon className={`w-20 ml-10 ${iconHover}`} />
                            <GitIcon className={`w-20 ml-10 ${iconHover}`} />
                            <TailwindIcon className={`w-20 ml-10 ${iconHover}`} />
                        </div>
                    </div>
                </div>
        </section>
    );
}