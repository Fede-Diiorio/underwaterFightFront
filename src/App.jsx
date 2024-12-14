import './App.css'
import { LocalStorageProvider } from './hooks/LocalStorageContext';
import Header from './components/Header/Header'
import HideSubmarine from './components/HideSubmarine/HideSubmarine'
import ShootingBoard from './components/ShootingBoard/ShootingBoard';

function App() {

  return (
    <main>
      <LocalStorageProvider>
        <Header />
        <HideSubmarine />
        <ShootingBoard />
      </LocalStorageProvider>
    </main>
  )
}

export default App
