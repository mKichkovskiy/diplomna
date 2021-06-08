class ApiErr extends Error{
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }

    static badRequest(message){
        return new ApiErr(404, message)
    }

    static internal(message){
        return new ApiErr(500, message)
    }

    static forbiden(message){
        return new ApiErr(403, message)
    }
}

module.exports = ApiErr