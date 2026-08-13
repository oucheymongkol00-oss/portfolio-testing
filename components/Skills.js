export default function Skills({ items = ['JavaScript','React','Next.js','CSS'] }){
  return (
    <div className="card">
      <h2>Skills</h2>
      <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:12}}>
        {items.map(s => (
          <div key={s} style={{padding:'6px 10px',background:'rgba(255,255,255,0.02)',borderRadius:8,color:'var(--muted)'}}>{s}</div>
        ))}
      </div>
    </div>
  )
}
