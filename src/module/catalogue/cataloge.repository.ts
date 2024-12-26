import { DataSource, FindOneOptions, Repository } from "typeorm";
import { Catalogue } from "../../entity/catalogue";
import { UpdateCatalogueDto } from "./catalogue.dto";

export class CatalogueRepository {
  private catalogueRepo: Repository<Catalogue>;
  constructor(db: DataSource) {
    this.catalogueRepo = db.getRepository(Catalogue);
  }

  getAll() {
    return this.catalogueRepo.find();
  }

  getOne(opt: FindOneOptions<Catalogue>) {
    return this.catalogueRepo.findOne(opt);
  }

  create(catalogue: Catalogue) {
    return this.catalogueRepo.save(catalogue);
  }

  delete(id: number) {
    return this.catalogueRepo.softDelete(id);
  }

  update(id: number, catalogue: UpdateCatalogueDto) {
    return this.catalogueRepo.update(id, catalogue);
  }
}
