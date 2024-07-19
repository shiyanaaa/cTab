

import './App.scss'
import Header from './components/Header/Header'
import AppBox from './components/AppBox/AppBox'
import Search from './components/Search/Search'
import Sidebar from './components/Sidebar/Sidebar'
import Time from './components/Time/Time'
import { useEffect, useState } from 'react'
import { getData } from './tools/tools'
import { setAppList, setCurrentIdByIndex,updateAppItem } from './store/appSlice'
import { useDispatch } from 'react-redux'
import RigthBox from './components/RigthBox/RigthBox'
import type { appType } from './tools/app';
import { Modal, Form, Input, ColorPicker, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Color } from 'antd/es/color-picker'
type FieldType = {
  name?: string;
  link?: string;
  background?: string;
  icon?: string;
};
function App() {
  const [formRef] = Form.useForm();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState<number>(0);
  const [form, setForm] = useState<appType>()
  const [loading] = useState(false);
  const onEdit = (data: appType | undefined, currentIndex: number) => {
    if (!data) return;
    setForm(data)
    setIndex(currentIndex)
    formRef.setFieldsValue(data)
    setIsModalOpen(true)
  }
  useEffect(() => {
    dispatch(setAppList(getData()))
    dispatch(setCurrentIdByIndex(0))
  });
  const handleOk = () => {
    dispatch(updateAppItem({
      index,
      data:{
        ...form,
        ...formRef.getFieldsValue(),
        background: form?.background
      }
    }))
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
  const setColor=(color:Color)=>{
    setForm({...form,background:color.toHexString()} as appType)
  }
  return (
    <>

      <div className="main">
        <Sidebar />
        <Header />
        <div className="main-box">
          <Time />
          <Search />
          <AppBox />
        </div>
        <RigthBox onEdit={onEdit} />
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
            <Form.Item<FieldType>
              label="图标名称"
              name="name"
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="图标链接"
              name="link"
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="图标颜色"
              name="background"
            >
              <ColorPicker onChangeComplete={setColor}/>
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
      </div>

    </>
  )
}

export default App
