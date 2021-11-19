const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const MONTHS_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const sortHelper = {
    sortArr(data) {
        const dataCopy = data.slice().sort((a, b) => a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1)

        const res = ALPHABET.map((letter) => {
            return {
                letter,
                arr: dataCopy.filter((a) => a.firstName[0].toLowerCase() === letter.toLowerCase())
            }
        })

        return res
    },
    sortSelectedEmployees(data) {
        const dataCopy = data.slice().sort((a, b) => a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1)
        const months = [...MONTHS_NAMES.slice(new Date().getMonth()), ...MONTHS_NAMES.slice(0, new Date().getMonth())]
        const res = months.map((month) => {
            return {
                month,
                arr: dataCopy.filter((a) => new Date(a.dob).toDateString().slice(4, 7).toLowerCase() === month.toLowerCase())
            }
        })
        return res
    }


}

export default sortHelper

/* month: month,
                ...dataCopy.filter((a) => new Date(a.dob).toDateString().slice(4,7).toLowerCase() === month.toLowerCase())*/