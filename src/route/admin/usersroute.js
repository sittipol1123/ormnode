// const getuser = (req, res) => {
//     // console.log(req.body);
//     // console.log('hello boy');
//     res.send('hello boy');

// }
// function getuser(){
//     return 'aaaa';
// }
const { User } = require('../../../models');

const index = async(req, res) => {
    try {
        const users = await User.findAll();
        return res.json(users);
    }catch(err){
        console.log(err);
        return res.status(500).json({error: 'somthing went wrong'});
    }
}

const fineuser = async(req, res) => {
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

module.exports = {
    index: index,
    fineuser: fineuser
};