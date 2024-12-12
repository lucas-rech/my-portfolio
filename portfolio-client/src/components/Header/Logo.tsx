import logo from '../../assets/logo.png';


function Logo() {
  return (
    <div className="flex flex-row items-center justify-center gap-4 h-full w-36">
        <img className="w-11" src={logo} alt="logo" />
        <span className="mt-1 text-white font-josefin h-fit select-none">Lucas Rech</span>
    </div>
  )
}

export default Logo