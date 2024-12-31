
import styles from './Button.module.css'

const Button = ({ is_outline, icon, text, ...rest}) => {

   
  return (
    <button 
    {...rest}
    
    className={is_outline ? styles.outline_btn:styles.primary_btn}>
    {icon}
    {text}
    </button>
  )
}

export default Button