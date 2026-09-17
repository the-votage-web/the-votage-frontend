'use client'

import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const Agentation = dynamic(
  () => import('agentation').then((m) => m.Agentation),
  { ssr: false },
)

export function ChatWidget() {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')
  const isRegister = pathname?.startsWith('/register')
  const isApostolicShift = pathname?.startsWith('/apostolic-shift')
  const shouldShowWidget = !isAdmin && !isRegister && !isApostolicShift

  useEffect(() => {
    const BUTTON_ID = 'votage-floating-chat-button'
    const IFRAME_ID = 'votage-floating-chat-iframe'

    // Clean up any stray buttons/iframes created by earlier script executions
    document.querySelectorAll('button').forEach((el) => {
      if (
        el.id !== BUTTON_ID &&
        el.style.position === 'fixed' &&
        (el.innerHTML.includes('Chat') || el.innerHTML.includes('Close'))
      ) {
        el.remove()
      }
    })
    document.querySelectorAll('iframe').forEach((el) => {
      if (
        el.id !== IFRAME_ID &&
        el.src.includes('votage-ai-assistant.vercel.app')
      ) {
        el.remove()
      }
    })

    let button = document.getElementById(BUTTON_ID) as HTMLButtonElement | null
    let iframe = document.getElementById(IFRAME_ID) as HTMLIFrameElement | null

    if (!shouldShowWidget) {
      if (button) button.style.display = 'none'
      if (iframe) iframe.style.display = 'none'
      return
    }

    if (!button) {
      button = document.createElement('button')
      button.id = BUTTON_ID
      button.innerHTML = '\u{1F4AC} Chat'
      button.style.position = 'fixed'
      button.style.bottom = '20px'
      button.style.right = '20px'
      button.style.padding = '12px 18px'
      button.style.background = '#000'
      button.style.color = '#fff'
      button.style.border = 'none'
      button.style.borderRadius = '30px'
      button.style.cursor = 'pointer'
      button.style.zIndex = '9999'
      document.body.appendChild(button)
    } else {
      button.style.display = 'block'
      button.innerHTML = '\u{1F4AC} Chat'
    }

    if (!iframe) {
      iframe = document.createElement('iframe')
      iframe.id = IFRAME_ID
      iframe.src = 'https://votage-ai-assistant.vercel.app/'
      iframe.style.position = 'fixed'
      iframe.style.bottom = '80px'
      iframe.style.right = '20px'
      iframe.style.width = 'min(360px, calc(100vw - 40px))'
      iframe.style.height = 'min(550px, calc(100dvh - 120px))'
      iframe.style.border = 'none'
      iframe.style.display = 'none'
      iframe.style.borderRadius = '16px'
      iframe.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)'
      iframe.style.zIndex = '9999'
      document.body.appendChild(iframe)
    }

    const toggleWidget = (e?: MouseEvent) => {
      if (e) e.stopPropagation()
      if (!iframe || !button) return
      if (iframe.style.display === 'none') {
        iframe.style.display = 'block'
        button.innerHTML = '\u2715 Close'
      } else {
        iframe.style.display = 'none'
        button.innerHTML = '\u{1F4AC} Chat'
      }
    }

    button.onclick = (e) => toggleWidget(e)

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        iframe &&
        button &&
        iframe.style.display === 'block' &&
        !button.contains(e.target as Node) &&
        !iframe.contains(e.target as Node)
      ) {
        toggleWidget()
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
      if (button) button.style.display = 'none'
      if (iframe) iframe.style.display = 'none'
    }
  }, [shouldShowWidget])

  return (
    <>
      {process.env.NODE_ENV === 'development' && <Agentation />}
    </>
  )
}
