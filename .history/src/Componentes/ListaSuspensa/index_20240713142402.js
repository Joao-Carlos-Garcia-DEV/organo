import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                onChange{props.aoAlteradp}
                
                {props.itens.map((item) => <option key={item}>{item} </option>)}
            </select>
        </div>
    )

}

export default ListaSuspensa
