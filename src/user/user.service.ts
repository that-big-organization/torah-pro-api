import { Injectable, Post } from "@nestjs/common";

@Injectable({})
export class UserService {
    createUser() {
        return "I am create user"
    }

}