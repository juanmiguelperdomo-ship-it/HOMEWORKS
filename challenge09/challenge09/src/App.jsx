import { useState } from 'react'
import { useNavigate, Routes, Route, useLocation } from 'react-router-dom'
import root from './Corte2/N-tree/Menu'
import './App.css'

import ContactosApp from './Corte1/Components/ContactosApp'
import PlayList     from './Corte1/Components/PlayList'
import History      from './Corte1/Components/History'
import QAtm         from './Corte2/Components/QAtm'
import Books        from './Corte2/Components/Books'
import BinaryTree   from './Corte2/Components/BinaryTree'

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [openMenus, setOpenMenus] = useState({})

  function toggleMenu(title) {
    setOpenMenus(prev => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <div className="app">
      <nav className="sidebar">
        <div className="sidebar-header">Challenges</div>

        {root.son.map(node => {
          const item = node.value
          const isOpen = !!openMenus[item.title]

          return (
            <div key={item.link}>
              <div className="menu-group" onClick={() => toggleMenu(item.title)}>
                <span>{item.title}</span>
                <span>{isOpen ? '▴' : '▾'}</span>
              </div>

              {isOpen && (
                <div>
                  {node.son.map(child => {
                    const c = child.value
                    const isActive = location.pathname === c.link
                    return (
                      <div
                        key={c.link}
                        className={`menu-item ${isActive ? 'active' : ''}`}
                        onClick={() => navigate(c.link)}
                      >
                        {c.title}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      <main className="main">
        <Routes>
          <Route path="/corte1/contactos" element={<ContactosApp />} />
          <Route path="/corte1/playlist"  element={<PlayList />} />
          <Route path="/corte1/historial" element={<History />} />
          <Route path="/corte2/atm"       element={<QAtm />} />
          <Route path="/corte2/books"     element={<Books />} />
          <Route path="/corte2/trees"     element={<BinaryTree />} />
          <Route path="/" element={<p className="empty">Selecciona un challenge del menú</p>} />
        </Routes>
      </main>
    </div>
  )
}