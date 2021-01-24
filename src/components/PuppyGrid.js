import GridEntry from "./GridEntry";

const PuppyGrid = (props) => {
  let { puppies } = props;

  return (
    <div className="grid">
      {puppies.map((puppy) => (
        <GridEntry puppy={puppy} />
      ))}
    </div>
  );
};

export default PuppyGrid;
