declare module '*.jpg'
declare module '*.png'
declare module '*.jpeg'
declare module '*.gif'

declare module '*.svg'
declare module '*.svg?url'
declare module '*.svg?base64'

declare module '*.ttf'

interface Window {
  __PRELOADED_STATE__: any
}

declare const NO_SSR: boolean
declare const PUBLIC_URL: string
