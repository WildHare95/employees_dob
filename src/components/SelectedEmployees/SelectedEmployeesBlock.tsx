import { EmployeeType } from "../../redux/employees-reducer"
import { FC } from "react"

type PropsType = {
    sortData: EmployeeType[]
}

const SelectedEmployeesBlock: FC<PropsType> = ({ sortData }) => {
    return (
        <>
            {sortData.map((item) => (
                <div key={item.id}>
                    <span>
                        {item.lastName} {item.firstName}
                    </span>
                    &nbsp;
                    <span>
                        {new Date(item.dob)
                            .toDateString()
                            .slice(4, item.dob.length)}
                    </span>
                </div>
            ))}
        </>
    )
}

export default SelectedEmployeesBlock
