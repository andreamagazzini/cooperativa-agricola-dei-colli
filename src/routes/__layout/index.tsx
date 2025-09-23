import { useNavigate } from 'react-router-dom'
import CircleImage from '@/components/CircleImage'
import { IMAGES } from '@/images'
import { getProductsUrl } from '@/router'
import { Button } from '@/components/ui'
import { AnimatedSection, StaggeredContainer, HoverAnimation } from '@/components/animations'

const menuItems = [
  {
    label: 'I NOSTRI PRODOTTI',
    img: 'farroInHand',
    onHoverImg: 'animateFarro',
    url: getProductsUrl(),
    description: 'Scopri la nostra selezione di prodotti agricoli di qualità superiore'
  },
  {
    label: 'IL NOSTRO IMPIANTO',
    img: 'machine',
    onHoverImg: 'animateMachine',
    url: '/factory',
    description: 'Visita il nostro moderno impianto di trasformazione'
  },
  {
    label: 'IL NOSTRO ALLEVAMENTO',
    img: 'threeCows',
    onHoverImg: 'animateCow',
    url: '/farm',
    description: 'Conosci i nostri animali allevati allo stato semibrado'
  },
]

export function Component() {
  const navigate = useNavigate()
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center section-padding py-20">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="fade" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Cooperativa Agricola dei Colli
              </h1>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl sm:text-2xl text-white/90 mb-8">
                Tradizione, qualità e sostenibilità dal 1980
              </p>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.6}>
              <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
                Situata nel cuore della Garfagnana, produciamo cereali antichi e alleviamo 
                bovini e suini seguendo metodi tradizionali e sostenibili.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 section-padding">
        <div className="container-max">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Esplora la Nostra Azienda
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Scopri i diversi aspetti della nostra cooperativa agricola attraverso 
                un'esperienza interattiva
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {menuItems.map(({ img, label, url, onHoverImg, description }) => (
              <HoverAnimation key={label} scale={1.05}>
                <div className="text-center">
                  <CircleImage
                    src={IMAGES[img]}
                    onHoverSrc={IMAGES[onHoverImg]}
                    label={label}
                    onClick={() => navigate(url)}
                    className="mb-4"
                  />
                  <p className="text-white/80 text-sm max-w-xs mx-auto">
                    {description}
                  </p>
                </div>
              </HoverAnimation>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 section-padding bg-white/10 backdrop-blur-sm">
        <div className="container-max text-center">
          <AnimatedSection direction="up" delay={0.2}>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Pronto a Scoprire i Nostri Prodotti?
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Esplora la nostra gamma completa di prodotti agricoli di alta qualità
            </p>
            <HoverAnimation scale={1.05}>
              <Button
                onClick={() => navigate(getProductsUrl())}
                size="lg"
              >
                Vedi i Prodotti
              </Button>
            </HoverAnimation>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
