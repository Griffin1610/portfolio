'use client'
export default function Projects() {
    
    const handleClick = (url : string) => {
        window.open(url, "_blank", "noreferrer");
    }

    return (
        <section className="h-screen pl-[10%]">
            <h1 className="text-4xl font-heading">Projects</h1>
            <div className="pt-10">
                <div id="project1" className="ml-40">
                    <h3 className="font-heading text-xl">MTG Browser</h3>
                    <h3 className="font-heading">TypeScript, Next.js</h3>
                    <p className="font-body pt-3 w-[55%]">MTG Browser is a web application or exploring Magic: The Gathering cards. It allows
                        Users to search for cards and view their stats and price, view entire sets and colections, as well as simulating
                        eight player drafts. The project is hosted through Vercel at mtgbrowser.com, and can also be reached through the button below
                    </p>
                        <div className="pl-10">
                            <li className="font-body pt-2">Currently has had use from over 30 unique users across the globe</li>
                        </div>
                        <div className="pt-3">
                            <button className="font-body bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-1 rounded" onClick={() => handleClick("https://mtgbrowser.com")}>MTG Browser</button>
                        </div>
                </div>
                <div id="project2" className="ml-40 pt-10">
                    <h3 className="font-heading text-xl">NBA Stats Viewer</h3>
                    <h3 className="font-heading">PHP, Laravel</h3>
                    <p className="font-body pt-3 w-[55%]">Nba Stats Viewer is a fantasy basketball web application where users create teams to simulate 
                        seasons from the 2022-2023 NBA roster. By exploring a variety of team options, users will see who has what it takes to make the playoffs
                        or win the NBA finals. The project is hosted through Render and can be reached through the button below
                    </p>
                     <div className="pt-3">
                        <button className="font-body bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-1 rounded" onClick={() => handleClick("https://laravel-fantasy-basketball.onrender.com")}>NBA Stats</button>
                    </div>
                </div>
                <div id="others" className="ml-40 pt-10">
                    <h3 className="font-heading text-xl">Other Projects</h3>
                    <p className="font-body pt-3 w-[55%]">Please check out my GitHub to take a look at more of my many projects!</p>
                     <div className="pt-3">
                            <button className="font-body bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-1 rounded" onClick={() => handleClick("https://github.com/Griffin1610")}>GitHub</button>
                    </div>
                </div>
            </div>
        </section>
    )
}