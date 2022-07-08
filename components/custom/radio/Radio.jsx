import style from './radio.module.scss';


export default function Radio(props) {

    return (
        <div className={`${style.radio} ${props.unicClass}`}>
            <input
                type="radio"
                defaultChecked={props.checked?props.checked:false}
                name={props.name ? props.name : ''}
                id={props.id ? props.id : ''}
                value={props.value ? props.value : ''}
                onChange={props.onChange}
            />

            <label htmlFor={props.id ? props.id : ''}>
                <div className={`${style.buttons} ${props.unicClass ? props.unicClass : ''}`}>
                    <span style={props.color ? {borderColor: props.color} : {}}></span>
                    <span style={props.color ? {borderColor: props.color} : {}}></span>
                </div>
                {props.children? props.children : ''}
            </label>



        </div>
    )
}
