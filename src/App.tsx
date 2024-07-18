

import './App.scss'
import Header from './components/Header/Header'
import AppBox from './components/AppBox/AppBox'
import Search from './components/Search/Search'
import Sidebar from './components/Sidebar/Sidebar'
import Time from './components/Time/Time'
import {  useEffect } from 'react'
import { getData } from './tools/tools'
import { setAppList,setCurrentIdByIndex } from './store/appSlice'
function App() {
  const dispatch = useDispatch();
  const init=()=>{
    const data=getData()
    console.log(data)
    dispatch(setAppList(data))
    dispatch(setCurrentIdByIndex(0))
  }
  useEffect(()=>init);
  useEffect(()=>{
    console.log(1)
  });
  return (
    <>

      <div className="main">
        <Sidebar />
        <Header />
        <Time />
        <Search />
        <AppBox />
      </div>

    </>
  )
}
import { useDispatch } from 'react-redux'

export default App
