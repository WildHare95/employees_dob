import {employeesAPI} from "../api/api";
import sortHelper from "../common/sorting/SortingHelper";

const SET_DATA_STATISTICS = "SET_DATA_STATISTICS"
const CHANGE_DATA_LOCAL_STORAGE = "CHANGE_DATA_LOCAL_STORAGE"

const SET_EMPLOYEES = "SET_EMPLOYEES"
const SET_EMPLOYEES_ACTIVITY = "SET_EMPLOYEES_ACTIVITY"
const SET_ONE_EMPLOYEE_ACTIVITY = "SET_ONE_EMPLOYEE_ACTIVITY"

/*Declaring a general data structure with default values*/
const initialState = {
    dataEmployees: [],
    localStorage: [],
    filterArr: [],
    isLoaded: false, //delete this

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
    employeesActivity: {}
}

const dataState = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload
            }
        case SET_EMPLOYEES_ACTIVITY:
            return {
                ...state,
                employeesActivity: action.payload
            }
        case SET_DATA_STATISTICS:
            return {
                ...state,
                dataEmployees: action.data,
                isLoaded: true
            }
        case CHANGE_DATA_LOCAL_STORAGE:
            return {
                ...state,
                localStorage: action.data
            }
        default:
            return state
    }
}

const setDataEmployees = (data) => ({type: SET_DATA_STATISTICS, data: data})
const changeDataFromLocalStorage = (data) => ({type: CHANGE_DATA_LOCAL_STORAGE, data: data})

const setEmployees = (data) => ({type: SET_EMPLOYEES, payload: data})

const setEmployeesActivity = (data) => ({type: SET_EMPLOYEES_ACTIVITY, payload: data})
const setOneEmployeeActivity = (data) => ({type: SET_ONE_EMPLOYEE_ACTIVITY, payload: data})


export const getDataEmployees = () => async (dispatch) => {
    try {
        // Success
        const res = await employeesAPI.getEmployeesData()

        // Employees data
        const sortedEmployees = sortHelper.sortArr(res.data)
        dispatch(setEmployees(sortedEmployees))

        // Employees activity
        const employeesActivity = res.data.reduce(
            (accum, item) => {
                accum[item.id] = true

                return accum
            }, {}
        )
        dispatch(setEmployeesActivity(employeesActivity))
    } catch (e) {
        // Error
        setEmployees(null)
    }
}

export const setElementLocalStorageData = (data) => (dispatch) => {
    if (data.length !== 0) {
        let existingEntries = JSON.parse(localStorage.getItem("employees"));
        if (existingEntries == null) existingEntries = [];
        existingEntries = existingEntries.filter(item => item.id !== data.id)
        existingEntries.push(data);
        localStorage.setItem("employees", JSON.stringify(existingEntries));
        dispatch(changeDataFromLocalStorage(JSON.parse(localStorage.getItem("employees"))))
    }
}

export const deleteElementLocalStorageData = (data) => (dispatch) => {
    if (data.length !== 0) {
        let existingEntries = JSON.parse(localStorage.getItem("employees"));
        if (existingEntries == null) existingEntries = [];
        existingEntries = existingEntries.filter(item => item.id !== data.id)
        localStorage.setItem("employees", JSON.stringify(existingEntries));
        dispatch(changeDataFromLocalStorage(JSON.parse(localStorage.getItem("employees"))))

    }
}

export const removeAllElementsLocalStorage = (data = []) => (dispatch) => {
    localStorage.clear()
    dispatch(changeDataFromLocalStorage(data))
}


/*

                localStorage.setItem(`${data.firstName}`, JSON.stringify(data))
        dispatch(setDataFromLocalStorage(JSON.parse(localStorage.getItem(`${data.firstName}`))))
    }*/


export default dataState