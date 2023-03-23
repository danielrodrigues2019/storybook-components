import './styles.css'

export type ToggleProps = {
  children: React.ReactNode
}

const Toggle = ({children}: ToggleProps) => (
  <div>
    <h1>{children}</h1>
  </div>
)

export default Toggle