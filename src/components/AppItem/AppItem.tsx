import Style from './AppItem.module.scss'
import type { appType } from '../AppBox/app'
import { message } from 'antd';
function AppBox(props: { data: appType }) {
  const [messageApi, contextHolder] = message.useMessage();
  const { data } = props;
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
  return (
    <>
      {contextHolder}
      <div onClick={onclick} className={`${Style.appItem} ${Style['app-size-'+data.width+'-'+data.height]}`} style={getStyle()}>
        <div className={`${Style.appIcon}`} >
          <img className={Style.appIconImg} src={data.icon} alt={data.name} />
        </div>
        <div className={Style.appName}>{data.name}</div>
      </div>
    </>
  )
}

export default AppBox