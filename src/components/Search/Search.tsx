import SearchStyle from './Search.module.scss'
import { Input, Select } from 'antd';
const { Option } = Select;

function Search() {
  const searchMap={
    Baidu:"https://www.baidu.com/s?wd=",
    Google:"https://www.google.com/search?q=",
    Bing:"https://cn.bing.com/search?q="
  }
  const { Search } = Input;
  let searchType:'Baidu'|'Google'|'Bing' = "Baidu";

  const options = [
    { label: 'Baidu', value: 'Baidu' },
    { label: 'Google', value: 'Google' },
    { label: 'Bing', value: 'Bing' }
  ];

  const onTypeChange = (value: 'Baidu'|'Google'|'Bing') => {
    searchType=value;
  }
  const onSearch = (value:string) => {
    window.open(searchMap[searchType]+value)
  }
  return (
    <>
      <div className={SearchStyle.search}>
        <Search
          size="large"
          placeholder="请输入搜索词"
          allowClear
          onSearch={onSearch}

          style={{ maxWidth: 600 }}
          addonBefore={
            <Select defaultValue={searchType} onChange={onTypeChange}>
              {
                options.map(item => {
                  return <Option value={item.value} key={item.value}>
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref={`#icon-${item.value}`}></use>
                    </svg>
                  </Option>;
                })
              }
            </Select>
          }
        />
      </div>
    </>
  )
}

export default Search