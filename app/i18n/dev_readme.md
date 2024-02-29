# What in this docs?
 - idk

# How to change languages

Go to settings 


# How create internatiolization from scratch

You may check [this](https://youtube.com) video or read docs here

1. You need to install all these dependencies
I recommend you to move them on top in "dependencies" of your package.json file 
**package.json**
```json
    "accept-language": "^3.0.18",
    "i18next": "^23.10.0",
    "i18next-browser-languagedetector": "7.2.0",
    "i18next-resources-to-backend": "^1.2.0",
    "react-cookie": "^7.1.0",
    "react-i18next": "^14.0.5",
```

2. Create this folder structure
    - app
        -[lng]
            -page.tsx
            -layout.tsx
        -i18n
            -locales
                -de
                -en


3. ctrl+c ctrl+v next files: (you may find them using ctrl+p in vs code)
- middleware.ts (in case you already have middleware - merge it somehow with existing middleware)
- index.ts
- settings.ts
- client.ts

3. Decide what languages do you want to have on your website then create *folder* in `app/i18n/locales`
with languages you want to have and then create *file* `translation.json` in folder with code of language you choosed
Also you may copy paste folders and files for now and then change them

4. Move *file* `page.tsx` and `layout.tsx` to `app/[lng]/`
Then just ctrl+c ctrl+v *function* `generateStaticParams` and *interface* `RootLayoutProps`
if you already have some interface just merge it with that give in `app/[lng]/layout.tsx`

5. 