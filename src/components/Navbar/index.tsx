import './styles.css'

export type NavbarProps = {
  children: React.ReactNode
}

const Navbar = ({children}: NavbarProps) => (
  <div>
    <h1>{children}</h1>
  </div>
)

export default Navbar