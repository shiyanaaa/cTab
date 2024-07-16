import HeaderStyle from  './Header.module.scss'

function Header() {


  return (
    <>


      <div className={HeaderStyle.header}>
        <div className={HeaderStyle.iconBox}>
          <div className={HeaderStyle.iconItem}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-eye"></use>
            </svg>
          </div>
          <div className={HeaderStyle.iconItem}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-keybord"></use>
            </svg>
          </div>
          <div className={HeaderStyle.iconItem}>
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