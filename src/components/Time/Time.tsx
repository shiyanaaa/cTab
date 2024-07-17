import { useState,useEffect } from 'react'
import Style from './Time.module.scss'
import lunisolar from 'lunisolar'
function Time() {
  const [mainTime, setMainTime] = useState(" ")
  const [mainDay, setMainDay] = useState(" ")
  const week = ['日', '一', '二', '三', '四', '五', '六']
  const getTime = () => {
    const d = lunisolar()
    setMainTime(d.format("HH:mm"))

    setMainDay(`${d.format("MM月DD日")} 星期${week[d.dayOfWeek]} ${d.lunar.getMonthName()}${d.lunar.getDayName()}`)
  }
  
  setInterval(getTime, 1000)
  useEffect(getTime);
  return (
    <>
      <div className={Style.time}>
        <div className={Style.mainTime} >{mainTime}</div>
        <div className={Style.mainDay} >{mainDay}</div>
      </div>
    </>
  )
}

export default Time