console.log("====== Welcome to James api response =======");
console.log("====== Response Generation Started =======");
class Response{
    success(message, data = null){
        return {
            success: true,
            message,
            data
        };
    }

    error(message, errors = null){
        return {
            success: false,
            message,
            errors
        }
    }
}

module.exports = Response;