'use client'

import { useTranslations } from 'next-intl'
import { useForm } from '@/hooks'
import { Button, Input, Textarea } from '@/components/ui'
import { AnimatedSection } from '@/components/animations'
import { CONTACT_INFO } from '@/constants/app'

const PHONE_NUMBER = CONTACT_INFO.phone
const FORMATTED_PHONE_NUMBER = CONTACT_INFO.formattedPhone
const EMAIL = CONTACT_INFO.email

const validateForm = (values: { name: string; email: string; message: string }, t: any) => {
  const errors: Partial<typeof values> = {}
  
  if (!values.name.trim()) {
    errors.name = t('formErrors.nameRequired')
  }
  
  if (!values.email.trim()) {
    errors.email = t('formErrors.emailRequired')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = t('formErrors.emailInvalid')
  }
  
  if (!values.message.trim()) {
    errors.message = t('formErrors.messageRequired')
  }
  
  return errors
}

export default function ContactsPage() {
  const t = useTranslations('contacts')
  
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset
  } = useForm({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: async (values) => {
      // TODO: Connect to API route
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert(t('formSuccess'))
      reset()
    },
    validate: (values) => validateForm(values, t)
  })

  const contactItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: t('phone'),
      value: FORMATTED_PHONE_NUMBER,
      href: `tel:${PHONE_NUMBER}`,
      color: 'text-blue-400'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      label: t('whatsapp'),
      value: t('whatsappLink'),
      href: `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}`,
      color: 'text-green-400'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: t('email'),
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      color: 'text-amber-400'
    },
  ]

  return (
    <div className="min-h-screen bg-home flex flex-col">
      {/* Hero Section */}
      <section className="py-20 section-padding">
        <div className="container-max">
          <AnimatedSection direction="fade" delay={0.2}>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                {t('title')}
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto">
                {t('subtitle')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <AnimatedSection direction="up" delay={0.3}>
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 drop-shadow-lg">
                    {t('contactInfo')}
                  </h2>
                  
                  <div className="space-y-6">
                    {contactItems.map((item, index) => (
                      <AnimatedSection key={item.label} direction="up" delay={0.4 + index * 0.1}>
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center space-x-4 p-4 rounded-xl bg-white/15 hover:bg-white/25 transition-all duration-300 group border border-white/10"
                        >
                          <div className={`flex-shrink-0 ${item.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-md`}>
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-white text-sm uppercase tracking-wide mb-1 drop-shadow-md">
                              {item.label}
                            </h3>
                            <p className="text-white font-semibold truncate group-hover:text-primary-200 transition-colors drop-shadow-md">
                              {item.value}
                            </p>
                          </div>
                          <svg
                            className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Map */}
              <AnimatedSection direction="up" delay={0.6}>
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 drop-shadow-lg">
                    {t('location')}
                  </h3>
                  <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183063.67564339846!2d10.115716080923132!3d44.199446816929765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d56b1c3b42fbc3%3A0xc5789ae652f61d12!2sCooperativa%20agricola%20dei%20colli!5e0!3m2!1sen!2sit!4v1701728611810!5m2!1sen!2sit"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={t('location')}
                      className="w-full"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection direction="up" delay={0.4}>
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 drop-shadow-lg">
                  {t('formTitle')}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label={t('formName')}
                    name="name"
                    value={values.name}
                    onChange={handleChange('name')}
                    error={errors.name}
                    placeholder={t('formNamePlaceholder')}
                    variant="dark"
                    required
                  />

                  <Input
                    label={t('formEmail')}
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange('email')}
                    error={errors.email}
                    placeholder={t('formEmailPlaceholder')}
                    variant="dark"
                    required
                  />

                  <Textarea
                    label={t('formMessage')}
                    name="message"
                    value={values.message}
                    onChange={handleChange('message')}
                    error={errors.message}
                    placeholder={t('formMessagePlaceholder')}
                    variant="dark"
                    rows={6}
                    required
                  />

                  <Button
                    type="submit"
                    loading={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? t('formSubmitting') : t('formSubmit')}
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
