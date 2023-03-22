import { useState } from "react"
import Button from "../Button"
import { ModalContent } from "./modal"
import "./styles.css"

export type ModalProps = {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <main>
      {isModalOpen && <ModalContent onRequestClose={toggleModal} />}
      <h1>React Modal Example</h1>
      <Button label="Show modal" onClick={toggleModal} />
    </main>
  )
}

export default Modal
