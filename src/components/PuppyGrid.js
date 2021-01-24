import GridEntry from "./GridEntry";
import { BiBone } from "react-icons/bi";

const PuppyGrid = (props) => {
  let { puppies } = props;
  // Our state is not sorted by default, as it is populated by a chain of promises. 
  
  function compareDogNames( a, b ) {
    let aName = a.firstName+a.lastName;
    let bName = b.firstName+b.lastName;

    if ( aName < bName ){
      return -1;
    }
    if ( aName > bName ){
      return 1;
    }
    return 0;
  }
  
  puppies.sort(compareDogNames);

  return (
    <>
    <div className="grid">
      {!!puppies.length && puppies.map((puppy, index) => (
        <GridEntry key={'puppy'+ index} puppy={puppy} />
      ))}
    </div>
    {!puppies.length && <div className="loading">
      <div><BiBone className="spinny" /></div>Fetching puppies...</div>}
    </>
  );
};

export default PuppyGrid;
