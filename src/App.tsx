

import './App.scss'
import Header from './components/Header/Header'
import AppBox from './components/AppBox/AppBox'
import Search from './components/Search/Search'
import Sidebar from './components/Sidebar/Sidebar'
import Time from './components/Time/Time'
import {  useEffect } from 'react'
import { getData } from './tools/tools'
import { setAppList,setCurrentIdByIndex } from './store/appSlice'
import { RootState } from './store';
function App() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(setAppList(getData()))
    dispatch(setCurrentIdByIndex(0))
  });
  return (
    <>

      <div className="main">
        <Sidebar />
        <Header />
        <div className="main-box">
        <Time />
        <Search />
        <AppBox />
        </div>
        
        
      </div>

    </>
  )
}
import { useDispatch, useSelector } from 'react-redux'

export default App
