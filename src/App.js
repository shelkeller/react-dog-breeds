import "./styles.css";
import * as React from "react";
import PuppyGrid from "./components/PuppyGrid";
import {IoPawSharp} from "react-icons/io5"
import { useEffect, useState } from "react";
import { apiGetAllDogBreeds, apiGetRandomImage } from "./api";

/*
TODO: 
clean up tree search algorithm 
move all styles to css 
get rid of puppygrid component

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
        <h1>
          It's Puppy Time 
          <IoPawSharp style={{position: "relative", top:"5px"}} />
          <span style={{fontSize: '12px', float: "right", position: "relative", top: "15px"}}>All dogs are puppies.</span>
          <input
            onChange={handleChange}
            type="text"
            value={filter} 
          /> 
        </h1>
        <PuppyGrid puppies={puppies} />
      </header>
    </main>
  );
}
