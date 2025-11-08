import "./globals.css";
import { Inter, Lexend_Deca } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';


const inter = Inter({ subsets: ['latin'], weight: ['400','500','700'], variable: '--font-body' });
const lexend = Lexend_Deca({ subsets: ['latin'], weight: ['400','500','700'], variable: '--font-heading' });

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    return (
        <html className={`${inter.variable} ${lexend.variable}`}>
            <body className="overflow-hidden">
                {children}
                <Analytics />
            </body>
        </html>
    );
}
