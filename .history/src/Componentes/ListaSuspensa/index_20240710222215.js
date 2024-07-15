import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select>
                <option>
                    {props.o}
                </option>
            </select>
            </div>
    )

}

export default ListaSuspensa
