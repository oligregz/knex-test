constknex = require('../../../../knexfile');

const getPostByPostIdRepositories = async ({ post_id } = {}) => {

    try {
        const response = await knex('posts').where({ id: post_id });

        const has_response = Array.isArray(response) && response.length > 0;
    
        if(!has_response){
            return {
                posts: []
            }
        }
    
        return response
    } catch (error) {
        throw new Error(error);
    }

}

module.exports = {
    getPostByPostIdRepositories
}