import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Welcome from './components/Welcome';
import Navigation from './components/Navigation';

export default function Home() {
    return (
        <>
            <main>
                <section id="welcome">
                    <Welcome />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="resume">
                    <Resume />
                </section>
            </main>
            <Navigation />
        </>
    );
}
