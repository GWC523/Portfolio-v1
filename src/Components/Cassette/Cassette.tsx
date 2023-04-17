import React, {useState} from 'react';
import PropTypes from "prop-types";

/* Image */
import CassetteImg from "../../Assets/Images/Room/room_cassette.svg";

/* CSS */
import "./Cassette.scss";


interface CassetteProps {
  func: Function,
  isPlaying: Boolean
}


function Cassette({func, isPlaying}: CassetteProps) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
       <img 
            src={CassetteImg} 
            className='cassette'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => func()}
        />
        {(isHovering || isPlaying) && (
            <div className="music">
                <div className="noot-1">
                    &#9835; &#9833;
                    </div>
                    <div className="noot-2">
                    &#9833;
                    </div>
                    <div className="noot-3">
                    &#9839; &#9834;
                    </div>
                    <div className="noot-4">
                    &#9834;
                </div>    
            </div>
        )}
    </>
  )
}


export default Cassette