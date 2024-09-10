import {validation} from "../validation/validation.js";
import {registerUserValidation} from "../validation/userValidation.js";
import {prismaClient} from "../application/database.js";
import bcrypt from "bcrypt";
import {ResponseError} from "../error/responseError.js";

const register = async (req, res) => {
    const user = validation(registerUserValidation, req);

    const countUser = await prismaClient.user.count({
        where: {
            username: user.username,
        }
    })

    if(countUser === 1) {
        throw new ResponseError(400, "Username Has Already Exists")
    }

    user.password = await bcrypt.hash(user.password, 10);

    return prismaClient.user.create({
        data: user,
        select: {
            username: true,
            name: true,
        }
    })
}

export default { register }