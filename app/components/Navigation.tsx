"use client";
import { useState } from "react";
import { UpArrow, DownArrow } from "./icons";

export default function Navigation() {
    const sections = ["welcome", "about", "projects", "resume"];
	const [index, setIndex] = useState(0);

	const scrollTo = (i: number) => {
		const section = document.getElementById(sections[i]);
		if (!section) return;
		section.scrollIntoView({ behavior: "smooth" });
		setIndex(i);
	};

    return (
		<>
		{index > 0 && (
			<button
			onClick={() => scrollTo(index - 1)}
			className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
			>
			<UpArrow className="w-10 pb-185" />
			</button>
		)}
		{index < sections.length - 1 && (
			<button
			onClick={() => scrollTo(index + 1)}
			className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
			>
			<DownArrow className="w-10" />
			</button>
		)}
		</>
	);
	}
