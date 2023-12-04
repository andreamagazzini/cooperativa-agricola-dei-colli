import { FC, useState } from 'react'

interface Props {
  label: string
  src: string
  onHoverSrc: string
  onClick?: () => void
}

const CircleImage: FC<Props> = ({ label, src, onHoverSrc, onClick }) => {
  const [currentSrc, setCurrentSrc] = useState(src)

  return (
    <div
      className="flex flex-col cursor-pointer"
      onClick={onClick}
      onTouchStart={(e) => {e.preventDefault(); setCurrentSrc(onHoverSrc);}}
      onMouseOver={() => setCurrentSrc(onHoverSrc)}
      onMouseLeave={() => setCurrentSrc(src)}
    >
      <img
        className="object-cover h-60 w-60 lg:h-72 lg:w-72 rounded-full border-white border-8"
        src={currentSrc}
        alt="image"
      />
      <h2 className="text-green-900 text-center font-semibold ring-4 ring-white ring-offset-2 ring-offset-green-900 bg-white -mt-5 rounded-xl p-2 hover:bg-green-900 hover:text-white">
        {label}
      </h2>
    </div>
  )
}

export default CircleImage
