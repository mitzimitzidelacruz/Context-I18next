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
        <img className='pic1' src="./me.jpeg" alt="me"/>
      </div>
      <div className='tittle'>
        <h1>{t("myname")}</h1>
      </div>
      
      <div className='info'>
        <p>{t("info")}</p>
        <p>{t("info1")}</p>

      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t("btn")} {count}
        </button>
      </div>

      <div className='tec'>
        <p>{t("tec")}</p>
      </div>
    </div>
  )
}

export default App
