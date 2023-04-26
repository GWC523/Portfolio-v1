import React, {useState} from 'react';

/* CSS */
import './LaptopMobile.scss';

function LaptopMobile() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
    <div className="wrap-2">
		<div className="comp-2" onClick={() => setIsClicked(!isClicked)}>
			<div className="monitor-2">
				<div className="mid-2">
					<div className="site-2">
						<div className="topbar-2">
							<div className="cerrar-2">
								<div className="circl-2"></div>
								<div className="circl-2"></div>
								<div className="circl-2"></div>
							</div>
						</div>
						<div className="inhead-2">
                            <span className='site-name'><div>{isClicked ? "Software Developer" : "Gwyneth Chiu"}</div></span>
							<div className="mid-2">
								<div className="item-2-2"></div>
							</div>
							<div className="mid txr-2">
								<div className="item-2-2"></div>
								<div className="item-2-2"></div>
								<div className="item-2-2"></div>
								<div className="item-2-2"></div>
							</div>
						</div>
						<div className="inslid-2">
							
						</div>
						<div className="incont-2">
							<div className="item-2-2"></div>
							<div className="item-2-2"></div>
							<div className="item-2-2"></div>
							<div className="item-2-2"></div>
							<div className="wid-2">
								<div className="itwid-2">
									<div>
										<div className="contfoot-2"></div>
									</div>
								</div>
								<div className="itwid-2">
									<div>
										<div className="contfoot-2"></div>
									</div>
								</div>
								<div className="itwid-2">
									<div>
										<div className="contfoot-2"></div>
									</div>
								</div>
								<div className="clearfix-2"></div>
							</div>
							<div className="infoot-2">
								
							</div>
						</div>
					</div>
				</div>
				<div className="mid-2 codigo-2">
					<div className="line-2">
						<div className="item-2-2 var-2"></div>
						<div className="item-2-2 cont-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2">
						<div className="item-2-2 min-2 var-2"></div>
						<div className="item-2-2 min-2 fun-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2">
						<div className="item-2 min-2 var-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2">
						<div className="item-2 var-2"></div>
						<div className="item-2 atr-2"></div>
						<div className="item-2 cont-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2 tab1-2">
						<div className="item-2 min-2 atr-2"></div>
						<div className="item-2 lrg-2 fun-2"></div>
						<div className="item-2 min-2 fun-2"></div>
						<div className="item-2 lrg-2 cont-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2 tab1-2">
						<div className="item-2 lrg-2 atr-2"></div>
						<div className="item-2 min-2 fun-2"></div>
						<div className="item-2 min-2 cont-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2 tab1-2">
						<div className="item-2 atr-2"></div>
						<div className="item-2 min-2 fun-2"></div>
						<div className="item-2 atr-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2 tab1-2">
						<div className="item-2 min-2 atr-2"></div>
						<div className="item-2 min-2 cont-2"></div>
						<div className="item-2 lrg-2 atr-2"></div>
						<div className="item-2  fun-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2 tab1-2">
						<div className="item-2 min-2 atr-2"></div>
						<div className="item-2 lrg-2 fun-2"></div>
						<div className="item-2 lrg-2 cont-2"></div>
						<div className="item-2 min-2 fun-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2 tab1-2">
						<div className="item-2 min-2 var-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2 tab1-2">
						<div className="item-2 min-2 var-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2 tab2-2">
						<div className="item-2 min-2 var-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2 tab2-2">
						<div className="item-2 min-2 atr-2"></div>
						<div className="item-2 min-2 fun-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2 tab3-2">
						<div className="item-2 min-2 atr-2"></div>
						<div className="item-2 min-2 fun-2"></div>
						<div className="item-2 lrg-2 fun-2"></div>
						<div className="item-2 lrg-2 cont-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2 tab3-2">
						<div className="item-2 min-2 atr-2"></div>
						<div className="item-2 min-2 fun-2"></div>
						<div className="item-2 lrg-2 atr-2"></div>
						<div className="item-2 lrg-2 cont-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2 tab4-2">
						<div className="item-2 min-2 fun-2"></div>
						<div className="item-2 lrg-2 atr-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2 tab1-2">
						<div className="item-2 atr-2"></div>
						<div className="item-2 var-2"></div>
						<div className="item-2 cont-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2 tab3-2">
						<div className="item-2 min-2 var-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2 tab4-2">
						<div className="item-2 min-2 atr-2"></div>
						<div className="item-2 min-2 fun-2"></div>
						<div className="item-2 lrg-2 atr-2"></div>
						<div className="item-2 lrg-2 cont-2"></div>
						<div className="clearfix-2"></div>
					</div>
					<div className="line-2">
						<div className="item-2 min-2 var-2"></div>
						<div className="clearfix-2"></div>
					</div>
					
				</div>
			</div>
			<div className="base-2">
				
			</div>
		</div>
	</div>
    </>
  )
}

export default LaptopMobile