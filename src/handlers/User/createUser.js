'use strict'
const { createUserService } = require('../../services');

const createUserHandler = async (req, res, next) => {
    try {
        const {
            user_email,
            user_password,
            full_name
        } = req.body

        const created_user = await createUserService({
            user_email,
            user_password,
            full_name
        });

        console.log(created_user)

        return res.status(200).send({ user_created: {
            user_id: created_user[0],
            user_email,
            user_password,
            full_name
        }});

    } catch(error){
        throw new Error(error);
    }
}

module.exports = {
    createUserHandler
}