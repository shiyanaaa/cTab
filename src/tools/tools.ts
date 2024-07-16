
export const throttleWheelEvent = (func: (e:WheelEvent)=>void , time: number) => {
  let prevTime = 0;
  return (params:WheelEvent) => {
    const nowTime = Date.now();
    if (nowTime - prevTime >= time) {
      func(params)
      prevTime = nowTime
    }
  }
}
export const onMousewheel = (func: (e: WheelEvent) => void) => {
  if (document.addEventListener) { //火狐使用DOMMouseScroll绑定
    document.addEventListener('wheel', func, false);
  }

}