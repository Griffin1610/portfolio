'use client';
import {useState, useEffect} from 'react';

export default function Welcome() {
    const [Delay1, SetDelay1] = useState(false);
    const [Delay2, SetDelay2] = useState(false);
    const [typed, setTyped] = useState("");
    const text = "Hi, Im Griffin";

    useEffect(() => {
    let i = 0;

    const type = () => {
        if (i < text.length) {
        setTyped(text.slice(0, i + 1));
        i++;
        setTimeout(type, 100);
        }
    };
    type();
    }, []);

    setTimeout(() => {
        SetDelay1(true);
    }, 1500)

    setTimeout(() => {
        SetDelay2(true);
    }, 1800)

    return ( 
        <section className="h-screen">
            <div className="pt-[20%] pl-[20%]">
                <h1 className="text-6xl font-heading">{typed}</h1>
                    {Delay1 &&
                    <>
                        <h2 className="text-2xl pt-4 font-body">Welcome to my porfolio</h2>
                    </>
                    }
                    {Delay2 &&
                    <>
                        <p className="pt-0.5 text-xl font-body">Please check out my Experience, Projects, and Resume</p>
                    </>
                    }
            </div>
    
        </section>
    )
}
