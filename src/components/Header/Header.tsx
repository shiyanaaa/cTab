import Style from  './Header.module.scss'
import { setShowApp } from '../../store/setting'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
function Header() {
  const showApp = useSelector((state: RootState) => state.setting.showApp)
  const dispatch = useDispatch();
  const changeShowApp=()=>{
    dispatch(setShowApp(!showApp))
  }
  return (
    <>


      <div className={Style.header}>
        <div className={Style.iconBox}>
          <div className={Style.iconItem}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-eye"></use>
            </svg>
          </div>
          <div className={Style.iconItem}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-keybord"></use>
            </svg>
          </div>
          <div className={Style.iconItem} onClick={changeShowApp}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-menu"></use>
            </svg>
          </div>
        </div>
      </div>


    </>
  )
}

export default Header