import ProjectCard from './ProjectCard'

export default function ProjectsList({ projects = [] }){
  return (
    <div className="card">
      <h2 id="projects">Projects</h2>
      <div className="projects-grid" style={{marginTop:12}}>
        {projects.map(p => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  )
}
