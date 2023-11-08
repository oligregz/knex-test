'use strict'

const { 
    getUserByIdService, 
    getAllUsersService 
} = require('../../services');


const listUserHandler = async (req, res, next) => {
    try{
        const {
            user_id
        } = req.query;
        
        const has_user_id = !!user_id && Number.isFinite(+user_id);

        const user_response = has_user_id && await getUserByIdService({ user_id });

        const users_response = !has_user_id && await getAllUsersService();
        console.log(user_response);
        console.log(users_response);
        
        const users = [];

        if (user_response && Array.isArray(user_response.user)) {
          users.push(...user_response.user);
        }
        
        if (users_response && Array.isArray(users_response.users)) {
          users.push(...users_response.users);
        }
        
        return res.status(200).send({ users });
        

        return res.status(200).send({users});
    }catch(error){
        throw new Error(error);
    }
}

module.exports = {
    listUserHandler
}