import './globals.css'
import { dir } from 'i18next'

import { languages } from '../i18n/settings'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

interface RootLayoutProps {
  params:{
    lng:string
  }
  children:React.ReactNode
}

export default async  function RootLayout({
  params: {
    lng
  },
  children
}:RootLayoutProps) {
  
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}