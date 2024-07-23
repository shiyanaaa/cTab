import { useSelector } from 'react-redux';
import Style from './RigthBox.module.scss'
import { RootState } from '../../store';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { close } from '../../store/rightBox'
import { changeItemSize, deleteAppItem, updateAppItem, addAppItem } from '../../store/appSlice';
import type { appType } from '../../tools/app';
import { message } from 'antd';
import { Modal, Form, Input, ColorPicker, Upload, Button } from 'antd';
import { getIconByUrl } from '../../api/codelife';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Color } from 'antd/es/color-picker'
type FieldType = {
  name?: string;
  link?: string;
  background?: string;
  icon?: string;
};
function RigthBox() {
  const [formRef] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
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
  const getIcon=()=>{
    
    getIconByUrl(formRef.getFieldValue("link")).then(res=>{
      if(res.status!==200||res.data.code!==200) return;
      const temp={...form, icon:res.data.data.src,background:res.data.data.backgroundColor} as appType
      setForm(temp)
      formRef.setFieldsValue(temp)
      console.log(formRef.getFieldValue('icon'))
    })
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState<appType>()
  const [loading] = useState(false);
  const [index, setIndex] = useState<number>(0);
  const [formType, setFormType] = useState<'add' | 'edit'>('add');
  const styles = {
    top: position.top,
    left: position.left,
    display: position.show ? "block" : "none"
  }
  const handleOk = () => {
    if (formType === "add") {
      dispatch(addAppItem({
        data: {
          ...form,
          ...formRef.getFieldsValue(),
          background: form?.background
        }
      }))
    } else {
      console.log(formRef.getFieldValue('icon'))
      dispatch(updateAppItem({
        index,
        data: {
          ...form,
          ...formRef.getFieldsValue(),
          background: form?.background
        }
      }))
    }

    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  const setColor = (color: Color) => {
    setForm({ ...form, background: color.toHexString() } as appType)
  }
  const onEdit = (data: appType | undefined, currentIndex: number) => {
    if (!data) return;
    setFormType("edit")
    setForm(data)
    setIndex(currentIndex)
    formRef.setFieldsValue(data)
    setIsModalOpen(true)
  }
  const onBlur = () => {

    dispatch(close())
  }
  useEffect(() => {
    if (position.show && boxRef.current !== null)
      boxRef.current.focus()
  }, [position])
  const add = () => {
    setFormType("add")
    setForm({} as appType)
    formRef.setFieldsValue({} as appType)
    setIsModalOpen(true)
  }
  const onclick = (index: number) => {

    dispatch(close())
    if (content[index].type === 'edit') {
      onEdit(current, position.index)
    } else if (content[index].type === 'delete') {
      dispatch(deleteAppItem(position.index))

    }
    else if (content[index].type === 'share' && current?.link) {
      window.open(current?.link, "_blank")
    }
    else if (content[index].type === 'addIcon') {
      add()
    }

    else {
      messageApi.warning('该功能暂未开放！');
    }

  }
  const changeSize = (width: number, height: number) => {

    dispatch(changeItemSize({
      width,
      height,
      index: position.index
    }))
    dispatch(close())
  }
  return (
    <>

      {contextHolder}
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
                          onClick={() => changeSize(row, col)}
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
      <Modal cancelText="取消"
        okText="确定" title="编辑图标" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          form={formRef}
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="图标名称"
            name="name"
          >
            <Input  />
          </Form.Item>
          <Form.Item<FieldType>
            label="图标链接"
            name="link"
            
          >
            <Input  addonAfter={(<Button  type="primary" onClick={getIcon}>获取</Button>)}/>
            
          </Form.Item>
          <Form.Item<FieldType>
            label="图标颜色"
            name="background"
          >
            <ColorPicker onChangeComplete={setColor} />
          </Form.Item>
          <Form.Item<FieldType>
            label="图标图片"
            name="icon"
            
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              disabled
              
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            >
              {
                form && form.icon ?
                  <img src={form.icon} alt="avatar" style={{ width: '100%', backgroundColor: form.background, borderRadius: "8px" }} /> :
                  uploadButton
              }

            </Upload>

          </Form.Item>
        </Form>
      </Modal>

    </>
  )
}

export default RigthBox