import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/navbar'
import { useTranslation } from 'react-i18next';

function App() {

  const [count, setCount] = useState(0)
  const { t } = useTranslation();

  return (
    <div className="App">
      <Nav/>
      <div className='pic'>
        <img classname='img' src="./public/me.jpeg" alt="me" />
      </div>
      <div className='tittle'>
        <h1>{t("myname")}</h1>
      </div>
      
      <div className='info'>
        <p>{t("info")}</p>

      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t("btn")} {count}
        </button>
      </div>
    </div>
  )
}

export default App
