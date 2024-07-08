import config from "../../config";

export class ApiService {
  baseUrl = config.SERVER_URL;

  async fetch(method: string, url: string, body?: Object) {
    const options: RequestInit = {
      method,
      headers: {
        "Content-type": "application/json",
      },
    };
    if (body) options.body = JSON.stringify(body);
    const res = await fetch(this.baseUrl + url, options);
    if (!res.ok) {
      throw new Error(await res.json());
    }
    return res.json();
  }

  get(url: string) {
    return this.fetch("get", url);
  }

  post(url: string, body: Object) {
    return this.fetch("post", url, body);
  }

  delete(url: string) {
    return this.fetch("delete", url);
  }
}

const apiService = new ApiService();
export default apiService;
