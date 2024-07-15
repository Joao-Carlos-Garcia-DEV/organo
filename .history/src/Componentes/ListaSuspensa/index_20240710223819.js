import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <optionkey={item}>{item} </optionkey=>)}
            </select>
        </div>
    )

}

export default ListaSuspensa
