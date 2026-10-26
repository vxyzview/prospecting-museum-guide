import Masthead from './components/Masthead.jsx'
import Hero from './components/Hero.jsx'
import Answers from './sections/Answers.jsx'
import Ladders from './sections/Ladders.jsx'
import Primer from './sections/Primer.jsx'
import Builds from './sections/Builds.jsx'
import Lab from './sections/Lab.jsx'
import Events from './sections/Events.jsx'
import Workings from './sections/Workings.jsx'
import Sources, { SiteFoot } from './sections/Sources.jsx'

export default function App() {
  return (
    <>
      <Masthead />
      <main id="top">
        <Hero />
        <Answers />
        <Ladders />
        <Primer />
        <Builds />
        <Lab />
        <Events />
        <Workings />
        <Sources />
      </main>
      <SiteFoot />
    </>
  )
}
