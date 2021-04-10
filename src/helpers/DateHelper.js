const monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];


export function formatToMMMMYYYYfromString (date) {
    date = new Date(date);

    return monthNames[date.getMonth()] + " " + date.getFullYear();
}