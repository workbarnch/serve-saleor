import {ReactNode, useEffect, useState} from 'react';
import style from './dropdown.module.scss';

interface IDropDown {
    title?: string,
    open?: boolean,
    children?: ReactNode,
    arrowUnicClass?: string,
    unicContentClass?: string
    full?: boolean,
    mr?: boolean
}

export function DropDown({title, open = false, children, arrowUnicClass, unicContentClass, full = true, mr = false}: IDropDown) {
    const [isOpen, setIsOpen] = useState(false);

    const dropDownClass = full ?
        `${style.dropdown} ${style.full}` :
        `${style.dropdown}`;
    const arrowClass = isOpen ?
        `${style.dropdown__title__arrow} ${style.dropdown__title__arrow_open} ${mr?style.dropdown__title__arrow_open_mr:''}` :
        `${style.dropdown__title__arrow} ${style.dropdown__title__arrow_close}`;
    const contentClass = isOpen ?
        `${style.dropdown__content} ${style.dropdown__content_open} ` :
        `${style.dropdown__content} ${style.dropdown__content_close}`;

    const titleClass = isOpen ?
        `${style.dropdown__title} ${style.dropdown__title_open}` :
        `${style.dropdown__title} ${style.dropdown__title_close}`;

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        setIsOpen(open)
    }, [open])
    return (
        <div className={dropDownClass}>
            <div className={titleClass} onClick={handleClick}>
                <span>{title ? title : 'DropDown'}</span>
                <div className={`${arrowClass} ${arrowUnicClass?arrowUnicClass:''}`}></div>
            </div>
            {
                isOpen && children?
                    <div className={`${contentClass} ${unicContentClass}`}>
                        {children}
                    </div>: null

            }

        </div>
    )
}
