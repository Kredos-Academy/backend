import { HTTP_FORBIDDEN } from "../../constants/HttpCode"

export default class UnAuthenticatedException extends Error {
    constructor(message) {
        super(message || "Unauthenticated")

        this.status = HTTP_FORBIDDEN
    }
}