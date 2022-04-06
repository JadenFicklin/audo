import React, { useState } from "react";
import { GiHummingbird } from "react-icons/gi";
import { GiComputerFan } from "react-icons/gi";
import { GiCampfire } from "react-icons/gi";
import { BsCloudRainHeavyFill } from "react-icons/bs";
import { BsCloudRainFill } from "react-icons/bs";
import { GiVines } from "react-icons/gi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { BiWater } from "react-icons/bi";
import { GiSandstorm } from "react-icons/gi";
import { BsTreeFill } from "react-icons/bs";

function Home() {
  const [backgrounds, setBackgrounds] = useState(true);
  const [mainBackground, setMainBackground] = useState(8);

  return (
    <div className="outer">
      {mainBackground === 1 && <div className="pic1 main"></div>}
      {mainBackground === 2 && <div className="pic2 main"></div>}
      {mainBackground === 3 && <div className="pic3 main"></div>}
      {mainBackground === 4 && <div className="pic4 main"></div>}
      {mainBackground === 5 && <div className="pic5 main"></div>}
      {mainBackground === 6 && <div className="pic6 main"></div>}
      {mainBackground === 7 && <div className="pic7 main"></div>}
      {mainBackground === 8 && <div className="pic8 main"></div>}
      {mainBackground === 9 && <div className="pic9 main"></div>}
      {mainBackground === 10 && <div className="pic10 main"></div>}
      {mainBackground === 11 && <div className="pic11 main"></div>}
      {mainBackground === 12 && <div className="pic12 main"></div>}
      <div className="outer-shade">
        <div className="audo-header">AUDO</div>
        <div className="audo-sub-header">
          Combine your favorite ambient sounds
        </div>
        <div className="play-button-outer">
          <div className="play-button"></div>
        </div>
        <div className="add-margin"></div>
        {backgrounds ? (
          <div className="sounds-outer">
            <div className="sounds-inner">
              <div className="icons-holder bird">
                <GiHummingbird className="icons" />
                <div className="icons-name">Birds</div>
              </div>
              <div className="icons-holder fan">
                <GiComputerFan className="icons" />
                <div className="icons-name">Fan</div>
              </div>
              <div className="icons-holder fireplace">
                <GiCampfire className="icons" />
                <div className="icons-name">Fireplace</div>
              </div>
              <div className="icons-holder rain">
                <BsCloudRainFill className="icons" />
                <div className="icons-name">Rain</div>
              </div>
              <div className="icons-holder heavy-rain">
                <BsCloudRainHeavyFill className="icons" />
                <div className="icons-name">Heavy Rain</div>
              </div>
              <div className="icons-holder jungle">
                <GiVines className="icons" />
                <div className="icons-name">Jungle</div>
              </div>
              <div className="icons-holder ocean">
                <FaUmbrellaBeach className="icons" />
                <div className="icons-name">Ocean</div>
              </div>
              <div className="icons-holder river">
                <BiWater className="icons" />
                <div className="icons-name">River</div>
              </div>
              <div className="icons-holder sand">
                <GiSandstorm className="icons" />
                <div className="icons-name">Sand</div>
              </div>
              <div className="icons-holder trees">
                <BsTreeFill className="icons" />
                <div className="icons-name">Trees</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="object-outer">
            <div className="object-inner">
              <div
                className="pic pic1"
                onClick={() => setMainBackground(1)}
              ></div>
              <div
                className="pic pic2"
                onClick={() => setMainBackground(2)}
              ></div>
              <div
                className="pic pic3"
                onClick={() => setMainBackground(3)}
              ></div>
              <div
                className="pic pic4"
                onClick={() => setMainBackground(4)}
              ></div>
              <div
                className="pic pic5"
                onClick={() => setMainBackground(5)}
              ></div>
              <div
                className="pic pic6"
                onClick={() => setMainBackground(6)}
              ></div>
              <div
                className="pic pic7"
                onClick={() => setMainBackground(7)}
              ></div>
              <div
                className="pic pic8"
                onClick={() => setMainBackground(8)}
              ></div>
              <div
                className="pic pic9"
                onClick={() => setMainBackground(9)}
              ></div>
              <div
                className="pic pic10"
                onClick={() => setMainBackground(10)}
              ></div>
              <div
                className="pic pic11"
                onClick={() => setMainBackground(11)}
              ></div>
              <div
                className="pic pic12"
                onClick={() => setMainBackground(12)}
              ></div>
            </div>
          </div>
        )}
        <button
          onClick={() => setBackgrounds(!backgrounds)}
          className="more-backgrounds"
        >
          {backgrounds ? <div>Backgrounds</div> : <div>Sounds</div>}
        </button>
      </div>
    </div>
  );
}

export default Home;
