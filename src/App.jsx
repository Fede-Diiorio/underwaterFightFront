import './App.css'
import { FightServiceProvider } from './hooks/FightServiceContext';
import { LocalStorageProvider } from './hooks/LocalStorageContext';
import GameComponent from './components/GameComponent/GameComponent';

function App() {

  return (
    <main>
      <FightServiceProvider>
        <LocalStorageProvider>
          <GameComponent />
        </LocalStorageProvider>
      </FightServiceProvider>
    </main>
  )
}

export default App
