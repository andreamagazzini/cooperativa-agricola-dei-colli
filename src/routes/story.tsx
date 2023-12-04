import Navbar from '@/components/Navbar'
import { STORY } from '@/constants/story'
import PageFlip from 'react-pageflip'
import { useWindowSize } from '@uidotdev/usehooks'

const nextPageFooter = (isPortrait: boolean, index: number, lastPage: number) => <div className={`w-1/2 fixed right-0 text-right pr-10 ${index === lastPage || (!isPortrait && isLeftPage(index)) ? 'hidden' : ''}`}>{`${isPortrait ? '' : 'Pagina successiva '}-->`}</div>
const previousPageFooter = (isPortrait: boolean, index: number) => <div className={`w-1/2 lg:w-full ${index === 0 || (!isPortrait && !isLeftPage(index)) ? 'hidden' : ''}`}>{`<--${isPortrait ? '' : ' Pagina precedente'}`}</div>

const PORTRAIT_BREAKPOINT = 1000 //constant defined by pageflip

const isLeftPage = (index: number) => index % 2 === 0 // return true if it's a page on the left, false if it's a page on the right  

export function Component() {
  const pages = STORY.split(/\n/)
  const size = useWindowSize()

  const isPortrait = size.width && size.width < PORTRAIT_BREAKPOINT || false

  return (
    <div className="w-screen h-screen flex flex-col bg-home bg-no-repeat bg-cover">
      <Navbar />
      <div className="flex justify-center overflow-hidden">
        <PageFlip
          className={''}
          style={{}}
          startPage={0}
          size={'fixed'}
          width={(size.width && size.width < 500) ? size.width : 500}
          height={600}
          minWidth={0}
          maxWidth={0}
          minHeight={0}
          maxHeight={0}
          drawShadow
          flippingTime={1000}
          usePortrait
          startZIndex={0}
          autoSize
          maxShadowOpacity={1}
          showCover={false}
          mobileScrollSupport
          clickEventForward
          useMouseEvents
          swipeDistance={0}
          showPageCorners
          disableFlipByClick={false}
        >
          {pages.map((p, index) => (
            <div key={index} className="text-left bg-white px-10 py-20 cursor-pointer h-full">
              <div className="h-[450px]">{p}</div>
              <div className='flex'>
              {previousPageFooter(isPortrait, index)}
              {nextPageFooter(isPortrait, index, pages.length - 1)}
              </div>
            </div>
          ))}
          {pages.length % 2 ? <div className="bg-white"></div> : <></>}
        </PageFlip>
      </div>
    </div>
  )
}
