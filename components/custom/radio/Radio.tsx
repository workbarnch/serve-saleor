import { ReactNode } from 'react';
import style from './radio.module.scss';

interface IRadio {
    unicClass?: string,
    checked?: boolean,
    name?: string,
    id: string,
    value?: string,
    onChange?: () =>{},
    color?: string,
    children?: ReactNode
}

export default function Radio({
    unicClass,
    checked,
    name,
    id,
    value,
    onChange,
    color,
    children
}: IRadio) {

    return (
        <div className={`${style.radio} ${unicClass}`}>
            <input
                type="radio"
                defaultChecked={checked?checked:false}
                name={name ? name : ''}
                id={id ? id : ''}
                value={value ? value : ''}
                onChange={onChange}
            />

            <label htmlFor={id ? id : ''}>
                <div className={`${style.buttons} ${unicClass ? unicClass : ''}`}>
                    <span style={color ? {borderColor: color} : {}}></span>
                    <span style={color ? {borderColor: color} : {}}></span>
                </div>
                {children? children : ''}
            </label>



        </div>
    )
}
