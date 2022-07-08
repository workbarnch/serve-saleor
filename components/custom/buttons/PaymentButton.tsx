import { ReactNode } from 'react';
import style from './buttons.module.scss';
interface IPaymentButton {
    children?: ReactNode
    onClick?: () =>{},
    unicClass?: string,
    text?: string
}
export function PaymentButton({children, onClick, unicClass, text = 'button'}: IPaymentButton){
    return (
        <button className={`${style.payment__button} ${unicClass? unicClass: ''}`} onClick={onClick}>
            <span>{children}</span>
            {text}
        </button>
    )
}
