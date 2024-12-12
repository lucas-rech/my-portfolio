import Logo from "./Logo"
import Menu from "./Menu"

function Header() {
  return (
    <div>
        <header className="w-full bg-dark-blue h-16 flex items-center justify-between gap-x-40 px-10 fixed">
          <Logo />
          <Menu />
          <div className=" flex flex-row items-center h-full w-36"><span></span></div>
        </header>
    </div>
  )
}

export default Header