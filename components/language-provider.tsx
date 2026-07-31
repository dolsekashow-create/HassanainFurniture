'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { content, type Lang } from '@/lib/content'

type Ctx = {
  lang: Lang
  dir: 'ltr' | 'rtl'
  t: (typeof content)['en']
  setLang: (lang: Lang) => void
  toggle: () => void
}

const LanguageContext = createContext<Ctx | null>(null)

const STORAGE_KEY = 'hassanain-lang'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'ar' || stored === 'en') {
      setLangState(stored)
    } else if (navigator.language?.toLowerCase().startsWith('ar')) {
      setLangState('ar')
    }
  }, [])

  useEffect(() => {
    const dir = content[lang].dir
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggle = useCallback(
    () => setLangState((prev) => (prev === 'en' ? 'ar' : 'en')),
    [],
  )

  return (
    <LanguageContext.Provider
      value={{ lang, dir: content[lang].dir, t: content[lang], setLang, toggle }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}
