import LinkMenu from "./LinkMenu"

function Menu() {
  return (
    <div className="flex gap-16 text-white w-fit h-fit justify-cente items-center">
        <LinkMenu title="Sobre mim" href="/" />
        <LinkMenu title="Portfólio" href="/" />
        <LinkMenu title="Contato" href="/" />
    </div>
  )
}

export default Menu