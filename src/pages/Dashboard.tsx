import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "react-feather";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

type ItemProps = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type DashboardProps = {
  itemsArray: ItemProps[];
};

const Dashboard = ({ itemsArray }: DashboardProps) => {
  const [activeItem, setActiveItem] = useState<ItemProps | null>(null);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [loaded, setLoaded] = useState(false);

  const rotationMap = {
    0: "rotate-[-8deg] mt-12",
    1: "rotate-[-4deg] mt-2",
    2: "rotate-[0deg]",
    3: "rotate-[4deg] mt-2",
    4: "rotate-[8deg] mt-12",
  };

  return (
    <section>
      <section className="mb-10">
        <div className="flex items-start justify-center gap-32 mb-3 px-18">
          {itemsArray.map((item, indx) => (
            <Link
              onMouseEnter={() => {
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                  timeoutRef.current = null;
                }
                setActiveItem(item);
                setShowInfo(true);
              }}
              onMouseLeave={() => {
                setShowInfo(false);
                timeoutRef.current = setTimeout(() => {
                  setActiveItem(null);
                }, 300);
              }}
              to={`/project/${item.id}`}
              key={item.id}
              className={
                rotationMap[indx] +
                " shadow-[0px_8px_5px_0px_rgba(0,0,0,0.75)] hover:scale-[1.1] hover:contrast-[1.15] hover:saturate-[1.15]  transition-all duration-300" +
                (activeItem && activeItem.id !== item.id && showInfo
                  ? " grayscale-100"
                  : "")
              }
            >
              <ImageWithSkeleton src={item.image} alt={item.title} />
            </Link>
          ))}
        </div>
        <div
          className={
            "flex justify-center relative transation-all duration-300 " +
            (showInfo ? "opacity-100" : "opacity-0")
          }
        >
          <div className="absolute w-[calc(100%+80px)] h-[calc(100%+30px)] top-[-15px] left-[-40px]"></div>
          <div className="flex flex-col items-center transition-all duration-300 z-[2]">
            <div className="flex items-end mb-6">
              <div className="flex flex-col items-center rotate-[-46deg]">
                <div className="w-[60px] h-1 bg-primary rounded-[2px] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.75)] mb-3"></div>
                <div className="w-[25px] h-1 bg-primary rounded-[2px] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.75)]"></div>
              </div>
              <h3 className="text-center mb-0 mx-5 text-[26px] text-white relative top-[15px] text-shadow-[0px_1px_5px_rgb(0,0,0)]">
                {activeItem?.title ?? "N/A"}
              </h3>
              <div className="flex flex-col items-center rotate-[46deg]">
                <div className="w-[60px] h-1 bg-primary rounded-[2px] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.75)] mb-3"></div>
                <div className="w-[25px] h-1 bg-primary rounded-[2px] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.75)]"></div>
              </div>
            </div>
            <p className="text-center font-light text-[20px] text-white mb-0 text-shadow-[0px_1px_5px_rgb(0,0,0)]">
              {activeItem?.description ?? "N/A"}
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-end w-[80px] h-8 bg-[linear-gradient(to_right,rgba(var(--primary-rgb),0)_0%,rgba(var(--primary-rgb),0.5)_20%,rgba(var(--primary-rgb),1)_70%,rgba(var(--primary-rgb),1)_100%)]">
            <a
              href="https://www.instagram.com/ahmad.ch97?igsh=MW96ajQzcHM5OXdkYQ=="
              target="blank"
              className="hover:scale-[1.1] transition-all duration-300"
            >
              <Instagram className="text-black me-5" />
            </a>
          </div>
          <img
            className="w-28 h-28 rounded-full object-cover object-center border-3 -mx-1 z-[2] border-gray-500"
            src="/assets/images/personal/profile-pic.jpg"
          />
          <div className="flex items-center justify-start w-[80px] h-8 bg-[linear-gradient(to_left,rgba(var(--primary-rgb),0)_0%,rgba(var(--primary-rgb),0.5)_20%,rgba(var(--primary-rgb),1)_70%,rgba(var(--primary-rgb),1)_100%)]">
            <a
              href="https://www.linkedin.com/in/ahmad-chabayta-53a041111?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="blank"
              className="hover:scale-[1.1] transition-all duration-300"
            >
              <Linkedin className="text-black ms-5" />
            </a>
          </div>
        </div>
        <h5 className="text-center text-white text-[20px] mt-2">
          Ahmad Chabayta
        </h5>
        <p className="text-center text-white text-[18px]">
          Designer - Engineer
        </p>
      </section>
    </section>
  );
};

export default Dashboard;
