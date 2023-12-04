import { createBrowserRouter } from 'react-router-dom'
import { routes } from 'virtual:routes'

export const router = createBrowserRouter(routes)

// URL list
export const getRootUrl = () => '/'
export const getProductsUrl = (id?: string) => `/products/${id || 0}`
export const getStoryUrl = () => '/story'