interface LinkMenuProps {
    title: string;
    href: string;
    target?: string;
}

function LinkMenu({title, href, target}: LinkMenuProps) {
  return (
    <a className="hover:text-lg hover:font-normal focus:text-cyan active:text-beach-blue font-poppins font-light" href={href} target={target}>
        <span className="whitespace-nowrap">{title}</span>
    </a>
  )
}

export default LinkMenu