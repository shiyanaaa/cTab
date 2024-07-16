import './AppBox.scss'
import { onMousewheel, throttleWheelEvent } from '../../tools/tools'
import { Carousel } from 'antd';
import { useRef, useState } from 'react';
import type {CSSProperties} from 'react'
import type { CarouselRef } from 'antd/lib/carousel';
function AppBox() {
  const [boxList] = useState([0, 1, 2, 3, 4])
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
  const contentStyle: CSSProperties = {
    margin: 0,
    height: '300px',
    color: '#fff',
    lineHeight: '300px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <>
      <Carousel infinite ref={carouselRef} dots={false} dotPosition="left" >
        {
          boxList.map(item => {
            return <div key={item} >
              <h3 style={contentStyle}>{item}</h3>
            </div>
          })
        }

      </Carousel>


    </>
  )
}

export default AppBox