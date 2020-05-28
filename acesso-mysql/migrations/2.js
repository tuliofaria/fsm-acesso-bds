const up = async(connection) => {
    console.log('version 2 - up')
}
const down = async(connection) => {
    console.log('version 2 - down')
}
module.exports = {
    up, down
}