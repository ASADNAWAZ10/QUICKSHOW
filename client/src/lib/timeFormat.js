
const timeFormat = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const minutesRemember = minutes % 60;
    return `${hours}h ${minutesRemember}m`
}

export default timeFormat;