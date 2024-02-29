import { i18n } from "i18next"

export default async function ServerComponent ({i18n,lng}:{i18n:i18n,lng:string}) {
  const t = i18n.getFixedT(lng, 'server-component')

return (
    <div className="flex flex-col gap-y-2">
      <h1>{t('h1')}</h1>
      <h2>{t('h2')}</h2>
      <h3>{t('h3')}</h3>
      <h4>{t('h4')}</h4>
    </div>
)
}