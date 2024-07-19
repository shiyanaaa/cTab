export interface appType {
  name: string,
  icon: string,
  type: "link" | "component",
  background: string,
  link?: string,
  width: number,
  height: number
}
export interface pageType {
  id: number,
  name: string,
  icon: string,
  list: appType[]
}

export const appList: pageType[] = [
  {
    "id": 1,
    "name": "主页",
    "icon": "icon-menu",
    "list": [
      {
        "width": 3,
        "height": 2,
        "name": "爱淘宝",
        "type": "link",
        "background": "#eb6f2d",
        "link": "https://ai.taobao.com?pid=mm_54561194_2536750027_111828300388&union_lens=lensId%3APUB%401644727921%4021057ef3_09a7_17ef16c69e2_05aa%4001",
        "icon": "https://files.codelife.cc/icons/taobao.svg"
      },
      {
        "width": 2,
        "height": 1,
        "name": "京东商城",
        "type": "link",
        "background": "#ff0000",
        "link": "https://www.jd.com/",
        "icon": "https://files.codelife.cc/icons/jd.svg"
      },
      {
        "width": 3,
        "height": 1,
        "name": "天猫精选",
        "type": "link",
        "background": "#ff0030",
        "link": "https://www.tmall.com/",
        "icon": "https://files.codelife.cc/icons/tmall.svg"
      },
      {
        "width": 1,
        "height": 3,
        "name": "即时设计",
        "type": "link",
        "background": "#cf3d35",
        "link": "https://js.design/square",
        "icon": "https://files.codelife.cc/icons/jsdesign.svg"
      },
      {
        "width": 2,
        "height": 3,
        "name": "小红书",
        "type": "link",
        "background": "#ff2442",
        "link": "https://www.xiaohongshu.com/explore",
        "icon": "https://files.codelife.cc/icons/xiaohongshu.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "百度",
        "type": "link",
        "background": "#346efd",
        "link": "https://www.baidu.com/?tn=39042058_40_oem_dg",
        "icon": "https://files.codelife.cc/icons/baidu.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "斗鱼",
        "type": "link",
        "background": "#ff6a2d",
        "link": "https://www.douyu.com/",
        "icon": "https://files.codelife.cc/icons/douyu.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "秘塔写作猫",
        "type": "link",
        "background": "#fefefe",
        "link": "https://xiezuocat.com/",
        "icon": "https://files.codelife.cc/icons/xiezuocat.com.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "FlowUs",
        "type": "link",
        "background": "#fff",
        "link": "https://flowus.cn/product",
        "icon": "https://files.codelife.cc/icons/flowus.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "新浪微博",
        "type": "link",
        "background": "#ffd850",
        "link": "https://weibo.com/",
        "icon": "https://files.codelife.cc/icons/weibo.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "专业AI论文写作",
        "type": "link",
        "background": "#00b178",
        "link": "https://ibiling.cn/paper",
        "icon": "https://files.codelife.cc/icons/biling.cn.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "豆包-你的AI朋友",
        "type": "link",
        "background": "#ffffff",
        "link": "https://www.doubao.com",
        "icon": "https://files.codelife.cc/icons/doubao.com.webp?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Kimi",
        "type": "link",
        "background": "#000000",
        "link": "https://tj.shshinfo.com/tz/pcw/Kimi10.html",
        "icon": "https://files.codelife.cc/icons/kimi.moonshot.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "i壁纸",
        "type": "link",
        "background": "",
        "link": "",
        "icon": "https://files.codelife.cc/tools-icon/wallpaper.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "爱奇艺",
        "type": "link",
        "background": "#00cc4c",
        "link": "https://www.iqiyi.com/?vfm=f_432_dhm&fv=8648154ddd63e0af",
        "icon": "https://files.codelife.cc/icons/iqiyi.svg"
      },
      {
        "width": 4,
        "height": 4,
        "name": "抖音",
        "type": "link",
        "background": "#1c0b1a",
        "link": "https://www.douyin.com",
        "icon": "https://files.codelife.cc/icons/douyin.svg"
      },
      {
        "width": 3,
        "height": 3,
        "name": "哔哩哔哩",
        "type": "link",
        "background": "#fe65a6",
        "link": "http://www.bilibili.com/",
        "icon": "https://files.codelife.cc/icons/bilibili2.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "iTab新标签页",
        "type": "link",
        "background": "#1581ff",
        "link": "https://itab.link",
        "icon": "https://files.codelife.cc/icons/itab.svg"
      },
      {
        "width": 3,
        "height": 2,
        "name": "知乎",
        "type": "link",
        "background": "#0c6dfe",
        "link": "https://www.zhihu.com/",
        "icon": "https://files.codelife.cc/icons/zhihu.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "iTab浏览器",
        "type": "link",
        "background": "#ffffff",
        "link": "https://www.itab.link/browser.html",
        "icon": "https://files.codelife.cc/icons/itab-browser.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "iTab新手引导",
        "type": "link",
        "background": "#febc04",
        "link": "",
        "icon": "https://files.codelife.cc/icons/guide.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "历史记录",
        "type": "link",
        "background": "#0599d9",
        "link": "",
        "icon": "https://files.codelife.cc/icons/history.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "书签管理",
        "type": "link",
        "background": "",
        "link": "",
        "icon": "https://files.codelife.cc/tools-icon/bookmarks.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "扩展管理",
        "type": "link",
        "background": "#9c9c9c",
        "link": "",
        "icon": "https://files.codelife.cc/icons/extensions.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "设置",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/setting.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "添加图标",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/add.svg"
      },
      {
        "width": 1,
        "height": 2,
        "name": "网易云音乐",
        "type": "link",
        "background": "#fe1816",
        "link": "https://music.163.com/",
        "icon": "https://files.codelife.cc/icons/music163.svg"
      }
    ]
  },
  {
    "id": 2,
    "name": "编程",
    "icon": "icon-code",
    "list": [
      {
        "width": 1,
        "height": 1,
        "name": "Apifox",
        "type": "link",
        "background": "#f4425f",
        "link": "https://www.apifox.cn",
        "icon": "https://files.codelife.cc/icons/apifoxcn.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "GitHub",
        "type": "link",
        "background": "#000",
        "link": "https://github.com/",
        "icon": "https://files.codelife.cc/icons/github.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "V2EX",
        "type": "link",
        "background": "#222222",
        "link": "http://www.v2ex.com/",
        "icon": "https://files.codelife.cc/icons/v2ex.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "React",
        "type": "link",
        "background": "#27333b",
        "link": "https://zh-hans.reactjs.org/",
        "icon": "https://files.codelife.cc/icons/react.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Java学习",
        "type": "link",
        "background": "#1c1c1c",
        "link": "https://mrjokersince1997.github.io/My-Notes/#/",
        "icon": "https://files.codelife.cc/icons/mrjokersince-java.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "码云Gitee",
        "type": "link",
        "background": "#bb2124",
        "link": "https://gitee.com/",
        "icon": "https://files.codelife.cc/icons/gitee.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "CSDN",
        "type": "link",
        "background": "#cc001b",
        "link": "http://www.csdn.net/",
        "icon": "https://files.codelife.cc/icons/csdn.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "w3school在线教程",
        "type": "link",
        "background": "#cc3333",
        "link": "http://www.w3school.com.cn",
        "icon": "https://files.codelife.cc/icons/w3school.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Stack Overflow",
        "type": "link",
        "background": "#444444",
        "link": "https://stackoverflow.com/",
        "icon": "https://files.codelife.cc/icons/stackoverflow.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "掘金",
        "type": "link",
        "background": "#0984fe",
        "link": "https://juejin.cn/",
        "icon": "https://files.codelife.cc/icons/juejin.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "力扣",
        "type": "link",
        "background": "#fff",
        "link": "https://leetcode.cn/",
        "icon": "https://files.codelife.cc/icons/leetcode.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Vue2",
        "type": "link",
        "background": "#fff",
        "link": "https://cn.vuejs.org/",
        "icon": "https://files.codelife.cc/icons/vuejs.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Arco Design",
        "type": "link",
        "background": "#fdfef7",
        "link": "https://arco.design",
        "icon": "https://files.codelife.cc/icons/arco-design.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Ant Design Vue",
        "type": "link",
        "background": "#fff",
        "link": "https://www.antdv.com/docs/vue/introduce-cn/",
        "icon": "https://files.codelife.cc/icons/ant-design-vue.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "开源中国",
        "type": "link",
        "background": "#34b960",
        "link": "http://www.oschina.net/",
        "icon": "https://files.codelife.cc/icons/oschina.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "亚洲云",
        "type": "link",
        "background": "#fff",
        "link": "https://www.asiayun.com/aff/IROSKGHJ",
        "icon": "https://files.codelife.cc/icons/asiayun.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "极客时间",
        "type": "link",
        "background": "#fff",
        "link": "https://time.geekbang.org",
        "icon": "https://files.codelife.cc/icons/geekbang.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "开发者搜索",
        "type": "link",
        "background": "#fff",
        "link": "https://kaifa.baidu.com/",
        "icon": "https://files.codelife.cc/icons/kaifa.baidu.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "爱资源",
        "type": "link",
        "background": "#22a5e2",
        "link": "",
        "icon": "https://files.codelife.cc/icons/iwyu.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "秘塔写作猫",
        "type": "link",
        "background": "#fefefe",
        "link": "https://xiezuocat.com/",
        "icon": "https://files.codelife.cc/icons/xiezuocat.com.svg"
      }
    ]
  },
  {
    "id": 3,
    "name": "设计",
    "icon": "icon-des",
    "list": [
      {
        "width": 1,
        "height": 1,
        "name": "稿定设计",
        "type": "link",
        "background": "#2455f4",
        "link": "https://www.gaoding.com/utms/cd52981c7dfe966f01ee33d63fa94183",
        "icon": "https://files.codelife.cc/icons/gaoding.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "即时设计",
        "type": "link",
        "background": "#cf3d35",
        "link": "https://js.design/square",
        "icon": "https://files.codelife.cc/icons/jsdesign.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "花瓣",
        "type": "link",
        "background": "#ea2936",
        "link": "http://huaban.com/",
        "icon": "https://files.codelife.cc/icons/huaban.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "站酷",
        "type": "link",
        "background": "#e6be1c",
        "link": "https://www.zcool.com.cn/",
        "icon": "https://files.codelife.cc/icons/zcool.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Dribbble",
        "type": "link",
        "background": "#f24e7c",
        "link": "https://dribbble.com",
        "icon": "https://files.codelife.cc/icons/dribbble.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "美图设计室",
        "type": "link",
        "background": "#000000",
        "link": "https://www.x-design.com",
        "icon": "https://files.codelife.cc/icons/x-design.com .svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "大作免费图片",
        "type": "link",
        "background": "#ff4d4d",
        "link": "https://www.bigbigwork.com",
        "icon": "https://files.codelife.cc/icons/bigbigwork.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "昵图网",
        "type": "link",
        "background": "#dd137b",
        "link": "http://www.nipic.com/index.html",
        "icon": "https://files.codelife.cc/icons/nipic.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "每日ui设计",
        "type": "link",
        "background": "#fafefe",
        "link": "https://uidesigndaily.com/",
        "icon": "https://files.codelife.cc/icons/uidesigndaily.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Unsplash加速版",
        "type": "link",
        "background": "#FFFFFF",
        "link": "https://unsplash.dogedoge.com/",
        "icon": "https://files.codelife.cc/icons/unsplash.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "TinyPNG",
        "type": "link",
        "background": "#cde7f0",
        "link": "https://tinypng.com",
        "icon": "https://files.codelife.cc/icons/60b9eba2ae5a9ba4024b3bfc.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "搜图导航",
        "type": "link",
        "background": "#fec20a",
        "link": "https://www.91sotu.com/",
        "icon": "https://files.codelife.cc/icons/www.91sotu.com.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Iconfont",
        "type": "link",
        "background": "#ffffff",
        "link": "https://www.iconfont.cn/",
        "icon": "https://files.codelife.cc/icons/iconfont.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "中国色",
        "type": "link",
        "background": "#dadada",
        "link": "http://zhongguose.com/",
        "icon": "https://files.codelife.cc/icons/zhongguose.com.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "千图网",
        "type": "link",
        "background": "#00a46b",
        "link": "http://www.58pic.com/",
        "icon": "https://files.codelife.cc/icons/58pic.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "千图AI设计助手",
        "type": "link",
        "background": "#0b62ff",
        "link": "https://hisheai.com/",
        "icon": "https://files.codelife.cc/icons/hisheai.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "包图网",
        "type": "link",
        "background": "#fff5c8",
        "link": "http://ibaotu.com/",
        "icon": "https://files.codelife.cc/icons/ibaotu.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "奇迹秀",
        "type": "link",
        "background": "#122441",
        "link": "http://www.qijishow.com/down/index.html",
        "icon": "https://files.codelife.cc/icons/qijishow.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "字由字体",
        "type": "link",
        "background": "#403F41",
        "link": "https://www.hellofont.cn",
        "icon": "https://files.codelife.cc/icons/hellofont.cn.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Top.AI",
        "type": "link",
        "background": "#ffffff",
        "link": "https://topd.tencent.com/ai",
        "icon": "https://files.codelife.cc/icons/top-ai.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      }
    ]
  },
  {
    "id": 4,
    "name": "产品",
    "icon": "icon-p",
    "list": [
      {
        "width": 1,
        "height": 1,
        "name": "FlowUs",
        "type": "link",
        "background": "#fff",
        "link": "https://flowus.cn/product",
        "icon": "https://files.codelife.cc/icons/flowus.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Notion",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/notion.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "思维导图流程图",
        "type": "link",
        "background": "#1985f0",
        "link": "https://www.processon.com/",
        "icon": "https://files.codelife.cc/icons/processon.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "PPT神器",
        "type": "link",
        "background": "#ffffff",
        "link": "https://www.officeplus.cn/",
        "icon": "https://files.codelife.cc/icons/officeplus.cn.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "uTools",
        "type": "link",
        "background": "#fff",
        "link": "https://u.tools/",
        "icon": "https://files.codelife.cc/icons/utools.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "秘塔写作猫",
        "type": "link",
        "background": "#fefefe",
        "link": "https://xiezuocat.com/",
        "icon": "https://files.codelife.cc/icons/xiezuocat.com.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "石墨文档",
        "type": "link",
        "background": "#fff",
        "link": "https://shimo.im/desktop",
        "icon": "https://files.codelife.cc/icons/shimo.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Iconfont",
        "type": "link",
        "background": "#ffffff",
        "link": "https://www.iconfont.cn/",
        "icon": "https://files.codelife.cc/icons/iconfont.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "36氪",
        "type": "link",
        "background": "#1380d8",
        "link": "http://www.36kr.com",
        "icon": "https://files.codelife.cc/icons/36kr.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "知犀思维导图",
        "type": "link",
        "background": "#4dec7c",
        "link": "",
        "icon": "https://files.codelife.cc/icons/zhixi.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "少数派",
        "type": "link",
        "background": "#d7191a",
        "link": "https://sspai.com/",
        "icon": "https://files.codelife.cc/icons/sspai.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "扩展搜搜",
        "type": "link",
        "background": "#fff",
        "link": "https://www.crxsoso.com/",
        "icon": "https://files.codelife.cc/icons/crxsoso.com.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "iSlide PPT神器",
        "type": "link",
        "background": "#fff",
        "link": "https://www.islide.cc/ppt",
        "icon": "https://files.codelife.cc/icons/islide.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "boardmix白板",
        "type": "link",
        "background": "#fff",
        "link": "https://boardmix.cn/",
        "icon": "https://files.codelife.cc/icons/boardmix.cn.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "英语润色",
        "type": "link",
        "background": "#fff",
        "link": "https://www.writingo.net/document",
        "icon": "https://files.codelife.cc/icons/writingo.net.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "即时工具",
        "type": "link",
        "background": "#369dfc",
        "link": "https://www.67tool.com/",
        "icon": "https://files.codelife.cc/icons/67tool.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "原型托管",
        "type": "link",
        "background": "#ffffff",
        "link": "https://axmax.cn",
        "icon": "https://files.codelife.cc/icons/axmaxcn.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "心动AI简历",
        "type": "link",
        "background": "#ffffff",
        "link": "https://cv.ibiling.cn/",
        "icon": "https://files.codelife.cc/icons/cv.ibiling.cn.webp?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "人人都是产品经理",
        "type": "link",
        "background": "#fff",
        "link": "http://www.woshipm.com/",
        "icon": "https://files.codelife.cc/icons/woshipm.svg"
      }
    ]
  },
  {
    "id": 5,
    "name": "AI",
    "icon": "icon-ai",
    "list": [
      {
        "width": 1,
        "height": 1,
        "name": "AI工具集",
        "type": "link",
        "background": "#0071c0",
        "link": "https://ai-bot.cn/",
        "icon": "https://files.codelife.cc/icons/ai-bot.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "AI免费生成PPT",
        "type": "link",
        "background": "#fff",
        "link": "https://www.aippt.cn/",
        "icon": "https://files.codelife.cc/icons/aippt.cn.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "专业AI论文写作",
        "type": "link",
        "background": "#00b178",
        "link": "https://ibiling.cn/paper",
        "icon": "https://files.codelife.cc/icons/biling.cn.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "AI智能小助手",
        "type": "link",
        "background": "#0ea27e",
        "link": "https://itab.juxw.com/home",
        "icon": "https://files.codelife.cc/icons/aibot.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "AI一键论文",
        "type": "link",
        "background": "#fff",
        "link": "https://www.aipaperpass.com?pic=xQN6",
        "icon": "https://files.codelife.cc/icons/aipaperpass.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "讯飞星火",
        "type": "link",
        "background": "#fff",
        "link": "https://xinghuo.xfyun.cn/?ch=srx_5CizI",
        "icon": "https://files.codelife.cc/icons/xinghuo.xfyun.cn.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Kimi",
        "type": "link",
        "background": "#000000",
        "link": "https://tj.shshinfo.com/tz/pcw/Kimi10.html",
        "icon": "https://files.codelife.cc/icons/kimi.moonshot.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "思维导图流程图",
        "type": "link",
        "background": "#1985f0",
        "link": "https://www.processon.com/",
        "icon": "https://files.codelife.cc/icons/processon.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "开放猫",
        "type": "link",
        "background": "#ffffff",
        "link": "https://ai.openmao.cn/",
        "icon": "https://files.codelife.cc/icons/openmao.panchuang.net.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "秘塔AI搜索",
        "type": "link",
        "background": "#ffffff",
        "link": "https://metaso.cn/",
        "icon": "https://files.codelife.cc/website/xiezuocat.com.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "秘塔写作猫",
        "type": "link",
        "background": "#fefefe",
        "link": "https://xiezuocat.com/",
        "icon": "https://files.codelife.cc/icons/xiezuocat.com.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "豆包",
        "type": "link",
        "background": "#ffffff",
        "link": "https://www.doubao.com",
        "icon": "https://files.codelife.cc/icons/doubao.com.webp?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "AI论文助手",
        "type": "link",
        "background": "#ffffff",
        "link": "https://ai.wolian.chat/openmao/#/?inviteCode=1721353838461456386",
        "icon": "https://files.codelife.cc/icons/ai.wolian.chat.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "wallesAI",
        "type": "link",
        "background": "#7444e3",
        "link": "https://walles.ai/?invite_code=Z37EKK",
        "icon": "https://files.codelife.cc/icons/walles.ai.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "即时AI",
        "type": "link",
        "background": "#FFFFFF",
        "link": "https://js.design/ai",
        "icon": "https://files.codelife.cc/icons/js-design-ai.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "WHEE",
        "type": "link",
        "background": "#3549ff",
        "link": "https://www.whee.com",
        "icon": "https://files.codelife.cc/icons/whee.com.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "文心一格",
        "type": "link",
        "background": "#ffffff",
        "link": "https://yige.baidu.com",
        "icon": "https://files.codelife.cc/icons/yige.baidu.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "稿定AI绘画",
        "type": "link",
        "background": "#2455f4",
        "link": "https://www.gaoding.com/utms/ba46f32f055a48aab63ee74f15281593",
        "icon": "https://files.codelife.cc/icons/gaoding.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Ai思维导图",
        "type": "link",
        "background": "#ffffff",
        "link": "https://boardmix.cn/mindmapping/",
        "icon": "https://files.codelife.cc/icons/boardmix.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Ai作图",
        "type": "link",
        "background": "#141416",
        "link": "https://k986.com/",
        "icon": "https://files.codelife.cc/icons/k986.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Giiso写作机器人",
        "type": "link",
        "background": "#444444",
        "link": "https://www.giiso.com/#/",
        "icon": "https://files.codelife.cc/icons/giiso.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "飞书妙记",
        "type": "link",
        "background": "#ffffff",
        "link": "https://www.feishu.cn/product/minutes",
        "icon": "https://files.codelife.cc/icons/feishufeishu.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "万兴爱画",
        "type": "link",
        "background": "#12142f",
        "link": "https://aigc.wondershare.cn/",
        "icon": "https://files.codelife.cc/icons/aigc.wondershare.cn.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "百度创意应用",
        "type": "link",
        "background": "#383aee",
        "link": "https://wenxin.baidu.com/younger/creativeSpace",
        "icon": "https://files.codelife.cc/icons/wenxin.baidu.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "百度智能创作",
        "type": "link",
        "background": "#000000",
        "link": "https://ai.baidu.com/creativity/main/workbench",
        "icon": "https://files.codelife.cc/icons/4c9b40.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "降低AI疑似度",
        "type": "link",
        "background": "",
        "link": "https://ibiling.cn/paper-pass",
        "icon": "https://files.codelife.cc/icons/ibiling123.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      }
    ]
  },
  {
    "id": 6,
    "name": "摸鱼",
    "icon": "icon-keybord",
    "list": [
      {
        "width": 1,
        "height": 1,
        "name": "小红书",
        "type": "link",
        "background": "#ff2442",
        "link": "https://www.xiaohongshu.com/explore",
        "icon": "https://files.codelife.cc/icons/xiaohongshu.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "新浪微博",
        "type": "link",
        "background": "#ffd850",
        "link": "https://weibo.com/",
        "icon": "https://files.codelife.cc/icons/weibo.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "爱奇艺",
        "type": "link",
        "background": "#00cc4c",
        "link": "https://www.iqiyi.com/?vfm=f_432_dhm&fv=8648154ddd63e0af",
        "icon": "https://files.codelife.cc/icons/iqiyi.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "优酷",
        "type": "link",
        "background": "#ffffff",
        "link": "http://www.youku.com",
        "icon": "https://files.codelife.cc/icons/youku.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "腾讯视频",
        "type": "link",
        "background": "#ffffff",
        "link": "http://v.qq.com/",
        "icon": "https://files.codelife.cc/icons/qqvideo.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Bilibili",
        "type": "link",
        "background": "#fe65a6",
        "link": "https://www.bilibili.com/",
        "icon": "https://files.codelife.cc/icons/bilibili2.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "知乎",
        "type": "link",
        "background": "#0c6dfe",
        "link": "https://www.zhihu.com/",
        "icon": "https://files.codelife.cc/icons/zhihu.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Steam",
        "type": "link",
        "background": "#000000",
        "link": "https://store.steampowered.com/",
        "icon": "https://files.codelife.cc/icons/steam.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "抖音",
        "type": "link",
        "background": "#1c0b1a",
        "link": "https://www.douyin.com",
        "icon": "https://files.codelife.cc/icons/douyin.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "小霸王",
        "type": "link",
        "background": "#1499b5",
        "link": "https://www.yikm.net/",
        "icon": "https://files.codelife.cc/icons/www.yikm.net.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "4399小游戏",
        "type": "link",
        "background": "#f19425",
        "link": "https://www.4399.com/",
        "icon": "https://files.codelife.cc/icons/4399.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "虎牙直播",
        "type": "link",
        "background": "#fff",
        "link": "http://www.huya.com/",
        "icon": "https://files.codelife.cc/icons/huya.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "斗鱼",
        "type": "link",
        "background": "#ff6a2d",
        "link": "https://www.douyu.com/",
        "icon": "https://files.codelife.cc/icons/douyu.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "今日热榜",
        "type": "link",
        "background": "#165dff",
        "link": "https://rebang.today",
        "icon": "https://files.codelife.cc/icons/rebang.today.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "番茄小说网",
        "type": "link",
        "background": "#fff",
        "link": "https://fanqienovel.com/",
        "icon": "https://files.codelife.cc/icons/fanqienovel.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "小众技术资源库",
        "type": "link",
        "background": "#fff",
        "link": "https://www.xiaozhongjishu.com",
        "icon": "https://files.codelife.cc/icons/xiaozhongjishu.com.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "豆瓣",
        "type": "link",
        "background": "#00c117",
        "link": "http://www.douban.com",
        "icon": "https://files.codelife.cc/icons/douban.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "什么值得买",
        "type": "link",
        "background": "#ed1c24",
        "link": "http://www.smzdm.com/",
        "icon": "https://files.codelife.cc/icons/smzdm.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "微信读书",
        "type": "link",
        "background": "#fff",
        "link": "https://weread.qq.com/",
        "icon": "https://files.codelife.cc/icons/weread-qq.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "果核剥壳",
        "type": "link",
        "background": "#fff",
        "link": "https://www.ghxi.com/",
        "icon": "https://files.codelife.cc/icons/ghxi.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "emoji合成",
        "type": "link",
        "background": "#fff",
        "link": "https://tikolu.net/emojimix/",
        "icon": "https://files.codelife.cc/icons/59f723c85138415abdea365b.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "熊猫DJ音乐网",
        "type": "link",
        "background": "",
        "link": "https://www.djcscs.com/index.php?uid=102271",
        "icon": "https://files.codelife.cc/icons/djcscs.webp?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      }
    ]
  }
]
