import styles from "./Employee.module.css"

const Employee = ({ data, active, onActivityChange }) => {
    return (
        <div>
            <div className={styles.info}>
                <span>
                    {data.firstName} {data.lastName}
                </span>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        name={data.id}
                        onChange={() => {
                            onActivityChange(true)
                        }}
                        checked={active}
                    />
                    active
                </label>
                <lable>
                    <input
                        type="radio"
                        name={data.id}
                        onChange={() => {
                            onActivityChange(false)
                        }}
                        checked={!active}
                    />
                    not active
                </lable>
            </div>
        </div>
    )
}

export default Employee
