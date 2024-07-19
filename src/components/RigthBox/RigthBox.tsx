import { useSelector } from 'react-redux';
import Style from './RigthBox.module.scss'
import { RootState } from '../../store';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { close } from '../../store/rightBox'
import { changeItemSize } from '../../store/appSlice';

function RigthBox() {
  const rowList = [1, 2, 3, 4]
  const colList = [1, 2, 3, 4]
  const dispatch = useDispatch();
  const boxRef = useRef<HTMLDivElement>(null)
  const position = useSelector((state: RootState) => state.rightBox.position)
  const content = useSelector((state: RootState) => state.rightBox.content)
  const currentIndex = useSelector((state: RootState) => state.appSlice.currentIndex)
  const current = useSelector((state: RootState) => {
    if (!state.appSlice.appList[currentIndex]) return;
    if (!state.appSlice.appList[currentIndex].list[position.index]) return;
    return state.appSlice.appList[currentIndex].list[position.index]
  })
  const styles = {
    top: position.top,
    left: position.left,
    display: position.show ? "block" : "none"
  }
  const onBlur = () => {

    dispatch(close())
  }
  useEffect(() => {
    if (position.show && boxRef.current !== null)
      boxRef.current.focus()
  }, [position])
  const onclick = (index: number) => {
    dispatch(close())
    console.log(index)
  }
  const changeSize=(width:number,height:number)=>{
    
    dispatch(changeItemSize({
      width,
      height,
      index: position.index
    }))
    dispatch(close())
  }
  return (
    <>


      <div ref={boxRef} tabIndex={0} onBlur={onBlur} className={Style.rightBox} style={styles}>
        {
          content.map((item, index) => {
            if (item.type !== "layout")
              return <div key={item.type} className={[Style.item, Style.clickItem].join(" ")} onClick={() => onclick(index)}>
                <span className={Style.iconItem}>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref={item.icon}></use>
                  </svg>
                </span>
                <span>{item.name}</span>
              </div>
            else {
              return <div key={item.type} >
                <div className={Style.item} >
                  <span className={Style.iconItem}>
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref={item.icon}></use>
                    </svg>
                  </span>
                  <span>{item.name}</span>
                </div>
                <div className={Style.layoutBox}>
                  {
                    rowList.map(row => {
                      return colList.map(col => {
                        return <div
                          className={`${Style.tag}  ${`${current?.width}x${current?.height}` === `${row}x${col}` ? Style.active : ''}`}
                          key={`${row}x${col}`}
                          onClick={()=>changeSize(row,col)}
                        >
                          {`${row}x${col}`}
                        </div>
                      })
                    })

                  }
                </div>
              </div>
            }
          })

        }
      </div>


    </>
  )
}

export default RigthBox