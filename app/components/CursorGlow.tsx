"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const current = useRef({ x: 0, y: 0 });

    useEffect(() => {
        let animationId: number;

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            current.current.x += (mouse.current.x - current.current.x) * 0.08;
            current.current.y += (mouse.current.y - current.current.y) * 0.08;

            if (glowRef.current) {
                glowRef.current.style.background =
                    `radial-gradient(400px circle at ${current.current.x}px ${current.current.y}px, rgba(96,165,250,0.05), transparent 60%)`;
            }

            animationId = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
}
