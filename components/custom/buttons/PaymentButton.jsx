import style from './buttons.module.scss';

export function PaymentButton({children, onClick, unicClass, type = 'button', text = 'button'}){
    return (
        <button type={type} className={`${style.payment__button} ${unicClass? unicClass: ''}`}>
            <span>{children}</span>
            {text}
        </button>
    )
}
