export default function Hero({ name = 'Pak Thet', title = 'Web Developer', lead = "I build accessible, performant web applications." }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1>{`Hi, I'm ${name}`}</h1>
        <p className="lead">{lead}</p>
        <p>
          <a className="btn" href="#projects">See my work</a>
        </p>
      </div>

      <aside className="profile-card">
        <img src="/avatar-placeholder.svg" alt="avatar" />
        <h3 style={{marginTop:12}}>{name}</h3>
        <div className="project-meta">{title}</div>
      </aside>
    </section>
  )
}
