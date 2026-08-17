'use client'

import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'

const cvPreviewPath = '/cv-preview'
const cvDownloadPath = '/Ramy-Mohamed-CV.pdf'

export function CvPdfDocument() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pageWidth, setPageWidth] = useState(0)
  const [loadError, setLoadError] = useState<string>()

  useEffect(() => {
    const container = containerRef.current

    if (!container) {
      return
    }

    function updatePageWidth() {
      setPageWidth(Math.min(container?.clientWidth ?? 0, 1024))
    }

    updatePageWidth()

    const resizeObserver = new ResizeObserver(updatePageWidth)
    resizeObserver.observe(container)

    return () => resizeObserver.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-5xl">
      <Document
        file={cvPreviewPath}
        externalLinkTarget="_blank"
        externalLinkRel="noopener noreferrer"
        onLoadError={(error) => {
          console.error('CV PDF load error:', error)
          setLoadError(error.message)
        }}
        onSourceError={(error) => {
          console.error('CV PDF source error:', error)
          setLoadError(error.message)
        }}
        loading={<p className="py-20 text-center text-sm text-white/65">Loading CV...</p>}
        error={
          <div className="mx-auto max-w-md py-20 text-center text-sm leading-6 text-white/70">
            <p>The interactive preview could not be loaded.</p>
            {loadError && <p className="mt-2 text-xs text-white/50">{loadError}</p>}
            <a href={cvDownloadPath} download="Ramy-Mohamed-CV.pdf" className="mt-4 inline-block border-b border-current pb-1 text-white">Download the PDF instead</a>
          </div>
        }
        className="flex justify-center"
      >
        {pageWidth > 0 && (
          <Page
            pageNumber={1}
            width={pageWidth}
            renderAnnotationLayer
            renderTextLayer
            className="overflow-hidden bg-white shadow-2xl"
          />
        )}
      </Document>
    </div>
  )
}
