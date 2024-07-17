

import './App.scss'
import Header from './components/Header/Header'
import AppBox from './components/AppBox/AppBox'
import Search from './components/Search/Search'
// import Sidebar from './components/Sidebar/Sidebar'
import Time from './components/Time/Time'
function App() {


  return (
    <>

      <div className="main">
        {/* <Sidebar /> */}
        <Header />
        <Time />
        <Search />
        <AppBox />
      </div>

    </>
  )
}

export default App
