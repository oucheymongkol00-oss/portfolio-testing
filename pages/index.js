import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import ProjectsList from '../components/ProjectsList'
import Contact from '../components/Contact'
import projects from '../data/projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio — Pak Thet</title>
        <meta name="description" content="Portfolio showcasing projects and skills." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />

      <main className="container">
        <Hero name="Pak Thet" title="Frontend Engineer" lead="I build accessible, performant web apps and delightful user experiences." />

        <Skills items={["JavaScript","TypeScript","React","Next.js","CSS","Node.js"]} />

        <ProjectsList projects={projects} />

        <Contact />
      </main>

      <Footer />
    </>
  )
}
