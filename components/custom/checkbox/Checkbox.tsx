import { ReactNode } from 'react';
import style from './checkbox.module.scss';
interface ICheckbox {
    checked?: boolean,
    name?: string,
    id: string,
    value?: string
    onChange?: () =>{},
    unicClass?: string,
    color?: string
    arrowColor?: string,
    children?: ReactNode

}
export default function Checkbox({
    checked,
    name,
    id,
    onChange,
    unicClass,
    value,    
    color,
    arrowColor,
    children
}: ICheckbox){
    return (
        <div className={`${style.checkbox}`}>
            <input
                type="checkbox"
                defaultChecked={checked ? checked : false}
                name={name ? name : ''}
                id={id ? id : ''}
                value={value ? value : ''}
                onChange={onChange}
            />

            <label htmlFor={id}>
                <div className={`${style.bottons} ${unicClass?unicClass:''}`}>
                    <span style={color ? {backgroundColor: color} : {}}></span>
                    <span style={arrowColor ? {borderColor: arrowColor} : {}}></span>
                    <span style={color ? {borderColor: color} : {}}></span>
                </div>
                {children? children: ''}
            </label>
        </div>

    )
}
