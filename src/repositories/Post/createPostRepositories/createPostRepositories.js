const knex = require('../../../../knexfile');


const createPostRepositories = async ({
    post
} = {}) => {

    try {
        const post_created = await knex('posts').insert({
            post_text: post.post_text,
            author_id: post.author_id

        });
        
        const has_response = Array.isArray(post_created) && post_created.length > 0;
        
        if (!has_response) {
            return {
                post_created: []
            }
        }

        return [ post ];

    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    createPostRepositories
}