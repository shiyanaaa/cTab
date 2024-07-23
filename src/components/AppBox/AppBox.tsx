import Style from './AppBox.module.scss'
import { useThrottle } from '../../tools/tools'
import { Carousel } from 'antd';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { CarouselRef } from 'antd/lib/carousel';
import AppItem from '../AppItem/AppItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setCurrentIdByIndex } from '../../store/appSlice'
import { setPosition, setContent } from '../../store/rightBox'
import type { MenuType } from '../../tools/types';
function AppBox() {
  const boxList = useSelector((state: RootState) => state.appSlice.appList)
  const index = useSelector((state: RootState) => state.appSlice.currentIndex)
  const carouselRef = useRef<CarouselRef>(null);
  const dispatch = useDispatch();
  const showApp = useSelector((state: RootState) => state.setting.showApp)
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
  const onContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(setPosition({ left: e.clientX, top: e.clientY, show: true, index:0 }))
    dispatch(setContent([
      {
        name: "添加图标",
        type: "addIcon",
        icon: "#icon-add"
      },
      {
        name: "更换壁纸",
        type: "changeWallpaper",
        icon: "#icon-bianji"
      }, {
        name: "本地搜索",
        type: "search",
        icon: "#icon-bianji"
      },
       {
        name: "立即备份",
        type: "backup",
        icon: "#icon-bianji"
      },
       {
        name: "设置",
        type: "setting",
        icon: "#icon-setting"

      }

    ] as MenuType[]))
    e.preventDefault()
    e.stopPropagation()
  }
  useEffect(() => {
    if (document.addEventListener) { //火狐使用DOMMouseScroll绑定
      document.addEventListener('wheel', throttle, false);
    }
    return () => {
      document.removeEventListener('wheel', throttle, false);
    };
  }, [throttle])

  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    if (ref.current !== null)
      setHeight(ref.current.offsetHeight);
  }, []);
  useEffect(() => {
    if (carouselRef.current){
      carouselRef.current.goTo(index)
    }
      
  }, [index]);
  

  return (
    <>
      <div className={`${Style.appBox} ${!showApp?Style.showApp:""}`} ref={ref} onContextMenu={onContextMenu}>
      <div className={Style.inner}>
            <Carousel ref={carouselRef} dots={false}  dotPosition='left' adaptiveHeight>
            {
              boxList.map(item => {
                return <div key={item.name} >
                  <div className={Style.CarouselItem} style={{ height: height + 'px' }}>

                    {item.list.map((i,index) => {
                      return <AppItem  data={i} index={index} key={i.name} />
                    })}
                  </div>
                </div>
              })
            }

          </Carousel>
          </div> 

      </div>



    </>
  )
}

export default AppBox