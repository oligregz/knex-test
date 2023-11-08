const knex = require('../../../../knexfile')

const deletePostRepositories = async ({
    post_id
}) => {

    try {
        await knex('posts').where({ id: post_id }).del();
        
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    deletePostRepositories
}