const knex = require('../../../../knexfile');

const getPostByUserIdRepositories = async ({
    user_id
} = {}) => {

    try {
        const response = await knex('posts').where({author_id: user_id});

        const has_response = Array.isArray(response) && response.length > 0;
    
    
        if(!has_response){
            return posts = [];
        }
    
        const posts = response.map((post) => post);
    
        return posts;
    } catch (error) {
        throw new Error(error);
    }

}

module.exports = {
    getPostByUserIdRepositories
}