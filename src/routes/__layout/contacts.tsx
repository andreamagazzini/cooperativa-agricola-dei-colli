import { ICONS } from "@/icons"
import { useWindowSize } from "@uidotdev/usehooks"
import { Button, Card, Input, Textarea } from '@/components/ui'
import { useForm } from '@/hooks'

const PHONE_NUMBER = '+393474497023'
const FORMATTED_PHONE_NUMBER = '+39 347 449 7023'
const EMAIL = 'cooperativaagricoladeicolli@gmail.com'

const validateForm = (values: { name: string; email: string; message: string }) => {
  const errors: Partial<typeof values> = {}
  
  if (!values.name.trim()) {
    errors.name = 'Il nome è obbligatorio'
  }
  
  if (!values.email.trim()) {
    errors.email = 'L\'email è obbligatoria'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Inserisci un\'email valida'
  }
  
  if (!values.message.trim()) {
    errors.message = 'Il messaggio è obbligatorio'
  }
  
  return errors
}

export function Component() {
  const size = useWindowSize()
  
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
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('Messaggio inviato con successo!')
      reset()
    },
    validate: validateForm
  })

  return (
    <div className="min-h-screen py-20 section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Contattaci
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Siamo qui per rispondere alle tue domande e fornirti informazioni sui nostri prodotti
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Informazioni di Contatto</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800">Telefono</h3>
                    <a 
                      href={`tel:${PHONE_NUMBER}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                    >
                      {FORMATTED_PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <img src={ICONS.whatsapp} width="24" height="24" alt="WhatsApp" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800">WhatsApp</h3>
                    <a 
                      href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}`}
                      className="text-green-600 hover:text-green-700 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Invia un messaggio
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800">Email</h3>
                    <a 
                      href={`mailto:${EMAIL}`}
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Map */}
            <Card>
              <h3 className="text-xl font-bold text-primary-800 mb-4">La Nostra Posizione</h3>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183063.67564339846!2d10.115716080923132!3d44.199446816929765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d56b1c3b42fbc3%3A0xc5789ae652f61d12!2sCooperativa%20agricola%20dei%20colli!5e0!3m2!1sen!2sit!4v1701728611810!5m2!1sen!2sit"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa della Cooperativa Agricola dei Colli"
                />
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Invia un Messaggio</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Nome"
                name="name"
                value={values.name}
                onChange={handleChange('name')}
                error={errors.name}
                placeholder="Il tuo nome"
                required
              />

              <Input
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange('email')}
                error={errors.email}
                placeholder="la.tua.email@example.com"
                required
              />

              <Textarea
                label="Messaggio"
                name="message"
                value={values.message}
                onChange={handleChange('message')}
                error={errors.message}
                placeholder="Scrivi qui il tuo messaggio..."
                rows={6}
                required
              />

              <Button
                type="submit"
                loading={isSubmitting}
                className="w-full"
                size="lg"
              >
                {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}