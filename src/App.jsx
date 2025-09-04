import { useState, useMemo } from 'react'

function TodoManager() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, title: 'Finish React Day 5', done: false },
    { id: 2, title: 'Gym & stretch', done: true },
  ])
  const [filter, setFilter] = useState('all') // all|active|completed

  const filtered = useMemo(() => {
    if (filter === 'active') return todos.filter(t => !t.done)
    if (filter === 'completed') return todos.filter(t => t.done)
    return todos
  }, [todos, filter])

  function addTodo(e) {
    e.preventDefault()
    const name = text.trim()
    if (!name) return
    setTodos(prev => [{ id: Date.now(), title: name, done: false }, ...prev])
    setText('')
  }
  function toggle(id) { setTodos(prev => prev.map(t => t.id===id ? { ...t, done: !t.done } : t)) }
  function remove(id) { setTodos(prev => prev.filter(t => t.id!==id)) }

  return (
    <div style={{ maxWidth: 720, margin: '24px auto', padding: 16 }}>
      <form onSubmit={addTodo} style={{ display:'flex', gap:8 }}>
        <input
          placeholder='Add a todo…'
          value={text}
          onChange={e=>setText(e.target.value)}
          style={{ flex:1, padding:8, borderRadius:8, border:'1px solid #ccc' }}
        />
        <button style={{ padding:'8px 12px', borderRadius:8, background:'#4f46e5', color:'#fff', border:'none' }}>
          Add
        </button>
      </form>

      <div style={{ display:'flex', gap:8, marginTop:12 }}>
        {['all','active','completed'].map(f => (
          <button
            key={f}
            onClick={()=>setFilter(f)}
            style={{
              padding:'6px 10px',
              borderRadius:8,
              border:'1px solid #444',
              background: filter===f ? '#4f46e5' : '#0f172a',
              color:'#fff'
            }}
          >
            {f[0].toUpperCase()+f.slice(1)}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p style={{ color:'#94a3b8', marginTop:12 }}>
          No todos {filter!=='all' ? `in ${filter}` : ''}.
        </p>
      ) : (
        <ul style={{ listStyle:'none', padding:0, marginTop:12 }}>
          {filtered.map(t => (
            <li key={t.id} style={{ display:'flex', alignItems:'center', gap:12, padding:12, border:'1px solid #1f2937', borderRadius:12, background:'#0b1220', color:'#e5e7eb', marginBottom:8 }}>
              <input type='checkbox' checked={t.done} onChange={()=>toggle(t.id)} />
              <span style={{ flex:1, textDecoration: t.done ? 'line-through' : 'none', color: t.done ? '#64748b' : '#e5e7eb' }}>
                {t.title}
              </span>
              <button onClick={()=>remove(t.id)} style={{ padding:'6px 10px', borderRadius:8, background:'#dc2626', color:'#fff', border:'none' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function App() {
  return (
    <div style={{ minHeight:'100vh', background:'#020617', color:'#e5e7eb' }}>
      <h1 style={{ fontSize:24, fontWeight:600, padding:16 }}>Mini Project 1 – Todo Manager</h1>
      <TodoManager />
    </div>
  )
}
