import { HTTP_UNAUTHORIZED } from "../../constants/HttpCode"

export default class UnAuthorizedException extends Error {
    constructor(message) {
        super(message || "Unauthorized")

        this.status = HTTP_UNAUTHORIZED
    }
}