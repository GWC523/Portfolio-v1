import React, {useState} from 'react'
import laptop from "../../Assets/Images/Room/room_laptop.svg"

/* CSS */
import "./Laptop.scss";

interface LaptopProps {
  isDay: Boolean,
}

function Laptop({isDay} : LaptopProps) {

  const [style, setStyle] = useState({
    display: 'none',
    zIndex: '1',
  });
  const [siteStyle, setSiteStyle] = useState({
    width: '105px',
    height: '138px',
    borderRadius: '0px',
  });

  const handleOnHover = () => {
    setStyle({
        display: 'block',
        zIndex: '1',
    });
    setSiteStyle({
        width: '134px',
        height: '158px',
        borderRadius: '0px 0px 0px 10px',
    })
  }
  
  const handleOffHover = () => {
    setStyle({
        display: 'none',
        zIndex: '1',
    })
    setSiteStyle({
        width: '105px',
        height: '138px',
        borderRadius: '0px',
    })
  }

  return (
        <div className="wrap">
            <div className="comp">
                <div 
                    className="monitor"
                    title="Projects"
                    onMouseEnter={e => {
                        handleOnHover();
                    }}
                    onMouseLeave={e => {
                        handleOffHover();
                    }}
                >
                    <div className={isDay ? "mid left-screen" : "mid left-screen on"}>
                    <div 
                        className="site"
                        style={siteStyle}
                    >
           
                        <div className="topbar">
                        <div className="cerrar">
                            <div className="circl"></div>
                            <div className="circl"></div>
                            <div className="circl"></div>
                        </div>
                        </div>
                        <div className="inhead">
                        <div>
                            Projects
                        </div>
                        <div className="mid">
                            <div className="item"></div>
                        </div>
                        <div className="mid txr">
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                        </div>
                        <div className="inslid">
                        
                        </div>
                        <div className="incont">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="wid">
                            <div className="itwid">
                            <div>
                                <div className="contfoot"></div>
                            </div>
                            </div>
                            <div className="itwid">
                            <div>
                                <div className="contfoot"></div>
                            </div>
                            </div>
                            <div className="itwid">
                            <div>
                                <div className="contfoot"></div>
                            </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="infoot">
                            
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className={isDay ? "mid codigo right-screen" : "mid codigo right-screen on-2"}>
                    <div className="line">
                        <div className="item var"></div>
                        <div className="item cont"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line">
                        <div className="item min var"></div>
                        <div className="item min fun"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line">
                        <div className="item min var"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line">
                        <div className="item var"></div>
                        <div className="item atr"></div>
                        <div className="item cont"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line tab1">
                        <div className="item min atr"></div>
                        <div className="item lrg fun"></div>
                        <div className="item min fun"></div>
                        <div className="item lrg cont"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line tab1">
                        <div className="item lrg atr"></div>
                        <div className="item min fun"></div>
                        <div className="item min cont"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line tab1">
                        <div className="item atr"></div>
                        <div className="item min fun"></div>
                        <div className="item atr"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line tab1">
                        <div className="item min atr"></div>
                        <div className="item min cont"></div>
                        <div className="item lrg atr"></div>
                        <div className="item  fun"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line tab1">
                        <div className="item min atr"></div>
                        <div className="item lrg fun"></div>
                        <div className="item lrg cont"></div>
                        <div className="item min fun"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line tab1">
                        <div className="item min var"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line tab1">
                        <div className="item min var"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line tab2">
                        <div className="item min var"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line tab2">
                        <div className="item min atr"></div>
                        <div className="item min fun"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line tab3">
                        <div className="item min atr"></div>
                        <div className="item min fun"></div>
                        <div className="item lrg fun"></div>
                        <div className="item lrg cont"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line tab3">
                        <div className="item min atr"></div>
                        <div className="item min fun"></div>
                        <div className="item lrg atr"></div>
                        <div className="item lrg cont"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line tab4">
                        <div className="item min fun"></div>
                        <div className="item lrg atr"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line tab1">
                        <div className="item atr"></div>
                        <div className="item var"></div>
                        <div className="item cont"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line tab3">
                        <div className="item min var"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line tab4">
                        <div className="item min atr"></div>
                        <div className="item min fun"></div>
                        <div className="item lrg atr"></div>
                        <div className="item lrg cont"></div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line">
                        <div className="item min var"></div>
                        <div className="clearfix"></div>
                    </div>
                    </div>
                    </div>
                    <div className="base">
                    <img 
                        src={laptop} 
                        className={isDay ? "keyboard" : "keyboard night"}
                    />
                </div>
            </div>
        </div>
  )
}

export default Laptop