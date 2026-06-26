import { useState } from 'react'
import './Navbar.css'

const NAV_ITEMS = [
  {
    label: 'Linked Lists',
    children: [
      'Detect Linked List Cycle',
      'Middle of Linked List',
      'Remove Nth From End',
      'Reverse Linked List',
    ],
  },
  {
    label: 'Searching',
    children: [
      'Binary Search',
      'Linear Search',
    ],
  },
  {
    label: 'Sorting',
    children: [
      'Bubble Sort',
      'Bucket Sort',
      'Insertion Sort',
      'Merge Sort',
    ],
  },
  {
    label: 'Trees',
    children: [
      'BFS (Breadth-First Search)',
      'DFS (Depth-First Search)',
      'Count Tree Elements',
    ],
  },
]

function NavDropdown({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <li
      className="nav-item nav-item--dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="nav-link nav-link--trigger">
        {item.label}
        <svg className="nav-chevron" viewBox="0 0 10 6" width="10" height="6">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul className="nav-dropdown">
          {item.children.map((child) => (
            <li key={child} className="nav-dropdown__item">
              <button className="nav-dropdown__link">{child}</button>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#">
          <span className="navbar__brand-icon">⬡</span>
          AlgoVisualizer
        </a>

        <nav className="navbar__nav">
          <ul className="nav-list">
            <li className="nav-item">
              <button className="nav-link">Home</button>
            </li>

            {NAV_ITEMS.map((item) => (
              <NavDropdown key={item.label} item={item} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
