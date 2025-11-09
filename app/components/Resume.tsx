import Link from "next/link";
import { ResumeIcon } from "./icons";

export default function Resume() {
    return (
        <section className="h-screen pl-[10%] pt-30 w-[70%]">
                <div id="left">
                    <h1 className="font-heading text-4xl">Experience</h1>
                    <div id="internship">
                        <h3 className="text-xl font-heading2 pt-7">Software Development Intern</h3>
                        <h3 className="text-large font-body">Blain Supply | Janesville, Wi | June 2025 - Aug 2025</h3>
                            <li className="font-body pt-2 ml-3">Developed a retrieval-augmented generation (RAG) web application using TypeScript, React, Next.js, Azure AI Foundry, Azure
                                Machine Learning Studio to streamline knowledge access for 400+ employees</li>
                            <li className="font-body pt-2 ml-3">Collaborated in an Agile/Scrum environment utilizing Azure DevOps and Git version control for
                                task management</li>
                    </div>
                    <div id="research">
                        <h3 className="text-xl font-heading2 pt-7">Undergraduate Research</h3>
                        <h3 className="text-large font-body">UW-Whitewater | Whitewater, Wi | Sept 2024 - December 2025</h3>
                            <li className="font-body pt-2 ml-3">Developing a semi-autonomous drone swarm in Python as assistance to a master’s thesis
                                project, integrating computer vision through OpenCV for object detection and navigation.</li>
                            <li className="font-body pt-2 ml-3">Collaborating through in-person team collaboration and Git-based version control.</li>
                    </div>
                    <div id="certification">
                        <h3 className="text-xl font-heading2 pt-7">Certification</h3>
                        <h3 className="text-large font-body">Google Professional Machine Learning Engineer | Issued: February 2025</h3>
                            <li className="font-body pt-2 ml-3">View the certification here: 
                                <Link className="underline text-blue-500 pl-2" href="https://www.credly.com/badges/2bcc8327-5b3a-418c-9e05-1156b1be03e7/public_url">Google PMLE Certification</Link>
                            </li>
                    </div>
                </div>
                <div id="right" className="pt-10">
                    <h1 className="font-heading text-4xl">resume</h1>
                    <h3 className="font-heading2 text-large pt-2">click the icon below to view my resume
                    </h3>
                    <Link href="/Polly_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <div className="pt-5 ml-10">
                            <ResumeIcon className="w-20 cursor-pointer"/>
                        </div>
                    </Link>
                </div>
        </section>
    )
}