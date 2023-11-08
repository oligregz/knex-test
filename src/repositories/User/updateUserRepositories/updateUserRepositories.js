const knex = require('../../../../knexfile');

const updateUserRepositories = async ({
    id,
    user_email,
    user_password,
    full_name
}) => {
    try {
        await knex('users').where({ id }).update({
            user_email,
            user_password,
            full_name
        });
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    updateUserRepositories
}