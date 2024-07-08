import apiService, { ApiService } from "../../app/services/apiService";
import { Animal } from "../typings";

export class AnimalsApiService {
  constructor(private api: ApiService = apiService) {}

  getList() {
    return this.api.get("/animal");
  }

  create(animal: Animal) {
    return this.api.post("/animal", animal);
  }

  delete(animal: Animal) {
    return this.api.delete("/animal/" + encodeURIComponent(animal.Name));
  }
}

const animalsApiService = new AnimalsApiService();
export default animalsApiService;
