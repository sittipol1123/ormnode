const { User } = require('../../models');

exports.index = async(req, res) => {
    try {
        const users = await User.findAll();
        return res.json(users);
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

// module.exports = {
//     index: index,
//     fineuser: fineuser
// };