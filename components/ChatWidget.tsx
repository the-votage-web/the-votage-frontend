'use client'

import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import { useState, useEffect, useRef } from 'react'

const Agentation = dynamic(
  () => import('agentation').then((m) => m.Agentation),
  { ssr: false },
)

export function ChatWidget() {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')
  const isRegister = pathname?.startsWith('/register')
  const isApostolicShift = pathname?.startsWith('/apostolic-shift')
  const isMrc = pathname?.startsWith('/mrc')
  const shouldShowWidget = !isAdmin && !isRegister && !isApostolicShift && !isMrc

  const [isOpen, setIsOpen] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleOutsideClick = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isOpen])

  // Reset open state when navigating away to excluded routes
  useEffect(() => {
    if (!shouldShowWidget) {
      setIsOpen(false)
    }
  }, [shouldShowWidget])

  return (
    <>
      {shouldShowWidget && (
        <div ref={widgetRef} className="fixed bottom-5 right-5 z-[9999] font-sans">
          {isOpen && (
            <iframe
              id="votage-floating-chat-iframe"
              src="https://votage-ai-assistant.vercel.app/"
              title="Votage AI Assistant"
              className="fixed bottom-20 right-5 border-0 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] z-[9999] bg-white"
              style={{
                width: 'min(360px, calc(100vw - 40px))',
                height: 'min(550px, calc(100dvh - 120px))',
              }}
            />
          )}

          <button
            type="button"
            id="votage-floating-chat-button"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen((prev) => !prev)
            }}
            className="flex items-center gap-2 px-4 py-3 bg-black text-white rounded-full border border-white/20 shadow-xl cursor-pointer text-sm font-medium hover:bg-neutral-900 transition-all active:scale-95"
            aria-label={isOpen ? 'Close chat' : 'Open chat'}
          >
            {isOpen ? '✕ Close' : '💬 Chat'}
          </button>
        </div>
      )}

      {process.env.NODE_ENV === 'development' && <Agentation />}
    </>
  )
}

