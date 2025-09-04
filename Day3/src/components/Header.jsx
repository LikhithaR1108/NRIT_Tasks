export default function Header({ selectedGenre, onChange }){
  return (
    <header>
      <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:12}}>
        <div>
          <h1>🎥 My Movie Picks</h1>
          <p>Pick a genre to filter your feed</p>
        </div>
        <label style={{display:'flex', alignItems:'center', gap:8}}>
          <span style={{color:'var(--muted)'}}>Genre</span>
          <select
            aria-label="Genre filter"
            value={selectedGenre}
            onChange={(e) => onChange(e.target.value)}
            style={{
              background:'#111827', color:'var(--text)', border:'1px solid #243042',
              padding:'8px 10px', borderRadius:8
            }}
          >
            <option>All</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Thriller</option>
          </select>
        </label>
      </div>
    </header>
  );
}
