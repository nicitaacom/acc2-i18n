'use client'	

import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../../i18n/settings'
import Link from "next/link"
import { useTranslation } from "@/app/i18n/client"


export function Footer ({  lng, path = '' }: {  lng: string, path?: string }) {
  const { i18n } = useTranslation(lng, 'footer')
  const t = i18n.getFixedT(lng, 'footer')
  
return (
     <footer>
      
      <Trans i18nKey="languageSwitcher" t={t}>
        {/* @ts-expect-error Trans interpolation */}
        Switch from <strong>{{lng}}</strong> to:{' '}
      </Trans>
           {languages.filter((l) => lng !== l).map((l, index) => {
        return (
          <span key={l}>
            {index > 0 && (' or ')}
            <Link href={`/${l}${path}`}>
              {l}
            </Link>
          </span>
        )
      })}
     </footer>
)
}