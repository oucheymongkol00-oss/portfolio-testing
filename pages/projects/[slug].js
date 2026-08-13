import Head from 'next/head'
import Link from 'next/link'
import projects from '../../data/projects'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export async function getStaticPaths(){
  const paths = projects.map(p => ({ params: { slug: p.slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }){
  const project = projects.find(p => p.slug === params.slug)
  return { props: { project } }
}

export default function ProjectPage({ project }){
  if(!project) return <div>Not found</div>
  return (
    <>
      <Head>
        <title>{`${project.title} — Portfolio`}</title>
        <meta name="description" content={project.desc} />
      </Head>
      <Navbar />
      <main className="container">
        <div style={{display:'flex',gap:20,alignItems:'flex-start',marginTop:20}}>
          <div style={{flex:1}}>
            <h1>{project.title}</h1>
            <div className="project-meta">{project.tech}</div>
            <p style={{marginTop:16}}>{project.longDesc}</p>
            <p style={{marginTop:20}}>
              <a className="btn" href={project.link || '#'} target="_blank" rel="noreferrer">Live / Repo</a>
              <Link href="/" style={{marginLeft:12}}>Back</Link>
            </p>
          </div>
          <aside style={{width:320}}>
            {project.images?.map((src,i) => (
              <img key={i} src={src} alt={project.title} style={{width:'100%',borderRadius:10,marginBottom:12}} />
            ))}
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}
