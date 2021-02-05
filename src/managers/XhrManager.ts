import CitiesResponse from "../models/CitiesResponse";

const xhr = new XMLHttpRequest();

export const xhrManager = (endpoint: string): XMLHttpRequest => {
  xhr.open("GET", endpoint, true);
  xhr.responseType = "text";
  return xhr;
};

const getAllCitiesRequest = (endpoint: string, indexPaginate?: number) => {
  return new Promise((resolve, reject) => {
    const xhrInstance = xhrManager(endpoint);

    xhrInstance.onload = () => {
      try {
        let cities = JSON.parse(xhrInstance.responseText);
        let data: CitiesResponse[] = [];
        let canPaginate: boolean = true;
        cities.forEach((city: CitiesResponse, index: number) => {
          if (indexPaginate) {
            if (index > indexPaginate && index < indexPaginate + 50) {
              data.push(city);
            }
            canPaginate = cities.length > indexPaginate + 50;
          } else if (index < 50) {
            data.push(city);
          }
        });
        resolve({ data, canPaginate, status: xhrInstance.status });
      } catch (err) {
        reject({ status: err });
      }
    };
    xhrInstance.send();
  });
};

const getAllCitiesSearchRequest = (
  endpoint: string,
  searchValue: string,
  indexPaginate?: number
) => {
  return new Promise((resolve, reject) => {
    const xhrInstance = xhrManager(endpoint);
    xhrInstance.onload = () => {
      try {
        let cities = JSON.parse(xhrInstance.responseText);
        let filterData: CitiesResponse[] = [];

        cities.forEach((city: CitiesResponse, index: number) => {
          let nameCity = city.city.toLocaleLowerCase();
          if (nameCity.includes(searchValue.trim().toLowerCase())) {
            filterData.push(city);
          }
        });

        let data: CitiesResponse[] = [];
        let canPaginate: boolean = filterData.length > 50;
        filterData.forEach((city, index) => {
          if (indexPaginate) {
            if (index > indexPaginate && index < indexPaginate + 50) {
              data.push(city);
            }
            canPaginate = filterData.length > indexPaginate! + 50;
          } else if (index < 50) {
            data.push(city);
          }
        });
        resolve({ data, canPaginate, status: xhrInstance.status });
      } catch (err) {
        reject({ status: err });
      }
    };
    xhrInstance.send();
  });
};

export const xhrEndpoint = { getAllCitiesRequest, getAllCitiesSearchRequest };
