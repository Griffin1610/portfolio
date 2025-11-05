'use client'
export default function Resume() {

    const handleClick = (url : string) => {
        window.open(url, "_blank", "noreferrer");
    }

    return (
        <section id="resume" className="h-screen pl-[10%]">
            <h1 className="font-heading text-4xl">resume</h1>
            <h3 className="font-heading text-xl pt-10 pl-60">Please click the button below to view my Resume</h3>
            <button className="font-body bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-1 rounded" onClick={() => handleClick("/GriffinPollyResume.pdf")}>Resume</button>
        </section>
    )
}