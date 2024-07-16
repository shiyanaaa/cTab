import './Header.scss'

function Header() {


  return (
    <>


      <div className="header">
        <div className="icon-item">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-eye"></use>
          </svg>
        </div>
        <div className="icon-item">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-keybord"></use>
          </svg>
        </div>
        <div className="icon-item">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-menu"></use>
          </svg>
        </div>
      </div>


    </>
  )
}

export default Header