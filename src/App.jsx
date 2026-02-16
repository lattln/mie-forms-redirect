import { useEffect } from 'react'

const REDIRECT_URL = 'https://forms-doc.os.mieweb.org/'

function App() {
  useEffect(() => {
    window.location.replace(REDIRECT_URL)
  }, [])

  return (
    <div className="flex items-center justify-center h-screen font-sans text-lg text-gray-700">
      <p>Redirecting to <a href={REDIRECT_URL} className="text-indigo-500 hover:underline">{REDIRECT_URL}</a>...</p>
    </div>
  )
}

export default App
