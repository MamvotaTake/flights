import './Filter.scss'
import {Checkbox} from "../Checkbox";
export function Filter() {
    return (
        <div className='Filter'>
            <h6 className='Filter__title'>по количеству пересадок</h6>
            <Checkbox label="Все"  fullWidth/>
            <Checkbox label="Без пересадок"  fullWidth/>
            <Checkbox label="1 пересадка"  fullWidth/>
            <Checkbox label="2 пересадки"  fullWidth/>
            <Checkbox label="3 пересадки" fullWidth/>
        </div>
    );
}