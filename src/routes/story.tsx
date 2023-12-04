import Navbar from "@/components/Navbar";
import { STORY } from "@/constants/story";
import PageFlip from "react-pageflip";

export function Component() {
  const pages = STORY.split(/\n/)

  return (
    <div className="w-screen h-screen text-center flex flex-col overflow-hidden">
      <Navbar />
      <div className="bg-home bg-no-repeat bg-cover h-screen">
        <div className="mt-20 flex justify-center">
          <PageFlip
            className={""}
            style={{}}
            startPage={0}
            size={"fixed"}
            width={400}
            height={600}
            minWidth={0}
            maxWidth={0}
            minHeight={0}
            maxHeight={0}
            drawShadow
            flippingTime={1000}
            usePortrait={false}
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
            {
              pages.map((p, index) => (
                <div className="text-left bg-white px-10 py-20 cursor-pointer h-full">
                  <div className="h-[450px]">{p}</div>
                  {
                    (index !== pages.length - 1 && index !== 0) ?
                      index % 2 ?
                        <div className={'text-right'}>{'Prossima pagina -->'}</div>
                        :
                        <div>{'<-- Pagina precedente'}</div>
                      :
                      <></>
                  }
                </div>
              ))
            }
            {
              pages.length % 2 ?
                <div className="bg-white"></div>
                :
                <></>
            }
          </PageFlip>
        </div>
      </div>
    </div>
  )
}