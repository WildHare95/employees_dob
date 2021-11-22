import { compose } from "redux"
import { connect, ConnectedProps } from "react-redux"
import {
    getDataEmployees,
    setOneEmployeeActivity,
} from "../../redux/employees-reducer"
import EmployeesBlock from "./EmployeesBlock"
import { AppStateType } from "../../redux/redux-store"

const mapStateToProps = (state: AppStateType) => {
    return {
        employees: state.dataState.employees,
        employeesActivity: state.dataState.employeesActivity,
    }
}

const connector = connect(mapStateToProps, {
    getDataEmployees,
    setOneEmployeeActivity,
})

export type EmployeesBlockContainerProps = ConnectedProps<typeof connector>

export default compose(connector)(EmployeesBlock)
