import { Get, Route, Tags } from "tsoa";
import { getConnection, getRepository } from "typeorm";
import { initializeDbConnection } from "../config/postgres";
import { User } from "../database/entities/user";
import { ServerError } from "../utils/server-error";

export interface IUser {
  id: number;
  first: string;
  last: string;
  email: string;
}

@Route("users")
export class UsersController {
  @Get()
  @Tags("Users")
  public async GetUsers(): Promise<IUser[]> {
    const repo = await this.getRepo();
    return repo.find();
  }

  @Get("{userId}")
  @Tags("Users")
  public async GetUser(userId: number): Promise<IUser> {
    const repo = await this.getRepo();
    const user = await repo.findOne({ id: userId });
    if (!user) {
      throw new ServerError(`no user found with id ${userId}`);
    }
    return user;
  }
  private async getRepo() {
    if (!getConnection()) {
      await initializeDbConnection();
    }
    return getRepository<User>("User");
  }
}
