import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select>
                <option>
                    {props.it}
                </option>
            </select>
            </div>
    )

}

export default ListaSuspensa
