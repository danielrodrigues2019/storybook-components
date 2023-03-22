import { useEffect } from "react"
import React from "react"
import Button from "../Button"
import "./styles.css"

export type ModalContentProps = {
  onRequestClose: () => void
}

export function ModalContent({ onRequestClose }: ModalContentProps) {
  useEffect(() => {
    function onKeyDown(event: { keyCode: Number }) {
      if (event.keyCode === 27) {
        onRequestClose()
      }
    }
    document.addEventListener("keydown", onKeyDown)

    return () => {
      document.removeEventListener("keydown", onKeyDown)
    }
  })

  const handleWithWindowClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    ;(e.target as HTMLSpanElement).id === "background" && onRequestClose()
  }

  return (
    <span
      className="modal-background"
      id="background"
      onClick={handleWithWindowClick}
    >
      <div className="modal-content">
        <div className="modal-close">
          <span className="modal-top" onClick={onRequestClose}>
            x
          </span>
        </div>
        <h3 className="modal-title">I'm Modal</h3>
        <p className="modal-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <Button label="Close modal" onClick={onRequestClose} />
      </div>
    </span>
  )
}
