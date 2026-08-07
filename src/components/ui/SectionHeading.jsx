import { h2Class, kickerClass } from './styles'

const SectionHeading = ({ kicker, title, action, className = 'mb-7 max-w-3xl' }) => {
  return (
    <div className={className}>
      <div>
        <p className={kickerClass}>{kicker}</p>
        <h2 className={h2Class}>{title}</h2>
      </div>
      {action}
    </div>
  )
}

export default SectionHeading
