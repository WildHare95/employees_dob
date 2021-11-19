import { ALPHABET, MONTHS_NAMES } from "../constants"

export const sortEmployeesByAlphabet = (data) => {
    return data
        .slice()
        .sort((a, b) =>
            a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1
        )
}

export const getEmployeesByAlphabet = (data) => {
    return ALPHABET.map((letter) => {
        return {
            letter,
            arr: data.filter(
                (a) => a.firstName[0].toLowerCase() === letter.toLowerCase()
            ),
        }
    })
}

export const getEmployeesByMonth = (data) => {
    const dataCopy = data
        .slice()
        .sort((a, b) =>
            a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1
        )
    const months = [
        ...MONTHS_NAMES.slice(new Date().getMonth()),
        ...MONTHS_NAMES.slice(0, new Date().getMonth()),
    ]
    return months.map((month) => {
        return {
            month,
            arr: dataCopy.filter(
                (a) =>
                    new Date(a.dob).toDateString().slice(4, 7).toLowerCase() ===
                    month.toLowerCase()
            ),
        }
    })
}
