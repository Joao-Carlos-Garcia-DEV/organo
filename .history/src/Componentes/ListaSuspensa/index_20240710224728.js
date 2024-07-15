import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='ista-suspensa">
            <label>{props.label}</label>
            <select>
                {props.itens.map((item) => <option key={item}>{item} </option>)}
            </select>
        </div>
    )

}

export default ListaSuspensa
