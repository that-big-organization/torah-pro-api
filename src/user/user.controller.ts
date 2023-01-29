import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
    constructor(private userService: UserService) { }

    @Post('createUser')
    createUser() {
        return this.userService.createUser
    }

    @Get(":id")
    getUser(@Param() params) {
        return { params }
    }

    @Put()
    updateUser() {
        return "update user"
    }

    @Delete()
    deleteUser() {
        return "deleting user"
    }
}