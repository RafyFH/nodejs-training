import {ResponseError} from "../error/responseError.js";

const validation = (schema, request) => {
    const result =  schema.validate(request);
    if(result.errors) {
        throw new ResponseError(400, result.errors.message);
    }else{
        return result.value;
    }
}

export {
    validation,
}