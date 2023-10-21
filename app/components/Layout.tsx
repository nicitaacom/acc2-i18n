'use client'
import React from "react"

export default function Layout ({children}:{children:React.ReactNode}) {

    document.documentElement.classList.toggle("dark", true)

return (
    <div>
      {children}
    </div>
)
}