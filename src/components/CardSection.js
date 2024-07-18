import React from "react";
import cardimae from "../Assets/4_dividends.svg";
const CardSection = () => {
  return (
    <div>
      <h2 className="text-[#f15a24] text-center font-bold py-4 text-[32px]">
        Latest Chit Plans on Offer
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-3 py-4 gap-4">
        {/* Card 1 */}
        <div className=" cardstyle flex flex-col justify-center items-center">
          <img className="my-4" src={cardimae} alt="Card 1" />
          <div id="chit-plan-card-style">
            <h4 class="card-title text-center" id="font-32">
              100 USD Chit Plan
            </h4>
            <div class="text-center my-4">
              <a href="mega-save.html" class="btn-view">
                Become a member
              </a>
            </div>
          </div>
        </div>

        <div className=" cardstyle flex flex-col justify-center items-center">
          <img className="my-4" src={cardimae} alt="Card 1" />
          <div id="chit-plan-card-style">
            <h4 class="card-title text-center" id="font-32">
              1000 USD Chit Plan
            </h4>
            <div class="text-center my-4">
              <a href="mega-save.html" class="btn-view">
                Become a member
              </a>
            </div>
          </div>
        </div>
        <div className=" cardstyle flex flex-col justify-center items-center">
          <img className="my-4" src={cardimae} alt="Card 1" />
          <div id="chit-plan-card-style">
            <h4 class="card-title text-center" id="font-32">
              500 USD Chit Plan
            </h4>
            <div class="text-center my-4">
              <a href="mega-save.html" class="btn-view">
                Become a member
              </a>
            </div>
          </div>
        </div>
        {/* Repeat for Card 2 and Card 3 */}
      </div>
    </div>
  );
};

export default CardSection;
