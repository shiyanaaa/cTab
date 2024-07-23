import Style from  './Background.module.scss'
import type { MenuType } from '../../tools/types';
import { setPosition, setContent } from '../../store/rightBox'
import { useDispatch } from 'react-redux';
function Background() {
  const dispatch = useDispatch();
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
  
  return (
    <>


      <div className={Style.background}  onContextMenu={onContextMenu}>
        
      </div>


    </>
  )
}

export default Background