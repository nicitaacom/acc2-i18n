import Link from 'next/link'

import { useTranslation } from '../i18n'
import { Footer } from "./components/Footer"

interface PageProps {
  params:{lng:string}
  path?:string
}

export default async function Page({ params: { lng },path='' }:PageProps) {
   const { t } = await useTranslation(lng)
  return (
    <div className="flex flex-col">
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/second-page`}>
        {t('to-second-page')}
      </Link>
        <Link href={`/${lng}/client-page`}>
        {t('to-client-page')}
      </Link>
      <Footer lng={lng} />
    </div>
  )
}