import "./Main.css";
import { assets } from "../../assets/assets.js";
import { useContext } from "react";
import { Context } from "../../context/Context.jsx";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative">
      <div className="flex items-center justify-between mt-4 text-[22px] pl-5 pr-5 text-gray-500">
        <p className="">Tommy</p>
        <img
          className="w-10 border-spacing-1 border-2 border-gray-300 rounded-full"
          src={assets.user_icon}
          alt=""
        />
      </div>
      <div className="max-w-[920px] mx-auto mt-4">
        {!showResult ? (
          <>
            <div className="m-[50px 0px] text-[56px] leading-none text-gray-300 font-bold p-10">
              <p>
                <span className="linear_Color font-medium">Hello, TOM.</span>
              </p>
              <p className="font-medium mt-1">How can I help you today?</p>
            </div>
            <div className="Cards p-10 gap-[15px] m-0 flex flex-row items-center">
              <div className="Card w-[250px]">
                <p className="text-gray-500 text-[16px]">
                  Help me write a refund email for a product that&apos;s damaged
                </p>
                <img
                  className="w-10 border-spacing-1 border-2 border-gray-300 rounded-full"
                  src={assets.compass_icon}
                  alt=""
                />
              </div>
              <div className="Card">
                <p className="text-gray-500 text-[16px]">
                  Evaluate and rank common camera categories
                </p>
                <img
                  className="w-10 border-spacing-1 border-2 border-gray-300 rounded-full"
                  src={assets.bulb_icon}
                  alt=""
                />
              </div>
              <div className="Card">
                <p className="text-gray-500 text-[16px]">
                  Find youtube videos with inspiring best man speeches
                </p>
                <img
                  className="w-10 border-spacing-1 border-2 border-gray-300 rounded-full"
                  src={assets.message_icon}
                  alt=""
                />
              </div>
              <div className="Card">
                <p className="text-gray-500 text-[16px]">
                  Give me phrases to learn a new language
                </p>
                <img
                  className="w-10 border-spacing-1 border-2 border-gray-300 rounded-full"
                  src={assets.code_icon}
                  alt=""
                />
              </div>
            </div>
          </>
        ) : (
          <div className="scroll-bar scroll-smooth mt-0 mr-20 ml-20 pl-3 pr-10 items-center max-h-[70vh] overflow-y-scroll">
            <div className="m-[40px 0px] mt-6 flex items-center gap-5">
              <img
                className="border-spacing-1 border-gray-300 border-2 rounded-full w-10"
                src={assets.user_icon}
                alt=""
              />
              <p className="m-[40px 0px] text-black text-[17px] flex items-center gap-10">
                {recentPrompt}
              </p>
            </div>
            <div className="flex mt-14 items-start gap-5">
              <div className="rounded-full w-10">
                <img
                  className="rounded-full w-8"
                  src={assets.lightning}
                  alt=""
                />
                <img
                  className="rounded-full absolute ml-5 mt-[-11px] w-3"
                  src={assets.lightning}
                  alt=""
                />
              </div>
              {loading ? (
                <div className="loader w-full flex mt-2.5 flex-col gap-5">
                  <hr className="max-w-[800px]" />
                  <hr className="max-w-[600px]" />
                  <hr className="max-w-[300px]" />
                </div>
              ) : (
                <p
                  className="text-gray-800 w-full pt-1 text-[16px]"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom absolute bottom-2 w-[100%] max-w-[900px] p-[0px 20px] m-auto">
          <div className="flex items-center justify-between ml-[40px] mr-[30px] bg-[#f0f4f9] p-[10px 20px] rounded-[50px]">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Type your Prompt here..."
              className="flex-1 text-[16px] bg-transparent border-none outline-none p-5 pr-6 pl-6"
            />
            <div className="Search_Icons flex items-center gap-0 mr-3 justify-evenly">
              <img
                src={assets.gallery_icon}
                className="hover:bg-gray-300 w-12 p-3 rounded-full cursor-pointer"
                alt=""
              />
              <img
                src={assets.mic_icon}
                className="hover:bg-gray-300 w-12 p-3 rounded-full cursor-pointer"
                alt=""
              />
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  className="hover:bg-gray-300 w-12 p-3 rounded-full cursor-pointer"
                  alt=""
                />
              ) : null}
            </div>
          </div>
          <p className="text-[13px] mt-2 text-center text-gray-900">
            Tommy may display inaccurate info, including about people, so
            double-check its responses.{" "}
            <u className="cursor-pointer">Your privacy and Tommy Apps</u>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
