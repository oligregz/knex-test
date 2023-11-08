const { 
    knex
} = require('../../../../knexfile');


const getUserRepositories = async ({ user_id }) => {
    try {
        const response = await knex('users').where({ id: user_id});
    
        const has_response = Array.isArray(response) && response.length > 0;
    
        if(!has_response){
            return {
                users: []
            }
        }
    
        return response;
    } catch (error) {
        throw new Error(error);
    }
}


module.exports = {
    getUserRepositories
}