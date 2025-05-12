import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [classes, setClasses] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const styleManager = await webflow.getStyleManager()
        const allClasses = await styleManager.getAllClasses()
        setClasses(allClasses)
        setError(null)
      } catch (err) {
        setError('Failed to fetch classes. Please make sure you are running this in the Webflow Designer.')
        console.error('Error fetching classes:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchClasses()
  }, [])

  if (loading) {
    return <div>Loading classes...</div>
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>
  }

  return (
    <div className="container">
      <h1>Webflow Classes</h1>
      {classes.length === 0 ? (
        <p>No classes found in the project.</p>
      ) : (
        <ul style={{ 
          listStyle: 'none', 
          padding: 0,
          maxHeight: '400px',
          overflowY: 'auto',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '1rem'
        }}>
          {classes.map((className, index) => (
            <li key={index} style={{
              padding: '0.5rem',
              borderBottom: index < classes.length - 1 ? '1px solid #eee' : 'none',
              fontSize: '14px'
            }}>
              {className}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App