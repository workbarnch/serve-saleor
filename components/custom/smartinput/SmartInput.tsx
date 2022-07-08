import style from './smartinput.module.scss';
import {useState} from "react";
import showIcon from '../../../images/icons/akis.svg';
import hideIcon from '../../../images/icons/akis_perbraukta.svg';

interface ISmartInput {
    type: string, 
    placeholder?: string, 
    onChange?: () =>{}, 
    name?: string, 
    defaultValue?: string, 
    unicClass?: string, 
    danger?: string
}

export default function SmartInput({
    type, 
    placeholder, 
    onChange, 
    name, 
    defaultValue, 
    unicClass, 
    danger
}: ISmartInput){
    const [show, setShow] = useState(false)

    const eventShowHide = () => {
        setShow(!show)
    }
    return (
        <div className={`${style.container} ${unicClass}`}>
            <input
                type={show?'text':type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                defaultValue={defaultValue}
            />
            {
                type === 'password'?
                    <div className={style.buttons}>
                        {
                            show?
                                <>
                                    <img src={showIcon.src} alt="show" className={style.show} onClick={eventShowHide}/>
                                    {danger?<div className={style.danger__icon}></div>:null}
                                </>
                                :
                                <>
                                    <img src={hideIcon.src} alt="hide" className={style.hide} onClick={eventShowHide}/>
                                    {danger?<div className={style.danger__icon}></div>:null}
                                </>
                        }
                    </div>: null
            }
            {
                danger?<div className={style.danger}>{danger}</div>: null
            }

        </div>
    )
}
