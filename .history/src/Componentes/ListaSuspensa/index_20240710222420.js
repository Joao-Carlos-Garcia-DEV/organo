import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select>
                <option>
                    {props.itens.map(item => {
                        return <option></option>
                    })}
                </option>
            </select>
            </div>
    )

}

export default ListaSuspensa
