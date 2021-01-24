import "./styles.css";
import * as React from "react";
import PuppyGrid from "./components/PuppyGrid";
import {IoPawSharp} from "react-icons/io5"
import { useEffect, useState } from "react";
import { apiGetAllDogBreeds, apiGetRandomImage } from "./api";
/*
Using React, create the basic page that lists and filters dog breeds. This is the docs for the API you will interface
with: https://dog.ceo/dog-api/documentation/. You will use the API to fetch a list of dog breeds which will be the basis of
your app. By default, your page should have a tiled view of all dog breeds returned from that API with the name of the breed
overlaying the image of the breed.
There should be a way to filter the dog breed names based on an input on the page. When a user is typing, the tiles should
automatically show/not show based on the filter input changing. Your page should be responsive. You can choose whether to
include sub-breeds into your app or not.


TODO: 
- Filter input 
- Grid

*/

export default function App() {
  let [puppies, setPuppies] = useState([]);
  let [filter, setFilter] = useState('');

  useEffect(() => {
    apiGetAllDogBreeds().then((rsp) => {
      let pushPuppies = [];
      let length = Object.entries(rsp.data.message).length;
      // Use Object.entries to extrapolate this JSON object out into a 2D array of strings.
      Object.entries(rsp.data.message).forEach((entry, index) => {
        // Two kinds of dogs in this list: dogs with one name, and dogs with two names

        // Dogs with one name:
        if (entry[1].length === 0) {
          apiGetRandomImage(entry[0]).then((imageRsp) => {
            pushPuppies.push({
              firstName: "",
              lastName: entry[0],
              image: imageRsp.data.message
            });
            if (index === length - 1) {
              // We've reached the end and gotten all of our images.
              // Time to update the state and thus the DOM.
              setPuppies(pushPuppies);
            }
          });
        }

        // Dogs with two names:
        if (entry[1].length > 0) {
          entry[1].forEach((subPup, subIndex) => {
            apiGetRandomImage(entry[0], subPup).then((imageRsp) => {
              pushPuppies.push({
                firstName: subPup,
                lastName: entry[0],
                image: imageRsp.data.message
              });
              if (index === length - 1 && subIndex === entry[1].length - 1) {
                // If our last entry happens to have children, we make sure we reach the
                // end of those children.
                setPuppies(pushPuppies);
              }
            });
          });
        }
      });
    });
  }, []);

  const handleChange = e => {
   setFilter(e.target.value);
  
   let newPuppies = puppies.map(puppy => {
      puppy.filtered = !puppy.firstName.includes(e.target.value) && !puppy.lastName.includes(e.target.value);
      return puppy;
   });

   setPuppies(newPuppies);

  }

  return (
    <main>
      <header>
        <h1>It's Puppy Time <IoPawSharp style={{position: "relative", top:"5px"}} />
        <input onChange={handleChange}
        type="text"
        value={filter} /> </h1>
        <PuppyGrid puppies={puppies} />
      </header>
    </main>
  );
}
