import Style from  './Header.module.scss'

function Header() {


  return (
    <>


      <div className={Style.header}>
        <div className={Style.iconBox}>
          <div className={Style.iconItem}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-eye"></use>
            </svg>
          </div>
          <div className={Style.iconItem}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-keybord"></use>
            </svg>
          </div>
          <div className={Style.iconItem}>
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