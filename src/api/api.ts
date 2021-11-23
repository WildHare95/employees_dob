import axios from "axios"
import { EmployeeType } from "../redux/employees-reducer"

export const employeesAPI = {
    getEmployeesData() {
        return axios.get<EmployeeType[]>(
            "https://yalantis-react-school-api.yalantis.com/api/task0/users"
        )
    },
}
