import Style from  './Header.module.scss'
import { setShowApp } from '../../store/setting'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {  Popover  } from 'antd';
function Header() {
  const showApp = useSelector((state: RootState) => state.setting.showApp)
  const dispatch = useDispatch();
  const changeShowApp=()=>{
    dispatch(setShowApp(!showApp))
  }
  const content = (
    <div >
      <div>打开设置 Ctrl + S</div>
      <div>打开壁纸 Ctrl + G</div>
      <div>全局搜索 Ctrl + F</div>
      <div>切换搜索引擎 Tab</div>
      <div>放大 Ctrl + =</div>
      <div>缩小 Ctrl + -</div>
    </div>
  );
  return (
    <>


      <div className={Style.header}>
        <div className={Style.iconBox}>
          <div className={Style.iconItem}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-eye"></use>
            </svg>
          </div>
          <Popover content={content} title="快捷键说明:">
          <div className={Style.iconItem}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-keybord"></use>
            </svg>
          </div>
        </Popover>
          
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