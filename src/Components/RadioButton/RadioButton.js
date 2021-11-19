import {useEffect, useState} from "react";
import styles from "./RadioButton.module.css"

const RadioButton = ({item, setLocalStorageData, deleteLocalStorageData}) => {

    const [user, setUser] = useState([])
    const [deleteUser, setDeleteUser] = useState([])

    const isSelected = () => {
        const arr = JSON.parse(localStorage.getItem("employees"))
        if (arr !== null && arr.length !== 0 ) {
            return false
        }
        return true
    }

    console.log(isSelected())

    useEffect(() => {
        setLocalStorageData(user)
    }, [user, setLocalStorageData])

    useEffect(() => {
        deleteLocalStorageData(deleteUser)
    }, [deleteUser, deleteLocalStorageData])


    return (
        <div>
            {
                item.map(person => (
                    <div key={person.id}>
                        <div className={styles.employ}>
                            <span>{person.firstName}</span>
                            <span> </span>
                            <span>{person.lastName}</span>
                        </div>
                        <div>
                            <label className={styles.radioBtn}>
                                <input type="radio"
                                       name={person.id}
                                       onClick={() => {
                                           setUser(person)
                                       }}
                                       value={true}
                                       checked={isSelected()}
                                />
                                active
                            </label>
                            <lable>
                                <input type="radio"
                                       name={person.id}
                                       onClick={() => {
                                           setDeleteUser(person)
                                       }}
                                       value={false}
                                       checked={isSelected()}
                                />
                                not active
                            </lable>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default RadioButton

/*(
<div>
            <span>
             <span>{person.firstName}</span>
                                    <span> </span>
                                    <span>{person.lastName}</span>
                                    <input type="radio"
                                           name="radio-btn"
                                           value="active"
                                           checked={isRadioSelected("active")}
                                           onChange={handleRadioClick}/>
                                    <label htmlFor="">active</label>
                                    <input type="radio"
                                           name="radio-btn"
                                           value="noActive"
                                           checked={isRadioSelected("noActive")}
                                           onChange={handleRadioClick}/>
                                    <label htmlFor="">no active</label>
                                </span>
</div>
)*/