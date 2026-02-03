import Link from 'next/link';
export default function ProjectPage() {
    
    return (
        <section className="h-screen pl-[10%] pt-40">
            <div className="animate-fade-in">
                <h1 className="text-4xl font-heading">Deployed Projects</h1>
                <h3 className="text-large pt-2 font-heading2">Click on a project name below to visit the site</h3>
                    <div id="project1" className="pt-12">
                        <Link href="https://mtgbrowser.com" target="_blank" rel="noopener noreferrer" className="font-heading text-2xl hover:text-blue-500">MTG Browser</Link>
                        <h3 className="font-heading2">TypeScript, React,Next.js</h3>
                        <p className="font-body pt-3 w-[65%]">MTG Browser is a web application created for exploring Magic: The Gathering cards. It allows
                            Users to search for cards to view their stats and price, view entire sets and collections, as well as simulate
                            drafts. The project is deployed through Vercel, and can also be reached at the above project name.
                        </p>
                        <div className="pl-5">
                            <li className="font-body pt-2">Currently has seen use from over 150 unique users across the globe.</li>
                            <li className="font-body pt-2">Features dynamic search, card filtering, and SSR, which achieve near instant load times</li>
                        </div>
                    </div>
                    <div id="project2" className="pt-15">
                        <Link href="https://laravel-fantasy-basketball.onrender.com" target="_blank" rel="noopener noreferrer" className="font-heading text-2xl hover:text-red-500">NBA Stats Viewer</Link>
                        <h3 className="font-heading2">PHP, Laravel</h3>
                        <p className="font-body pt-3 w-[65%]">NBA Stats Viewer is a fantasy basketball web application created for users to create teams and simulate 
                            seasons from the 2022-2023 NBA roster. By exploring a variety of team options, users will see who has what it takes to make the playoffs
                            or win the NBA finals. The project is deployed through Render and can be reached at the above project name.
                        </p>
                        <div className ="pl-5">
                            <li className="font-body pt-2"> Manages a database of 400+ players.</li>
                            <li className="font-body pt-2"> Utilizes CRUD operations, MVC architecture, as well as authentication via Laravel Breeze.</li>
                        </div>
                    </div>
            </div>     
        </section>
    )
}