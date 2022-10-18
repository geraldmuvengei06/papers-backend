const { Validator } = require('node-input-validator');
const { prismaConn} = require('../../conn')

exports.register = async (req, res) => {``

    const val = new Validator(req.body, {
        email: 'required|email',
        password: 'required|min:8'
    })

    val.check().then((matched) => {
        if (!matched) {
            res.status(422).send(v.errors);
        }
    })
    
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    let user = {
        ...req.body,
        password: hashPassword
    }

    await prismaConn.user.create({
        ...user
    })   

    // send email to set password
    res.status(200).send({ 'message': 'Registration successiful..'})
}


exports.login = async (req, res) => {

}

exports.user = async (req, res) => {
    res.status(200)
        .send('user')
}