import { xhrEndpoint } from "../managers/XhrManager";
import SortType from "../models/SortType";

test("get cities list", async () => {
  xhrEndpoint
    .getAllCitiesRequest("cities.json", SortType.increase)
    .then((response: any) => {
      expect(response.status).toBe(200);
    });
});

test("get cities list paginate", async () => {
  xhrEndpoint
    .getAllCitiesRequest("cities.json", SortType.increase, 50)
    .then((response: any) => {
      expect(response.status).toBe(200);
    });
});

test("get citiesSearch list", async () => {
  xhrEndpoint
    .getAllCitiesSearchRequest("cities.json", "new york", SortType.increase)
    .then((response: any) => {
      expect(response.status).toBe(200);
    });
});

test("get citiesSearch list paginate", async () => {
  xhrEndpoint
    .getAllCitiesSearchRequest("cities.json", "n", SortType.increase, 50)
    .then((response: any) => {
      expect(response.status).toBe(200);
    });
});
