import style from './inputdata.module.scss';
import icon from './calendar.svg';
import moment from "moment";
import {ChangeEvent, useEffect, useState} from "react";

interface IInputDate {
    label?: string,
    date?: string,
    onChange?: () => {}
}

export  function InputDate({label, date, onChange}: IInputDate){

    const [calsendar, setCalendar] = useState(moment().format('YYYY-MM-DD'));

    const calendarEvent = (e: ChangeEvent<HTMLInputElement>) => {
        setCalendar(e.target.value)
    }
    useEffect(() => {
        if (date)setCalendar(date)
    }, [date])
    return (
        <div className={style.container}>
            <label>
                <span className={style.label}>{label}</span>
                <div className={style.input}>
                    <img src={icon.src} alt="calendar"/>
                    <span>{calsendar}</span>
                    <input type="date" onChange={onChange?onChange:calendarEvent}/>
                </div>
            </label>
        </div>
    )
}
