import { HTTP_NOT_FOUND } from "../../constants/HttpCode"

export default class NotFoundException extends Error {
    constructor(message) {
        super(message || "Not found.")

        this.status = HTTP_NOT_FOUND
    }
}