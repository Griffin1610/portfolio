import Link from "next/link";

export default function ExperiencePage() {
    return (
        <section className="h-screen pl-[10%] pt-40 w-[70%]">
                <div>
                    <h1 className="font-heading text-4xl">Experience</h1>
                    <div id="internship">
                        <h3 className="text-xl font-heading2 pt-10">Software Development Intern</h3>
                        <h3 className="text-large font-body">Blain Supply | Janesville, Wi | June 2025 - Aug 2025</h3>
                            <li className="font-body pt-2 ml-3"> Developed a retrieval-augmented generation (RAG) web application using TypeScript, React, Next.js, 
                                Azure AI Foundry, Azure AD to streamline internal knowledge access for 400+ employees. This reduced 
                                key information lookup time from an average of 10 minutes to less than 20 seconds. 
                            </li>
                            <li className="font-body pt-2 ml-3">
                                 Collaborated in an Agile/Scrum environment as a software developer, utilizing Azure DevOps for 
                                CI/CD and task management, as well as Git version control.
                            </li>
                    </div>
                    <div id="research">
                        <h3 className="text-xl font-heading2 pt-10">Undergraduate Research</h3>
                        <h3 className="text-large font-body">UW-Whitewater | Whitewater, Wi | Sept 2024 - December 2025</h3>
                            <li className="font-body pt-2 ml-3"> Engineered a semi-autonomous drone swarm of 3 drones in Python as assistance to a master’s thesis 
                                project, integrated computer vision through OpenCV for object detection and navigation. Participation 
                                achieved through in-person meetings and Git version control.</li>
                    </div>
                    <div id="certification">
                        <h3 className="text-xl font-heading2 pt-10">Certification</h3>
                        <h3 className="text-large font-body">Google Professional Machine Learning Engineer | Issued: February 2025</h3>
                        <li className="font-body pt-2 ml-3">Validates expertise in Google Cloud services including Vertex 
                            AI, TensorFlow, Keras, and Google Cloud storage. 
                        </li>
                            <li className="font-body pt-2 ml-3">View the certification here: 
                                <Link className="underline text-blue-500 pl-2" href="https://www.credly.com/badges/2bcc8327-5b3a-418c-9e05-1156b1be03e7/public_url">Google PMLE Certification</Link>
                            </li>
                    </div>
                </div>
        </section>
    )
}