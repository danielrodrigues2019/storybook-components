import './styles.css'

export type AvatarProps = {
  children: React.ReactNode
}

const Avatar = ({children}: AvatarProps) => (
  <div>
    <h1>{children}</h1>
  </div>
)

export default Avatar