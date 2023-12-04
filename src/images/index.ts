import { camelize } from "@/utils"

export const IMAGES = [
  "farro-bags.jpg",
  "cow.jpg",
  "farro-broken-bag.jpg",
  "farro-in-hand.jpg",
  "farro.jpg",
  "animate-farro.gif",
  "mountain.jpg",
  "three-cows.jpg",
  "animate-cow.gif",
  "machine.jpg",
  "animate-machine.gif",
].reduce((acc, img) => {
  const name = camelize(img).split('.')?.find(Boolean)
  if (name) {
    acc[name] = new URL(`./${img}`, import.meta.url).href
  }

  return acc
}, {} as Record<string, string>)
