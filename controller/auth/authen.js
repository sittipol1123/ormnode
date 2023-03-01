const { User } = require('../../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

exports.register = async (req, res) => {
    const { name, email, role, username, password } = req.body;
    console.log(email);
    try {
        const olduser = await User.findOne({ where: { email: email } });
        if (olduser) {
            return res.status(409).send("User is already exist");
            // return res.json(olduser);
        }
        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            name,
            email,
            username,
            password: hashedPassword,
            role,
        });
        return res.json(user);
    } catch (err) {
        console.log(err);
    }
}

exports.login = async(req, res) => {
    const { username, password } = req.body;
    try {
        if (!(username && password)) {
            res.status(400).send("All input is required");
        }
        const user = await User.findOne({ where: { username: username } });
        if(user && (await bcrypt.compare(password, user.password))){
            const token = jwt.sign(
                {user_id: user.uuid, username}, 'secret', {expiresIn: "2h",}
            );
            // tm = token;
            user.token = token;
        }else{
            return res.json({message: 'username or password invalid'});
        }
        return res.status(200).json({status: 'ok', user});
    } catch (err) {
        console.log(err);
    }
}