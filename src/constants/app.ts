// Application constants

export const APP_CONFIG = {
  name: 'Cooperativa Agricola dei Colli',
  version: '2.0.0',
  description: 'Sito web della Cooperativa Agricola dei Colli - Tradizione, qualità e sostenibilità dal 1980',
  url: 'https://andreamagazzini.github.io/cooperativa-agricola-dei-colli/',
  author: 'Cooperativa Agricola dei Colli',
  keywords: ['agricoltura', 'farro', 'garfagnana', 'prodotti biologici', 'cooperativa'],
} as const

export const CONTACT_INFO = {
  phone: '+393474497023',
  formattedPhone: '+39 347 449 7023',
  email: 'cooperativaagricoladeicolli@gmail.com',
  address: 'Piazza al Serchio, Garfagnana, Lucca, Italia',
  coordinates: {
    lat: 44.199446816929765,
    lng: 10.115716080923132
  }
} as const

export const SOCIAL_LINKS = {
  whatsapp: `https://api.whatsapp.com/send?phone=${CONTACT_INFO.phone}`,
  email: `mailto:${CONTACT_INFO.email}`,
  phone: `tel:${CONTACT_INFO.phone}`
} as const

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: (id: string) => `/products/${id}`,
  STORY: '/story',
  CONTACTS: '/contacts',
  FACTORY: '/factory',
  FARM: '/farm'
} as const

export const BREAKPOINTS = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const

export const ANIMATION_DURATIONS = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8
} as const

export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070
} as const

export const COLORS = {
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  secondary: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
    950: '#422006',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  }
} as const

export const VALIDATION_RULES = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\+]?[1-9][\d]{0,15}$/,
  name: /^[a-zA-ZÀ-ÿ\s]{2,50}$/,
  message: {
    minLength: 10,
    maxLength: 1000
  }
} as const

export const ERROR_MESSAGES = {
  required: 'Questo campo è obbligatorio',
  email: 'Inserisci un indirizzo email valido',
  phone: 'Inserisci un numero di telefono valido',
  name: 'Il nome deve contenere solo lettere e spazi (2-50 caratteri)',
  message: 'Il messaggio deve essere tra 10 e 1000 caratteri',
  generic: 'Si è verificato un errore. Riprova più tardi.',
  network: 'Errore di connessione. Verifica la tua connessione internet.',
  notFound: 'Contenuto non trovato',
  unauthorized: 'Accesso non autorizzato',
  forbidden: 'Accesso negato'
} as const

export const SUCCESS_MESSAGES = {
  messageSent: 'Messaggio inviato con successo!',
  formSubmitted: 'Modulo inviato correttamente',
  dataSaved: 'Dati salvati con successo',
  actionCompleted: 'Azione completata con successo'
} as const

export const LOADING_MESSAGES = {
  default: 'Caricamento in corso...',
  sending: 'Invio in corso...',
  saving: 'Salvataggio in corso...',
  processing: 'Elaborazione in corso...',
  loading: 'Caricamento...'
} as const

export const ACCESSIBILITY = {
  skipLinkText: 'Salta al contenuto principale',
  loadingText: 'Caricamento in corso',
  errorText: 'Si è verificato un errore',
  closeText: 'Chiudi',
  openText: 'Apri',
  nextText: 'Successivo',
  previousText: 'Precedente',
  menuText: 'Menu',
  searchText: 'Cerca',
  submitText: 'Invia'
} as const

export const PERFORMANCE = {
  imageLazyLoadOffset: 100,
  intersectionObserverThreshold: 0.1,
  debounceDelay: 300,
  throttleDelay: 100,
  maxRetries: 3,
  retryDelay: 1000
} as const

export const SEO = {
  title: 'Cooperativa Agricola dei Colli - Prodotti Agricoli di Qualità',
  description: 'Scopri i prodotti agricoli di qualità della Cooperativa Agricola dei Colli. Farro, farine e prodotti biologici dalla Garfagnana.',
  keywords: 'cooperativa agricola, farro, garfagnana, prodotti biologici, agricoltura sostenibile',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
} as const