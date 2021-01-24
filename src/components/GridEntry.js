const GridEntry = (props) => {
  let { puppy } = props;
  let backgroundStyle = { backgroundImage: "url(" + puppy.image + ")", backgroundSize: 'cover', position: 'relative' };
  let labelStyle = {
    backgroundColor: "white", 
    padding: "5px", 
    position: "absolute", 
    bottom: "5px", 
    left: "5px",
    borderRadius: "10px"
  } 
  return (
    <div className="grid-entry" style={backgroundStyle}>
      <span style={labelStyle}>{puppy.firstName} {puppy.lastName}</span>
    </div>
  );
};

export default GridEntry;
