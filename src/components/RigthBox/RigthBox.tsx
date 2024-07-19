import { useSelector } from 'react-redux';
import Style from './RigthBox.module.scss'
import { RootState } from '../../store';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setPosition } from '../../store/rightBox'

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

    dispatch(setPosition({
      show: false,
      top: 0,
      left: 0,
      index: -1
    }))
  }
  useEffect(() => {
    if (position.show && boxRef.current !== null)
      boxRef.current.focus()
  }, [position])
  const onclick = (index: number) => {
    dispatch(setPosition({
      show: false,
      top: 0,
      left: 0,
      index: -1
    }))
    console.log(index)
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