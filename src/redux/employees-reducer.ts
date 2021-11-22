import { employeesAPI } from "../api/api"
import { sortEmployeesByAlphabet } from "../common/helpers/employees-helper"
import { EMPLOYEES_ACTIVITY_LOCAL_STORAGE_KEY } from "../common/constants"
import { Dispatch } from "redux"

const SET_EMPLOYEES = "SET_EMPLOYEES" as const
const SET_EMPLOYEES_ACTIVITY = "SET_EMPLOYEES_ACTIVITY" as const
const SET_ONE_EMPLOYEE_ACTIVITY = "SET_ONE_EMPLOYEE_ACTIVITY" as const
const SET_ALL_EMPLOYEES_UN_ACTIVE = "SET_ALL_EMPLOYEES_UN_ACTIVE" as const

export type EmployeeType = {
    id: string
    firstName: string
    lastName: string
    dob: string
}

export type EmployeesType = EmployeeType[] | null | undefined

export type EmployeesActivityType = {
    [employeesId: string]: boolean
}

type InitialStateType = {
    employees: EmployeesType
    employeesActivity: EmployeesActivityType
}

/*Declaring a general data structure with default values*/
let initialState: InitialStateType = {
    /**
     * undefined - not loaded
     * null - some error
     * [
     *     id: "5e00928d91e7feaa9872ec08",
     *     dob: "2019-02-26T16:52:36.244Z",
     *     firstName: "Yang",
     *     lastName: "Carson"
     * ]
     */
    employees: undefined,

    /**
     * {
     *     'id1': false,
     *     'id2': true,
     * }
     */
    employeesActivity: {},
}

const dataState = (
    state = initialState,
    action: ActionType
): InitialStateType => {
    switch (action.type) {
        case SET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
            }
        case SET_EMPLOYEES_ACTIVITY:
            return {
                ...state,
                employeesActivity: action.payload,
            }
        case SET_ONE_EMPLOYEE_ACTIVITY:
            return {
                ...state,
                employeesActivity: {
                    ...state.employeesActivity,
                    [action.payload.employeeId]: action.payload.state,
                },
            }
        case SET_ALL_EMPLOYEES_UN_ACTIVE:
            return {
                ...state,
                employeesActivity: Object.keys(state.employeesActivity).reduce(
                    (accum: EmployeesActivityType, employeeId: string) => {
                        accum[employeeId] = false

                        return accum
                    },
                    {}
                ),
            }
        default:
            return state
    }
}

type EmployeesTypeAction = ReturnType<typeof setEmployees>

const setEmployees = (data: EmployeeType[] | null) => ({
    type: SET_EMPLOYEES,
    payload: data,
})

type EmployeesActivityActionType = ReturnType<typeof setEmployeesActivity>

const setEmployeesActivity = (data: EmployeesActivityType) => ({
    type: SET_EMPLOYEES_ACTIVITY,
    payload: data,
})

type OneEmployeeActivityType = ReturnType<typeof setOneEmployeeActivity>
export const setOneEmployeeActivity = (employeeId: string, state: boolean) => ({
    type: SET_ONE_EMPLOYEE_ACTIVITY,
    payload: { employeeId, state },
})

type AllEmployeesUnActiveType = ReturnType<typeof setAllEmployeesUnActive>

export const setAllEmployeesUnActive = () => ({
    type: SET_ALL_EMPLOYEES_UN_ACTIVE,
})

type ActionType =
    | AllEmployeesUnActiveType
    | OneEmployeeActivityType
    | EmployeesActivityActionType
    | EmployeesTypeAction

type DispatchType = Dispatch<ActionType>

export const getDataEmployees = () => async (dispatch: DispatchType) => {
    try {
        // Success
        const res = await employeesAPI.getEmployeesData()

        // Employees data
        const sortedEmployees = sortEmployeesByAlphabet(res.data)
        dispatch(setEmployees(sortedEmployees))

        // Employees activity
        let employeesActivity

        // Get employeesActivity from localStorage
        const employeesActivityLocalStorageString = localStorage.getItem(
            EMPLOYEES_ACTIVITY_LOCAL_STORAGE_KEY
        )
        const employeesActivityLocalStorage =
            employeesActivityLocalStorageString &&
            JSON.parse(employeesActivityLocalStorageString)

        employeesActivity = res.data.reduce((accum: any, item: any) => {
            const employeeId = item.id

            // Merge employeesActivity from localStorage with employees from server
            accum[employeeId] = employeesActivityLocalStorage
                ? employeesActivityLocalStorage[employeeId] || false
                : false

            return accum
        }, {})

        dispatch(setEmployeesActivity(employeesActivity))
    } catch (e) {
        // Error
        setEmployees(null)
    }
}

export default dataState
