import Style from './AppBox.module.scss'
import {  useThrottle } from '../../tools/tools'
import { Carousel } from 'antd';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react'
import type { CarouselRef } from 'antd/lib/carousel';
import AppItem from '../AppItem/AppItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setCurrentIdByIndex } from '../../store/appSlice'
function AppBox() {
  const boxList = useSelector((state: RootState) => state.appSlice.appList)
  const index = useSelector((state: RootState) => state.appSlice.currentIndex)
  const carouselRef = useRef<CarouselRef>(null);
  const dispatch = useDispatch();
  const doMove = (e: WheelEvent) => {
    if (carouselRef.current === null) return;
    if (e.deltaY > 0) {
      if (index + 1 >= boxList.length) {
        dispatch(setCurrentIdByIndex(0))
        return;
      }
      dispatch(setCurrentIdByIndex(index + 1))
    }
    else {
      if (index - 1 < 0) {
        dispatch(setCurrentIdByIndex(boxList.length - 1))
        return;
      }
      dispatch(setCurrentIdByIndex(index - 1))
    }

  }
  const throttle = useThrottle(doMove, 500)
  
  useEffect(()=>{
    if (document.addEventListener) { //火狐使用DOMMouseScroll绑定
      document.addEventListener('wheel', throttle, false);
    }
    return () => {
      document.removeEventListener('wheel', throttle, false);
    };
  },[throttle])

  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    if (ref.current !== null)
      setHeight(ref.current.offsetHeight);
  }, []);
  useEffect(() => {
    if(carouselRef.current)
    carouselRef.current.goTo(index)
  }, [index]);
  const contentStyle: CSSProperties = {
    margin: 0,
    height: height + 'px',
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,var(--icon-size))",
    gridTemplateRows: "repeat(auto-fill,var(--icon-size))",
    gridGap: "var(--icon-gap-x) var(--icon-gap-y)",
    overflow: "hidden",
    placeContent: "start center",
    gridAutoFlow: "dense"
  };
  
  return (
    <>
      <div className={Style.appBox} ref={ref} >
        <Carousel ref={carouselRef} dots={false} dotPosition='left' adaptiveHeight>
          {
            boxList.map(item => {
              return <div key={item.name} >
                <div style={contentStyle}>
                
                  {item.list.map(i => {
                    return <AppItem data={i} key={i.name} />
                  })}
                </div>
              </div>
            })
          }

        </Carousel>
      </div>



    </>
  )
}

export default AppBox