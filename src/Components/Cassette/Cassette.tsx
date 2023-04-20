import React, {useState} from 'react';
import PropTypes from "prop-types";

/* Image */
import CassetteImg from "../../Assets/Images/Room/room_cassette.svg";

/* CSS */
import "./Cassette.scss";


interface CassetteProps {
  func: Function,
  isPlaying: Boolean,
  isDay: Boolean
}


function Cassette({func, isPlaying, isDay}: CassetteProps) {
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
            className={isDay ? 'cassette' : 'cassette night'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => func()}
        />
        {(isHovering || isPlaying) && (
            <div className="music">
                <div className={isDay ? "noot-1" : "noot-1 night-note"}>
                    &#9835; &#9833;
                    </div>
                    <div className={isDay ? "noot-2" : "noot-2 night-note"}>
                    &#9833;
                    </div>
                    <div className={isDay ? "noot-3" : "noot-3 night-note"}>
                    &#9839; &#9834;
                    </div>
                    <div className={isDay ? "noot-4" : "noot-4 night-note"}>
                    &#9834;
                </div>    
            </div>
        )}
    </>
  )
}


export default Cassette