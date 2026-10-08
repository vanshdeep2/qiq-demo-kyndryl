import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BRAND } from '../config/brand'
import { PAGES, MENU_ORDER } from '../config/pages'
import UserMenu from './UserMenu'
import '../styles/components.css'

const MENU_ITEMS = MENU_ORDER.map((page) => ({ page, ...PAGES[page] }))

export default function Nav({ currentPage, liveLabel, callsPill, pageTitle, navExtra }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <nav>
      <div className="nav-brand">
        <div className="menu-wrap" ref={wrapRef}>
          <button
            type="button"
            className="menu-trigger"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            onClick={(e) => {
              e.stopPropagation()
              setMenuOpen((open) => !open)
            }}
          >
            <span />
          </button>
          <div className={`menu-panel${menuOpen ? ' open' : ''}`}>
            {MENU_ITEMS.map((item, index) => (
              <div key={item.page}>
                {index === 1 && <div className="menu-sep" />}
                <Link
                  to={item.path}
                  className={`menu-link${currentPage === item.page ? ' menu-link-active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="menu-link-title">{item.title}</div>
                  <div className="menu-link-sub">
                    {currentPage === item.page ? `${item.sub} - current page` : item.sub}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="nav-divider" />
        <img alt="Quantanite iQ" src="/qiq-logo.jpg" className="qiq-logo-img" />
        <div className="nav-divider" />
        <div className="dd-brand" aria-label={BRAND.name}>
          <img className="dd-logo client-logo" alt={BRAND.logoAlt} src={BRAND.logoPath} />
        </div>
      </div>
      {pageTitle ? <div className="nav-center">{pageTitle}</div> : <div />}
      <div className="nav-right">
        <span className="nav-live">
          <span className="live-dot" />
          {liveLabel}
        </span>
        <span className="nav-pill">{callsPill}</span>
        {navExtra}
        <UserMenu />
      </div>
    </nav>
  )
}
