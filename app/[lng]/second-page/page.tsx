import { useTranslation } from "@/app/i18n"
import Link from 'next/link'
import ServerComponent from "./server-component"
import { Footer } from "../components/Footer"

interface PageProps {
  params:{lng:string}
  path:string
}

export default async function Page({ params: { lng },path='' }:PageProps) {
  const { t,i18n } = await useTranslation(lng, 'server-component')
  const { t:t2,i18n:i18n2 } = await useTranslation(lng, 'translation')

  return (
    <>
      <h1>Hi from second page!</h1>
      <Link href={`/${lng}`}>
        back
      </Link>
      <h3>{t2('welcome')}</h3>
      <ServerComponent i18n={i18n} lng={lng}/>
      <Footer lng={lng} path='/second-page'/>

    </>
  )
}