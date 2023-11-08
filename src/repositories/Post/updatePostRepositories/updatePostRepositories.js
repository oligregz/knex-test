const knex = require('../../../../knexfile');

const updatePostRepositories = async ({
    id,
    author_id,
    post_text
}) => {

    try {
        await knex('posts').where({ id }).update({
            id,
            author_id,
            post_text
        });

    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    updatePostRepositories
}