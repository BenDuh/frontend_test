import { xhrEndpoint } from "../managers/XhrManager";

test("get cities list", async () => {
  xhrEndpoint.getAllCitiesRequest("cities.json").then((response: any) => {
    expect(response.status).toBe(200);
  });
});

test("get cities list paginate", async () => {
  xhrEndpoint.getAllCitiesRequest("cities.json", 50).then((response: any) => {
    expect(response.status).toBe(200);
  });
});

test("get citiesSearch list", async () => {
  xhrEndpoint
    .getAllCitiesSearchRequest("cities.json", "new york")
    .then((response: any) => {
      expect(response.status).toBe(200);
    });
});

test("get citiesSearch list pafinate", async () => {
  xhrEndpoint
    .getAllCitiesSearchRequest("cities.json", "n", 50)
    .then((response: any) => {
      expect(response.status).toBe(200);
    });
});