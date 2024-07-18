import Style from './Sidebar.module.scss'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { pageType } from '../../tools/app';
import { setCurrentId } from '../../store/appSlice'
function Sidebar() {
  const dispatch = useDispatch();
  const boxList = useSelector((state: RootState) => state.appSlice.appList)
  const currentId = useSelector((state: RootState) => state.appSlice.currentId)
  const onclick = (item: pageType) => {
    dispatch(setCurrentId(item.id))
  }
  return (
    <>
      <div className={Style.sidebar}>
        <div className={Style.center}>
          {
            boxList.map(item => {
              return <div className={`${Style.centerItem} ${currentId===item.id?Style.current:""}`} onClick={() => onclick(item)} key={item.id}>
                <div className={Style.iconItem}>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref={`#${item.icon}`}></use>
                  </svg>

                </div>
                <div className={Style.centerText}>{item.name}</div>
              </div>
            })
          }


        </div>

        <div className={Style.bottom}>
          <div className={Style.iconItem}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-coff"></use>
            </svg>
          </div>
          <div className={Style.iconItem}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-setting"></use>
            </svg>
          </div>

        </div>
      </div>
    </>
  )
}

export default Sidebar