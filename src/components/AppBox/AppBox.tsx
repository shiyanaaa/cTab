import Style from './AppBox.module.scss'
import { onMousewheel, throttleWheelEvent } from '../../tools/tools'
import { Carousel } from 'antd';
import { useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react'
import type { CarouselRef } from 'antd/lib/carousel';
import { appList } from './app';
import AppItem from '../AppItem/AppItem';
function AppBox() {
  const [boxList] = useState(appList)
  const carouselRef = useRef<CarouselRef>(null);
  let index = 0;
  const doMove = (e: WheelEvent) => {
    if (carouselRef.current === null) return;
    if (e.deltaY > 0) {
      index++;
      if (index >= boxList.length) index = 0;
      carouselRef.current.goTo(index)
    }
    else {
      index--;
      if (index < 0) index = boxList.length - 1;
      carouselRef.current.goTo(index)
    }
  }


  const throttle = throttleWheelEvent(doMove, 500)
  onMousewheel((e) => {
    throttle(e)

  })
  
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    if(ref.current!==null)
    setHeight(ref.current.offsetHeight);
  }, []);
  const contentStyle: CSSProperties = {
    margin: 0,
    height:height+'px',
    display:"grid",
    gridTemplateColumns:"repeat(auto-fill,var(--icon-size))",
    gridTemplateRows:"repeat(auto-fill,var(--icon-size))",
    gridGap:"var(--icon-gap-x) var(--icon-gap-y)",
    overflow:"hidden",
    placeContent:"center"
  };
  return (
    <>
      <div className={Style.appBox} ref={ref}>
        <Carousel ref={carouselRef} dots={false} dotPosition='left' adaptiveHeight>
          {
            boxList.map(item => {
              return <div key={item.name} >
                <div style={contentStyle}>
                  {item.list.map(i=>{
                    return <AppItem data={i} key={i.name}/>
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