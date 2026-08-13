import Link from 'next/link'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card" style={{transition:'transform .25s',willChange:'transform'}}>
      <div>
        <h3>{project.title}</h3>
        <div className="project-meta">{project.tech || 'Web App'}</div>
        <p style={{marginTop:10}}>{project.desc}</p>
      </div>
      <div style={{marginTop:12}}>
        {project.slug ? (
          <Link href={`/projects/${project.slug}`} className="btn">Details</Link>
        ) : (
          <a className="btn" href={project.link || '#'} target="_blank" rel="noreferrer">View</a>
        )}
      </div>
    </article>
  )
}
