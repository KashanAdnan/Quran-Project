import bcrypt from "bcrypt"

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                reject(err)
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(hash)
                }
            })
        })
    })
}

const comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash)
}

export {
    comparePassword,
    hashPassword
}