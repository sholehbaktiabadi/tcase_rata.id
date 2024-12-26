import { DataSource, Repository } from "typeorm";
import { User } from "../../entity/user";

export class UserRepository {
  private userRepo: Repository<User>;
  constructor(db: DataSource) {
    this.userRepo = db.getRepository(User);
  }

  getAll() {
    return this.userRepo.find();
  }
}
