import style from './checkbox.module.scss';

export default function Checkbox(props){
    return (
        <div className={`${style.checkbox}`}>
            <input
                type="checkbox"
                defaultChecked={props.checked ? props.checked : false}
                name={props.name ? props.name : ''}
                id={props.id ? props.id : ''}
                value={props.value ? props.value : ''}
                onChange={props.onChange}
            />

            <label htmlFor={props.id}>
                <div className={`${style.bottons} ${props.unicClass?props.unicClass:''}`}>
                    <span style={props.color ? {backgroundColor: props.color} : {}}></span>
                    <span style={props.arrowColor ? {borderColor: props.arrowColor} : {}}></span>
                    <span style={props.color ? {borderColor: props.color} : {}}></span>
                </div>
                {props.children? props.children: ''}
            </label>
        </div>

    )
}
