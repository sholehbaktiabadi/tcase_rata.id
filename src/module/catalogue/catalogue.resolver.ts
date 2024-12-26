import { Resolver, Query, Mutation, Arg } from "type-graphql"
import { AppDataSource as DB } from "../../config/db"
import { Catalogue } from "../../entity/catalogue"
import { CatalogueRepository } from "./cataloge.repository"
import { CreateCatalogueDto, UpdateCatalogueDto } from "./catalogue.dto"

@Resolver()
export class CatalogueResolver {

  private userRepo: CatalogueRepository = new CatalogueRepository(DB)

  @Query(() => [Catalogue])
  async getAllCatalogue() {
    return await this.userRepo.getAll()
  }

  @Mutation(() => Catalogue)
  async createOneCatalogue(@Arg("dto") dto: CreateCatalogueDto) {
    const entity = new Catalogue()
    const data = Object.assign(entity, dto)
    return await this.userRepo.create(data)
  }

  @Mutation(() => Boolean)
  async deleteOneCatalogue(@Arg("id") id: number) {
    const select = await this.userRepo.getOne({ where: { id } })
    if(!select) return false
    await this.userRepo.delete(id)
    return true
  }

  @Mutation(() => String)
  async updateCatalogue(@Arg("id") id: number, @Arg("dto") dto: UpdateCatalogueDto) {
    const select = await this.userRepo.getOne({ where: { id } })
    if(!select) return "not found"
    await this.userRepo.update(id, dto)
    return "succedd"
  }

}