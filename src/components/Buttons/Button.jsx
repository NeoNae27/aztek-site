import './Button.scss'
import classNames from 'classnames';

const Button = ({label, size, type, color}) => {
    return (
    <button className={classNames('button', [size], [type], [color])}>
        {label}
    </button>
    )
}

export default Button