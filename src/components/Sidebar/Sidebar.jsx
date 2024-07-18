import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";
import { Context } from "../../context/Context.jsx";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <>
      <div className="min-h-[100vh] sidebar p-[25px 15px] inline-flex flex-col justify-between bg-gray-200">
        <div className="m-3">
          <img
            onClick={() => setExtended((prev) => !prev)}
            className="block ml-2.5 mt-3 cursor-pointer"
            src={assets.menu_icon}
            width={20}
            alt="logo"
          />
          <div
            onClick={() => newChat()}
            className="m-3 ml-0 mr-[0px] mt-16 text-[14px] flex items-center gap-3 justify-start p-2 pl-3 pr-3 text-gray-500 rounded-[50px] bg-gray-300 cursor-pointer w-fit"
          >
            <img src={assets.plus_icon} width={15} alt="logo" />
            {extended ? <p>New Chat</p> : null}
          </div>
          {extended ? (
            <div className="flex-col recent w-64 mt-6 text-[14px] flex">
              <p className="ml-3">Recent</p>
              {prevPrompts.map((item, index) => {
                return (
                  <div
                    onClick={() => loadPrompt(item)}
                    key={index}
                    className="hover-cont mt-2 text-[14px] flex items-center gap-3 justify-start p-2 pl-3 rounded-[50px] bg-gray-000 cursor-pointer"
                  >
                    <img src={assets.message_icon} width={20} alt="logo" />
                    <p className="">{item.slice(0, 30)} ...</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="flex-col mb-10 mt-6 mr-0 flex">
          <div className="hover-cont ml-3 mr-3 text-[14px] flex items-center gap-3 justify-start p-2 pl-2.5 rounded-[50px] bg-gray-000 cursor-pointer">
            <img src={assets.question_icon} width={20} alt="logo" />
            {extended ? <p>Help</p> : null}
          </div>
          <div className="hover-cont ml-3 mr-3 text-[14px] flex items-center gap-3 justify-start p-2 pl-2.5 rounded-[50px] bg-gray-000 cursor-pointer">
            <img src={assets.history_icon} width={20} alt="logo" />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="hover-cont ml-3 mr-3 text-[14px] flex items-center gap-3 justify-start p-2 pl-2.5 rounded-[50px] bg-gray-000 cursor-pointer">
            <img src={assets.setting_icon} width={20} alt="logo" />
            {extended ? <p>Settings</p> : null}
          </div>
          {extended ? (
            <div className="flex-col ml-[30px] w-56 mt-6 mr-0 flex text-[11px]">
              <li className="list-outside list-disc">Tamil Nadu, India</li>
              <p className="text-blue-400 ml-4 flex-wrap">
                Based on your places (home) • Update location
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
