import Style from './AppItem.module.scss'
import type { appType } from '../../tools/app'
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { setPosition, setContent } from '../../store/rightBox'
import type { MenuType } from '../../tools/types';

function AppBox(props: { data: appType, index: number }) {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  
  const { data, index } = props;
  const getStyle = () => {
    return {
      "--background": data.background,

    } as React.CSSProperties
  }
  const onclick = () => {
    if (data.type === 'link') {
      if (!data.link) {
        messageApi.warning('该功能暂未开放！');
        return;
      }
      window.open(data.link, "_blank")
    }
  }
  const onContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(setPosition({ left: e.clientX, top: e.clientY, show: true, index }))
    dispatch(setContent([
      {
        name: "分享",
        type: "share",
        icon: "#icon-fenxiang"
      },
      {
        name: "布局",
        type: "layout",
        icon: "#icon-buju"
      }, {
        name: "编辑",
        type: "edit",
        icon: "#icon-bianji"
      },
      //  {
      //   name: "批量编辑",
      //   type: "allEdit",
      //   icon: "#icon-bianji"
      // },
       {
        name: "删除",
        type: "delete",
        icon: "#icon-shanchu"

      }

    ] as MenuType[]))
    e.preventDefault()
  }
  return (
    <>
      {contextHolder}
      <div onContextMenu={onContextMenu} onClick={onclick} className={`${Style.appItem} ${Style['app-size-' + data.width + '-' + data.height]}`} style={getStyle()}>
        <div className={`${Style.appIcon}`} >
          <div className={Style.appIconImg} style={{ backgroundImage: `url(${data.icon})` }} >

          </div>
        </div>
        <div className={Style.appName}>{data.name}</div>
      </div>
    </>
  )
}

export default AppBox