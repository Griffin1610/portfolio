import "./globals.css";
import { Inter, Lexend_Deca } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import NavigationBar from "../app/components/NavigationBar";
import CornerTriangles from "../app/components/triangles";
import CursorGlow from "../app/components/CursorGlow";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "../app/components/icons";


const inter = Inter({ subsets: ['latin'], weight: ['400','500','700'], variable: '--font-body' });
const lexend = Lexend_Deca({ subsets: ['latin'], weight: ['400','500','700'], variable: '--font-heading' });

export const metadata = {
    title: "Griffin Polly | Software Developer",
    description: "Portfolio of Griffin Polly — entry-level software developer with experience in TypeScript, React, Next.js, Python, and more.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    return (
        <html className={`${inter.variable} ${lexend.variable}`}>
            <body className="overflow-hidden bg-background1 min-h-screen ">
                <CursorGlow />
                <NavigationBar />
                {children}
                <footer className="fixed bottom-0 left-0 p-4 flex items-center gap-4">
                    <a href="https://github.com/Griffin1610" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className="w-6 h-6 text-heading2 hover:text-heading1 transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/in/griffin-polly-145220297/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className="w-6 h-6 text-heading2 hover:text-heading1 transition-colors" />
                    </a>
                    <a href="mailto:griffinpolly@gmail.com">
                        <EmailIcon className="w-6 h-6 text-heading2 hover:text-heading1 transition-colors" />
                    </a>
                </footer>
                <Analytics />
                <CornerTriangles />
            </body>
        </html>
    );
}
