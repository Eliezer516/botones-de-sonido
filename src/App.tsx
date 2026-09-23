import { useEffect, useState } from 'react'
import './App.css'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
}

const soundModules = import.meta.glob('./sonidos/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
})

const VARIANT = ['default', 'orange', 'blue', 'green'] as const

const sounds = Object.entries(soundModules).map(([path, url], index) => ({
  url,
  label: path.replace('./sonidos/', '').replace(/\.mp3$/i, ''),
  variant: VARIANT[index % VARIANT.length],
}))

function App() {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    const handleInstallPrompt = (event: Event) => {
      event.preventDefault()
      setInstallPrompt(event as BeforeInstallPromptEvent)
    }
    const handleInstalled = () => setInstallPrompt(null)
    window.addEventListener('beforeinstallprompt', handleInstallPrompt)
    window.addEventListener('appinstalled', handleInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', handleInstallPrompt)
      window.removeEventListener('appinstalled', handleInstalled)
    }
  }, [])

  const handleInstall = () => {
    void installPrompt?.prompt()
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1>Sonidos</h1>
        <p>Tocá un botón para reproducir</p>
        {installPrompt && (
          <button
            type="button"
            className="nb-button green rounded install-button"
            onClick={handleInstall}
          >
            Instalar app
          </button>
        )}
      </header>
      <div className="sound-grid">
        {sounds.map((sound) => (
          <button
            key={sound.url}
            type="button"
            className={`nb-button ${sound.variant} rounded app-button`}
            onClick={() => {
              const audio = new Audio(sound.url)
              void audio.play()
            }}
          >
            {sound.label}
          </button>
        ))}
      </div>
    </main>
  )
}

export default App