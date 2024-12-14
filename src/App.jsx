import './App.css'
import { LocalStorageProvider } from './hooks/LocalStorageContext';
import Header from './components/Header/Header'
import HideSubmarine from './components/HideSubmarine/HideSubmarine'

function App() {

  return (
    <main>
      <LocalStorageProvider>
        <Header />
        <HideSubmarine />
      </LocalStorageProvider>
    </main>
  )
}

export default App
