import { Resolver, Query } from "type-graphql";
import { User } from "../../entity/user";
import { UserRepository } from "./user.repository";
import { AppDataSource as DB } from "../../config/db";

@Resolver()
export class UserResolver {
  private userRepo: UserRepository = new UserRepository(DB);

  @Query(() => [User])
  async getAllUser() {
    return await this.userRepo.getAll();
  }
}
