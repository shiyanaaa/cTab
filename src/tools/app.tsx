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
  id:number,
  name: string,
  icon: string,
  list: appType[]
}

export const appList: pageType[] = [
  {
    id:1,name: "主页", icon: "icon-menu", list: [
      {
        "width": 3,
        "height": 2,
        "name": "爱淘宝",
        "type": "link",
        "background": "#eb6f2d",
        "link": "https://ai.taobao.com/",
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
        "link": "https://js.design/",
        "icon": "https://files.codelife.cc/icons/jsdesign.svg"
      },
      {
        "width": 2,
        "height": 3,
        "name": "小红书",
        "type": "link",
        "background": "#ff2442",
        "link": "https://www.xiaohongshu.com/",
        "icon": "https://files.codelife.cc/icons/xiaohongshu.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "百度",
        "type": "link",
        "background": "#346efd",
        "link": "https://www.baidu.com/",
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
        "link": "https://www.doubao.com/chat",
        "icon": "https://files.codelife.cc/icons/doubao.com.webp?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Kimi",
        "type": "link",
        "background": "#000000",
        "link": "https://kimi.moonshot.cn/",
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
        "link": "https://www.iqiyi.com/",
        "icon": "https://files.codelife.cc/icons/iqiyi.svg"
      },
      {
        "width": 4,
        "height": 4,
        "name": "抖音",
        "type": "link",
        "background": "#1c0b1a",
        "link": "https://www.douyin.com/",
        "icon": "https://files.codelife.cc/icons/douyin.svg"
      },
      {
        "width": 3,
        "height": 3,
        "name": "哔哩哔哩",
        "type": "link",
        "background": "#fe65a6",
        "link": "https://www.bilibili.com/",
        "icon": "https://files.codelife.cc/icons/bilibili2.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "iTab新标签页",
        "type": "link",
        "background": "#1581ff",
        "link": "https://itab.link/",
        "icon": "https://files.codelife.cc/icons/itab.svg"
      },
      {
        "width": 3,
        "height": 2,
        "name": "知乎",
        "type": "link",
        "background": "#0c6dfe",
        "link": "https://www.zhihu.com",
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
        "background": "undefined",
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
    id:2,name: "编程", icon: "icon-code", list: [
      {
        "width": 1,
        "height": 1,
        "name": "Apifox",
        "type": "link",
        "background": "#f4425f",
        "link": "",
        "icon": "https://files.codelife.cc/icons/apifoxcn.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "GitHub",
        "type": "link",
        "background": "#000",
        "link": "",
        "icon": "https://files.codelife.cc/icons/github.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "V2EX",
        "type": "link",
        "background": "#222222",
        "link": "",
        "icon": "https://files.codelife.cc/icons/v2ex.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "React",
        "type": "link",
        "background": "#27333b",
        "link": "",
        "icon": "https://files.codelife.cc/icons/react.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Java学习",
        "type": "link",
        "background": "#1c1c1c",
        "link": "",
        "icon": "https://files.codelife.cc/icons/mrjokersince-java.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "码云Gitee",
        "type": "link",
        "background": "#bb2124",
        "link": "",
        "icon": "https://files.codelife.cc/icons/gitee.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "CSDN",
        "type": "link",
        "background": "#cc001b",
        "link": "",
        "icon": "https://files.codelife.cc/icons/csdn.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "w3school在线教程",
        "type": "link",
        "background": "#cc3333",
        "link": "",
        "icon": "https://files.codelife.cc/icons/w3school.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Stack Overflow",
        "type": "link",
        "background": "#444444",
        "link": "",
        "icon": "https://files.codelife.cc/icons/stackoverflow.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "掘金",
        "type": "link",
        "background": "#0984fe",
        "link": "",
        "icon": "https://files.codelife.cc/icons/juejin.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "力扣",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/leetcode.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Vue2",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/vuejs.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Arco Design",
        "type": "link",
        "background": "#fdfef7",
        "link": "",
        "icon": "https://files.codelife.cc/icons/arco-design.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Ant Design Vue",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/ant-design-vue.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "开源中国",
        "type": "link",
        "background": "#34b960",
        "link": "",
        "icon": "https://files.codelife.cc/icons/oschina.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "亚洲云",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/asiayun.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "极客时间",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/geekbang.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "开发者搜索",
        "type": "link",
        "background": "#fff",
        "link": "",
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
        "link": "",
        "icon": "https://files.codelife.cc/icons/xiezuocat.com.svg"
      }
    ]
  },
  {
    id:3,name: "设计", icon: "icon-des", list: [
      {
        "width": 1,
        "height": 1,
        "name": "稿定设计",
        "type": "link",
        "background": "#2455f4",
        "link": "",
        "icon": "https://files.codelife.cc/icons/gaoding.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "即时设计",
        "type": "link",
        "background": "#cf3d35",
        "link": "",
        "icon": "https://files.codelife.cc/icons/jsdesign.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "花瓣",
        "type": "link",
        "background": "#ea2936",
        "link": "",
        "icon": "https://files.codelife.cc/icons/huaban.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "站酷",
        "type": "link",
        "background": "#e6be1c",
        "link": "",
        "icon": "https://files.codelife.cc/icons/zcool.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Dribbble",
        "type": "link",
        "background": "#f24e7c",
        "link": "",
        "icon": "https://files.codelife.cc/icons/dribbble.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "美图设计室",
        "type": "link",
        "background": "#000000",
        "link": "",
        "icon": "https://files.codelife.cc/icons/x-design.com .svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "大作免费图片",
        "type": "link",
        "background": "#ff4d4d",
        "link": "",
        "icon": "https://files.codelife.cc/icons/bigbigwork.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "昵图网",
        "type": "link",
        "background": "#dd137b",
        "link": "",
        "icon": "https://files.codelife.cc/icons/nipic.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "每日ui设计",
        "type": "link",
        "background": "#fafefe",
        "link": "",
        "icon": "https://files.codelife.cc/icons/uidesigndaily.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Unsplash加速版",
        "type": "link",
        "background": "#FFFFFF",
        "link": "",
        "icon": "https://files.codelife.cc/icons/unsplash.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "TinyPNG",
        "type": "link",
        "background": "#cde7f0",
        "link": "",
        "icon": "https://files.codelife.cc/icons/60b9eba2ae5a9ba4024b3bfc.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "搜图导航",
        "type": "link",
        "background": "#fec20a",
        "link": "",
        "icon": "https://files.codelife.cc/icons/www.91sotu.com.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Iconfont",
        "type": "link",
        "background": "#ffffff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/iconfont.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "中国色",
        "type": "link",
        "background": "#dadada",
        "link": "",
        "icon": "https://files.codelife.cc/icons/zhongguose.com.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "千图网",
        "type": "link",
        "background": "#00a46b",
        "link": "",
        "icon": "https://files.codelife.cc/icons/58pic.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "千图AI设计助手",
        "type": "link",
        "background": "#0b62ff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/hisheai.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "包图网",
        "type": "link",
        "background": "#fff5c8",
        "link": "",
        "icon": "https://files.codelife.cc/icons/ibaotu.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "奇迹秀",
        "type": "link",
        "background": "#122441",
        "link": "",
        "icon": "https://files.codelife.cc/icons/qijishow.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "字由字体",
        "type": "link",
        "background": "#403F41",
        "link": "",
        "icon": "https://files.codelife.cc/icons/hellofont.cn.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Top.AI",
        "type": "link",
        "background": "#ffffff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/top-ai.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      }
    ]
  },
  {
    id:4,name: "产品", icon: "icon-p", list: [
      {
        "width": 1,
        "height": 1,
        "name": "FlowUs",
        "type": "link",
        "background": "#fff",
        "link": "",
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
        "link": "",
        "icon": "https://files.codelife.cc/icons/processon.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "PPT神器",
        "type": "link",
        "background": "#ffffff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/officeplus.cn.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "uTools",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/utools.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "秘塔写作猫",
        "type": "link",
        "background": "#fefefe",
        "link": "",
        "icon": "https://files.codelife.cc/icons/xiezuocat.com.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "石墨文档",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/shimo.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Iconfont",
        "type": "link",
        "background": "#ffffff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/iconfont.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "36氪",
        "type": "link",
        "background": "#1380d8",
        "link": "",
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
        "link": "",
        "icon": "https://files.codelife.cc/icons/sspai.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "扩展搜搜",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/crxsoso.com.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "iSlide PPT神器",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/islide.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "boardmix白板",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/boardmix.cn.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "英语润色",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/writingo.net.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "即时工具",
        "type": "link",
        "background": "#369dfc",
        "link": "",
        "icon": "https://files.codelife.cc/icons/67tool.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "原型托管",
        "type": "link",
        "background": "#ffffff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/axmaxcn.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "心动AI简历",
        "type": "link",
        "background": "#ffffff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/cv.ibiling.cn.webp?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "人人都是产品经理",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/woshipm.svg"
      }
    ]
  },
  {
    id:5,name: "AI", icon: "icon-ai", list: [
      {
        "width": 1,
        "height": 1,
        "name": "AI工具集",
        "type": "link",
        "background": "#0071c0",
        "link": "",
        "icon": "https://files.codelife.cc/icons/ai-bot.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "AI免费生成PPT",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/aippt.cn.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "专业AI论文写作",
        "type": "link",
        "background": "#00b178",
        "link": "",
        "icon": "https://files.codelife.cc/icons/biling.cn.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "AI智能小助手",
        "type": "link",
        "background": "#0ea27e",
        "link": "",
        "icon": "https://files.codelife.cc/icons/aibot.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "AI一键论文",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/aipaperpass.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "讯飞星火",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/xinghuo.xfyun.cn.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Kimi",
        "type": "link",
        "background": "#000000",
        "link": "",
        "icon": "https://files.codelife.cc/icons/kimi.moonshot.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "思维导图流程图",
        "type": "link",
        "background": "#1985f0",
        "link": "",
        "icon": "https://files.codelife.cc/icons/processon.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "开放猫",
        "type": "link",
        "background": "#ffffff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/openmao.panchuang.net.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "秘塔AI搜索",
        "type": "link",
        "background": "#ffffff",
        "link": "",
        "icon": "https://files.codelife.cc/website/xiezuocat.com.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "秘塔写作猫",
        "type": "link",
        "background": "#fefefe",
        "link": "",
        "icon": "https://files.codelife.cc/icons/xiezuocat.com.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "豆包",
        "type": "link",
        "background": "#ffffff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/doubao.com.webp?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "AI论文助手",
        "type": "link",
        "background": "#ffffff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/ai.wolian.chat.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "wallesAI",
        "type": "link",
        "background": "#7444e3",
        "link": "",
        "icon": "https://files.codelife.cc/icons/walles.ai.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "即时AI",
        "type": "link",
        "background": "#FFFFFF",
        "link": "",
        "icon": "https://files.codelife.cc/icons/js-design-ai.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "WHEE",
        "type": "link",
        "background": "#3549ff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/whee.com.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "文心一格",
        "type": "link",
        "background": "#ffffff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/yige.baidu.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "稿定AI绘画",
        "type": "link",
        "background": "#2455f4",
        "link": "",
        "icon": "https://files.codelife.cc/icons/gaoding.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Ai思维导图",
        "type": "link",
        "background": "#ffffff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/boardmix.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Ai作图",
        "type": "link",
        "background": "#141416",
        "link": "",
        "icon": "https://files.codelife.cc/icons/k986.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Giiso写作机器人",
        "type": "link",
        "background": "#444444",
        "link": "",
        "icon": "https://files.codelife.cc/icons/giiso.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "飞书妙记",
        "type": "link",
        "background": "#ffffff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/feishufeishu.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "万兴爱画",
        "type": "link",
        "background": "#12142f",
        "link": "",
        "icon": "https://files.codelife.cc/icons/aigc.wondershare.cn.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "百度创意应用",
        "type": "link",
        "background": "#383aee",
        "link": "",
        "icon": "https://files.codelife.cc/icons/wenxin.baidu.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "百度智能创作",
        "type": "link",
        "background": "#000000",
        "link": "",
        "icon": "https://files.codelife.cc/icons/4c9b40.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "降低AI疑似度",
        "type": "link",
        "background": "",
        "link": "",
        "icon": "https://files.codelife.cc/icons/ibiling123.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      }
    ]
  },
  {
    id:6,name: "摸鱼", icon: "icon-keybord", list: [
      {
        "width": 1,
        "height": 1,
        "name": "小红书",
        "type": "link",
        "background": "#ff2442",
        "link": "",
        "icon": "https://files.codelife.cc/icons/xiaohongshu.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "新浪微博",
        "type": "link",
        "background": "#ffd850",
        "link": "",
        "icon": "https://files.codelife.cc/icons/weibo.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "爱奇艺",
        "type": "link",
        "background": "#00cc4c",
        "link": "",
        "icon": "https://files.codelife.cc/icons/iqiyi.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "优酷",
        "type": "link",
        "background": "#ffffff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/youku.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "腾讯视频",
        "type": "link",
        "background": "#ffffff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/qqvideo.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Bilibili",
        "type": "link",
        "background": "#fe65a6",
        "link": "",
        "icon": "https://files.codelife.cc/icons/bilibili2.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "知乎",
        "type": "link",
        "background": "#0c6dfe",
        "link": "",
        "icon": "https://files.codelife.cc/icons/zhihu.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "Steam",
        "type": "link",
        "background": "#000000",
        "link": "",
        "icon": "https://files.codelife.cc/icons/steam.svg"
      },
      {
        "width": 4,
        "height": 4,
        "name": "抖音",
        "type": "link",
        "background": "#1c0b1a",
        "link": "",
        "icon": "https://files.codelife.cc/icons/douyin.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "小霸王",
        "type": "link",
        "background": "#1499b5",
        "link": "",
        "icon": "https://files.codelife.cc/icons/www.yikm.net.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "4399小游戏",
        "type": "link",
        "background": "#f19425",
        "link": "",
        "icon": "https://files.codelife.cc/icons/4399.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "虎牙直播",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/huya.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "斗鱼",
        "type": "link",
        "background": "#ff6a2d",
        "link": "",
        "icon": "https://files.codelife.cc/icons/douyu.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "今日热榜",
        "type": "link",
        "background": "#165dff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/rebang.today.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "番茄小说网",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/fanqienovel.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "小众技术资源库",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/xiaozhongjishu.com.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "豆瓣",
        "type": "link",
        "background": "#00c117",
        "link": "",
        "icon": "https://files.codelife.cc/icons/douban.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "什么值得买",
        "type": "link",
        "background": "#ed1c24",
        "link": "",
        "icon": "https://files.codelife.cc/icons/smzdm.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "微信读书",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/weread-qq.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "果核剥壳",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/ghxi.svg"
      },
      {
        "width": 1,
        "height": 1,
        "name": "emoji合成",
        "type": "link",
        "background": "#fff",
        "link": "",
        "icon": "https://files.codelife.cc/icons/59f723c85138415abdea365b.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      },
      {
        "width": 1,
        "height": 1,
        "name": "熊猫DJ音乐网",
        "type": "link",
        "background": "",
        "link": "",
        "icon": "https://files.codelife.cc/icons/djcscs.webp?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp"
      }
    ]
  },
]
