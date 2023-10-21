'use client'
import { useTranslations } from "next-intl";
import AlertMessage from "./AlertMessage";
import Link from "next/link";


export default function Home() {
  const t = useTranslations("Index");

  return (
     <div>
      <div>
        <Link href="/" locale="en">
          In english
        </Link>{" "}
        |{" "}
        <Link href="/" locale="fi">
          In Finnish
        </Link>
        <br />
        <br />
      </div>
      <div>
        <p>{t("title")}</p>
        <p>{t("subtitle")}</p>
      </div>
      <div>
        <br />
        <AlertMessage message={t("alertMessage")} />
      </div>
      {/* I want change example.com to example.ru example.ch for example instead of /ru /en /ch */}
    </div>
  )
}
