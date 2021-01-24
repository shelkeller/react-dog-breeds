const GridEntry = (props) => {
  let { puppy } = props;
  let backgroundStyle = { backgroundImage: "url(" + puppy.image + ")", backgroundSize: 'cover', position: 'relative' };
  let labelStyle = {
    backgroundColor: "white", 
    padding: "3px", 
    position: "absolute", 
    top: "10px", 
    left: "10px",
    borderRadius: "2px"
  } 
  return (
    <div className="grid-entry" style={backgroundStyle}>
      <span style={labelStyle}>{puppy.firstName} {puppy.lastName}</span>
    </div>
  );
};

export default GridEntry;
