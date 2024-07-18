import { useRef } from "react"
import { appList, pageType } from "./app"


export const useThrottle = (func: (e: WheelEvent) => void, time: number) => {
  const prevTime = useRef<number>(0);
  return (params: WheelEvent) => {
    const nowTime = Date.now();
    if (nowTime - prevTime.current >= time) {
      func(params)
      prevTime.current = nowTime
    }
  }
}
export const onMousewheel = (func: (e: WheelEvent) => void) => {
  if (document.addEventListener) { //火狐使用DOMMouseScroll绑定
    document.addEventListener('wheel', func, false);
  }

}
export const getData = (): pageType[] => {
  const lists = localStorage.getItem("appList")
  if (lists) return JSON.parse(lists) as pageType[]
  localStorage.setItem("appList", JSON.stringify(appList))
  return appList
}