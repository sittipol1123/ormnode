const { User } = require('../../models');
const bcrypt = require('bcryptjs');

exports.index = async(req, res) => {
    try {
        const users = await User.findAll();
        return res.json(users);
    }catch(err){
        console.log(err);
        return res.status(500).json({error: 'somthing went wrong'});
    }
}

exports.store = async(req, res) => {
    try{
        const { name, email, username, password, role } = req.body;
        const hashedPassword = await hashPassword(password);
        const user = await new User();
        user.name = name;
        user.email = email;
        user.username = username;
        user.password = hashedPassword;
        user.role = role;
        await user.save();

        return res.json({status: 'success'});
    }catch(err){
        console.log(err);
        return res.status(500).json({error: 'somthing went wrong'});
    }
}

exports.fineuser = async(req, res) => {
    const uuid = req.params.uuid;
    try {
        const users = await User.findOne({
            where: {uuid},
            include: 'posts',
        });
        return res.json(users);
    }catch(err){
        console.log(err);
        return res.status(500).json({error: 'somthing went wrong'});
    }
}

exports.updateuser = async(req, res) => {
    const uuid = req.params.uuid;
    const {name, email, role} = req.body;
    try {
        const users = await User.findOne({where: {uuid}});
        users.name = name;
        users.email = email;
        users.role = role;

        await users.save();
        return res.json(users);
    }catch(err){
        console.log(err);
        return res.status(500).json({error: 'somthing went wrong'});
    }
}

exports.deleteuser = async(req, res) => {
    const uuid = req.params.uuid;
    try {
        const users = await User.findOne({where: {uuid}});
        await users.destroy();
        return res.json({message: 'user deleted!'});
    }catch(err){
        console.log(err);
        return res.status(500).json({error: 'somthing went wrong'});
    }
}

const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};
// module.exports = {
//     index: index,
//     fineuser: fineuser
// };