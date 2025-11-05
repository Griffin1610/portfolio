import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Welcome from './components/Welcome';

export default function Home() {
    return (
        <main>
            <Welcome />
            <About />
            <Projects />
            <Resume />
        </main>
    );
}
