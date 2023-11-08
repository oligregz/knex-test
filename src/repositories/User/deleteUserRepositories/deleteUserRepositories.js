const knex = require('../../../../knexfile')

const deleteUserRepositories = async ({
    user_id
}) => {

    try {
       knex('users').where({id: user_id}).del()
        
    } catch (err) {
        rollbackTransaction({transaction})
        throw new Error(err)
    }
}

module.exports = {
    deleteUserRepositories
}