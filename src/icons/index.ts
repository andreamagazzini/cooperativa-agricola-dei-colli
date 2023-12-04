import { camelize } from '@/utils'

export const ICONS = [
  'whatsapp.png'
].reduce(
  (acc, img) => {
    const name = camelize(img).split('.')?.find(Boolean)
    if (name) {
      acc[name] = new URL(`./${img}`, import.meta.url).href
    }

    return acc
  },
  {} as Record<string, string>
)
