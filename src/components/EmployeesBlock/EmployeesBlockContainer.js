import { compose } from "redux"
import { connect } from "react-redux"
import {
    deleteElementLocalStorageData,
    getDataEmployees,
    setOneEmployeeActivity,
    setElementLocalStorageData,
} from "../../redux/employees-reducer"
import EmployeesBlock from "./EmployeesBlock"

const mapStateToProps = (state) => {
    return {
        employees: state.dataState.employees,
        employeesActivity: state.dataState.employeesActivity,
        localStorageData: state.dataState.localStorage,
    }
}

export default compose(
    connect(mapStateToProps, {
        getDataEmployees,
        setLocalStorageData: setElementLocalStorageData,
        deleteLocalStorageData: deleteElementLocalStorageData,
        setOneEmployeeActivity,
    })
)(EmployeesBlock)
