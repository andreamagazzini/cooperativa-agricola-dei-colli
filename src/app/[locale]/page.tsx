'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/routing'
import CircleImage from '@/components/CircleImage'
import { Button } from '@/components/ui'
import { AnimatedSection, StaggeredContainer, HoverAnimation } from '@/components/animations'

export default function HomePage() {
  const locale = useLocale()
  const t = useTranslations('home')

  const menuItems = [
    {
      label: t('ourProducts'),
      img: '/images/farro-in-hand.jpg',
      onHoverImg: '/images/animate-farro.gif',
      url: '/products',
      description: t('ourProductsDesc'),
    },
    {
      label: t('ourFactory'),
      img: '/images/machine.jpg',
      onHoverImg: '/images/animate-machine.gif',
      url: '/factory',
      description: t('ourFactoryDesc'),
    },
    {
      label: t('ourFarm'),
      img: '/images/three-cows.jpg',
      onHoverImg: '/images/animate-cow.gif',
      url: '/farm',
      description: t('ourFarmDesc'),
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center section-padding py-20">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="fade" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                {t('title')}
              </h1>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl sm:text-2xl text-white/90 mb-8">
                {t('subtitle')}
              </p>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.6}>
              <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
                {t('description')}
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
                {t('exploreTitle')}
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                {t('exploreDescription')}
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {menuItems.map(({ img, label, url, onHoverImg, description }) => (
              <HoverAnimation key={label} scale={1.05}>
                <div className="text-center">
                  <Link href={url}>
                    <CircleImage
                      src={img}
                      onHoverSrc={onHoverImg}
                      label={label}
                      className="mb-4"
                    />
                  </Link>
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
              {t('ctaTitle')}
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {t('ctaDescription')}
            </p>
            <HoverAnimation scale={1.05}>
              <Link href="/products">
                <Button size="lg">
                  {t('seeProducts')}
                </Button>
              </Link>
            </HoverAnimation>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
