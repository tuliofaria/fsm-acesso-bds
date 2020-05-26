
const init = connection => {
    const create = async(data) => {
        const conn = await connection
        await conn.query('insert into categories (category) values (?)', data)
    }

    const remove = async(id) => {
        const conn = await connection
        await conn.query('delete from categories where id = ? limit 1', [id])
    }
    const update = async(id, data) => {
        const conn = await connection
        await conn.query('update categories set category = ? where id = ?', [...data, id])
    }
    const findAll = async() => {
        const conn = await connection
        const [results] = await conn.query('select * from categories')
        return results
    }

    return {
        create,
        remove,
        update,
        findAll
    }
}
module.exports = init
