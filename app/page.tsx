'use client';
import {useState, useEffect} from 'react';

export default function Welcome() {
    const [Delay1, setDelay1] = useState(false);
    const [Delay2, setDelay2] = useState(false);
    const [typed, setTyped] = useState("");
    const text = "Hi, I'm Griffin";

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("welcomeVisited");
            if (!hasVisited) {
                let i = 0;
                const type = () => {
                    if (i < text.length) {
                    setTyped(text.slice(0, i + 1));
                    i++;
                    setTimeout(type, 120);
                    }
                };
                type();
                const t1 = setTimeout(() => setDelay1(true), 2300);
                const t2 = setTimeout(() =>  setDelay2(true), 3000);

                sessionStorage.setItem("welcomeVisited", "true");

                return () => {
                    clearTimeout(t1);
                    clearTimeout(t2);
                };
                } else {
                
                    setTyped(text);
                    setDelay1(true);
                    setDelay2(true);
            }
        }, []);

    return ( 
        <section className="h-screen">
            <div className="pt-[20%] pl-[20%]">
                <h1 className="text-6xl font-heading animate-fade-in">{typed}</h1>
                    {Delay1 &&
                    <>
                        <h2 className="text-2xl pt-4 font-body animate-fade-in2">Welcome to my portfolio</h2>
                    </>
                    }
                    {Delay2 &&
                    <>
                        <p className="pt-0.5 text-xl font-body animate-fade-in2">Please check out my Experience, Projects, and Resume</p>
                    </>
                    }
            </div>
    
        </section>
    )
}
