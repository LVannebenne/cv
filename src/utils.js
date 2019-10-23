// takes a string and return a date object
function dateOfBirth(dateString) {
    const parsed = dateString.split("/");
    return Math.floor(
        (new Date() - new Date(parsed[2], parsed[1], parsed[0])) /
            (365 * 24 * 60 * 60 * 1000),
    );
}

export default dateOfBirth;
