const GridEntry = (props) => {
  let { puppy } = props;

  
  let backgroundStyle = { 
    backgroundImage: "url(" + puppy.image + ")", 
    backgroundSize: 'cover', 
    position: 'relative'
   };
  
  let labelStyle = {
    position: "absolute", 
    bottom: "5px", 
    left: "5px"
  } 

  let firstLetterUc = (string) => {
    if (string.length) return string[0].toUpperCase() + string.slice(1);
    return '';
  }

  return (
    <>
    { 
    !puppy.filtered && 
        <div className="grid-entry" style={backgroundStyle}>
        <span className="entry-label" style={labelStyle}>{firstLetterUc(puppy.firstName)} {firstLetterUc(puppy.lastName)}</span>
        </div>
    }
  </>
    
  );
};

export default GridEntry;
