import photo from '../../assets/lucas2.png';

function Hero() {
  return (
    <div className="flex flex-row justify-around items-center h-fit w-full bg-dark-blue gap">
        {/*TODO: separar em micro-componentes */}
        <span className="flex">text</span>

        <img className="h-photo"
         src={photo} alt="foto com boné" />
    </div>
  )
}

export default Hero