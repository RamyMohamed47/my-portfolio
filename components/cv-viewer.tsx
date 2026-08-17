'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'

const cvPath = '/Ramy-Mohamed-CV.pdf'

const CvPdfDocument = dynamic(
  () => import('./cv-pdf-document').then((module) => module.CvPdfDocument),
  {
    ssr: false,
    loading: () => <p className="py-20 text-center text-sm text-white/65">Preparing interactive preview…</p>,
  },
)

export function CvViewer() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  function openViewer() {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
    dialogRef.current?.showModal()
  }

  function closeViewer() {
    dialogRef.current?.close()
  }

  function restorePageScroll() {
    document.body.style.overflow = ''
    setIsOpen(false)
  }

  function closeFromBackdrop(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      closeViewer()
    }
  }

  return (
    <>
      <button type="button" onClick={openViewer} aria-haspopup="dialog" className="text-link pb-1 text-sm">
        View CV ↗
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="cv-viewer-title"
        onClick={closeFromBackdrop}
        onClose={restorePageScroll}
        className="m-auto h-[min(94svh,70rem)] w-[min(96vw,78rem)] max-w-none overflow-hidden border border-border bg-background p-0 text-foreground shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="flex h-full min-h-0 flex-col">
          <header className="flex shrink-0 items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-6 sm:py-4">
            <div className="min-w-0">
              <p className="eyebrow">Curriculum vitae</p>
              <h2 id="cv-viewer-title" className="mt-1 truncate text-sm font-medium sm:text-base">Ramy Mohamed</h2>
            </div>
            <div className="flex shrink-0 items-center gap-3 sm:gap-5">
              <a href={cvPath} download="Ramy-Mohamed-CV.pdf" className="text-link pb-1 text-xs sm:text-sm">Download PDF ↓</a>
              <button type="button" onClick={closeViewer} aria-label="Close CV preview" className="flex h-9 w-9 items-center justify-center border border-border text-xl leading-none transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background">×</button>
            </div>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto bg-[#292929] p-3 sm:p-6 md:p-10">
            {isOpen && <CvPdfDocument />}
          </div>
        </div>
      </dialog>
    </>
  )
}
