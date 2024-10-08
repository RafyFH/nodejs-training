import userService from "../service/userService.js";

const register = async (req, res, next) => {
    try{
        const result = await userService.register(req.body);
        res.status(200).json({
            data: result,
        });
    } catch (e) {
        next(e);
    }
}

export default {
    register,
}