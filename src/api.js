import axios from "axios";

export const apiGetAllDogBreeds = () => {
  return axios.get("https://dog.ceo/api/breeds/list/all");
};

// hound, basset
export const apiGetRandomImage = (breed, subBreed) => {
  let innerPart = breed;
  if (!!subBreed) innerPart += "/" + subBreed;
  let url = "https://dog.ceo/api/breed/" + innerPart + "/images/random";
  return axios.get(url);
};
