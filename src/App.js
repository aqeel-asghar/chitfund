import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import CardSection from "./components/CardSection";
import onesvg from "./Assets/5_24x7support.svg";
import twosvg from "./Assets/6_fullycomplaint.svg";
import threesvg from "./Assets/7_everyone.svg";
import { Web3Provider } from "./components/web3Context";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center w-[80%]">
          <CardSection />
        </div>{" "}
        <div className="py-5 bg-[#f4faff;] w-full">
          <div className="text-center pt-4">
            <span id="mypaisaa-my">
              Chit
              <span id="mypaisaa-paisaa">Fund Advantage</span>
            </span>
          </div>
          <div className="text-center pb-4 ">
            <p id="mypaisaa-advantage">
              Our digital savings app offers you a superior experience through
              quick and easy payouts,
              <br />
              transparent transactions and customer-first processes.
            </p>
          </div>
          <div
            className="w-[80%]"
            id="advantage-section-web2"
            class="flex flex-row gap-20 justify-center items-center"
          >
            <div class="">
              <div class="text-center">
                <img id="advantage-shadow" src={onesvg} />
              </div>
              <div class="box-content" id="dilip-story-texts">
                <p>
                  <span class="text-[#f15825] font-bold">24/7 </span>
                  customer <br />
                  support
                </p>
              </div>
            </div>

            <div class="">
              <div class="text-center">
                <img id="advantage-shadow" src={twosvg} />
              </div>
              <div class="box-content" id="dilip-story-texts">
                <p>
                  <span class="text-[#f15825] font-bold">
                    {" "}
                    Fully Compliant{" "}
                  </span>
                  as <br></br>
                  per chit act
                </p>
              </div>
            </div>
            <div class="">
              <div class="text-center">
                <img id="advantage-shadow" src={threesvg} />
              </div>
              <div class="box-content" id="dilip-story-texts">
                <p>
                  {" "}
                  Chit Plans for <br></br>
                  <span class="text-[#f15825] font-bold">everyone </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
