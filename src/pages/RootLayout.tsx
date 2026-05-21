import { Navigate, useNavigate } from "react-router-dom";
import './_RootLayout.scss';
import { Outlet, useOutlet } from 'react-router-dom'
import FeaturedCard from "../_components/card/FeaturedCard";
import { RiTimerFlashLine } from "react-icons/ri";
import Card from "../_components/card/Card";
import { Footer } from "../_components/footer/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import { useState } from "react";
import HeroSection from "../_components/hero/HeroSection";
import { ErrorHook } from "./ErrorHook";
import { IoClose } from "react-icons/io5";
import type { IconType } from "react-icons";

type HookData = {
    hookName: string;
    shortDescription: string;
    description: string;
    parameters: {
        headers: string[]
        rows: string[][]
    },
    returnValues: {
        headers: string[]
        rows: string[][]
    },
    example: {
        code: string,
        language: string
    },
    label?: string | undefined;
    labelColor?: string;
    icon?: IconType
}
const RootLayout = () => {
    const outlet = useOutlet();
    const navigate = useNavigate();
    const { hookname } = useParams();
    const allHook: HookData[] = useSelector((state: any) => state.hooks);
    let hook = allHook.find((item) => item.hookName == hookname)
    const [sideMenu, setSideMenu] = useState(false);
    const comingHooks: string[] = ["useState", "useEffect", "useRef", "useInterval"];

    return (
        <>
            <div className='main-container'>
                <span className="side-menu-open-icon">
                    {!sideMenu ? <MdOutlineMenu onClick={() => {
                        setSideMenu(true);
                    }} /> : <MdMenuOpen onClick={() => {
                        setSideMenu(false);
                    }} />}
                </span>

                <article className={`${sideMenu ? "open" : null}`}>
                    <div className="aside-logo">
                        <div className="aside-logo-mark">uh</div>
                        <span className="aside-logo-text">useHooks</span>
                        <span>{sideMenu && <IoClose onClick={() => {
                            setSideMenu(false);
                        }} />}</span>
                    </div>
                    <section>
                        <h3>All Hooks</h3>
                        {allHook.map((item: any) => {
                            return (
                                <div className='hook-item' key={item?.hookName} onClick={() => {
                                    navigate(`/react-power-house/hooks/${item?.hookName}`)
                                }}>
                                    <span className='dot'></span>
                                    <span>{item?.hookName}</span>
                                </div>
                            )
                        })
                        }
                    </section>
                    <section>
                        <h3>Resources</h3>
                        <div className='hook-item active'>
                            <span className='dot'></span>
                            <span>github</span>
                        </div>
                    </section>


                </article>
                {outlet && hook && <Outlet context={{ hookData: hook }} />}
                {outlet && !hook && comingHooks.some((item) => item == hookname) && <main><HeroSection /><ErrorHook hookName={hookname} /></main>}
                {outlet && !hook && !comingHooks.some((item) => item == hookname) && <Navigate to="/hooks/hook-not-found" />}
                {!outlet && <main>
                    <HeroSection />
                    <div className="hooks-table">
                        <div className="hooks-table-wrapper">
                            <div>
                                <h2>5+</h2>
                                <p>Hooks available</p>
                            </div>
                            <div>
                                <h2>0</h2>
                                <p>Dependencies</p>
                            </div>
                            <div>
                                <h2>16.8+</h2>
                                <p>React version</p>
                            </div>
                            <div>
                                <h2>100%</h2>
                                <p>TypeScript ready</p>
                            </div>
                        </div>
                    </div>
                    {/* Search Box */}
                    <div className="search-hooks">
                        <input type="text" placeholder="Search hooks by name or description..." />
                        {/* SVG Search Icon */}
                    </div>
                    {/* <div className="filter-hooks">
                    
                </div> */}
                    <div className="featured-hooks-card">
                        <h3>Featured</h3>
                        <div className="cards">
                            {
                                allHook.slice(allHook.length - 2).map((item) => {
                                    return (<FeaturedCard type={{ "label": item.label!, "className": item.labelColor }} icon={RiTimerFlashLine} title={item.hookName} shortDescription={item.shortDescription} link={"hooks/" + item.hookName} />)
                                })
                            }
                            {/* <FeaturedCard type={{ "label": "useDebounce", "className": "red" }} icon={RiTimerFlashLine} title="useDebounce" shortDescription="...." link="error" />
                            <FeaturedCard type={{ "label": "useDebounce", "className": "green" }} icon={RiTimerFlashLine} title="useDebounce" shortDescription="...." link="error" /> */}
                        </div>
                    </div>
                    <div className="all-hooks-card">
                        <h3>All Hooks</h3>
                        <div className="cards">
                            {
                                allHook.slice(0, 4).map((item) => {
                                    return (<Card type={{ "label": item.label!, "className": item.labelColor! }} icon={RiTimerFlashLine} title={item.hookName} shortDescription={item.shortDescription} link={"hooks/" + item.hookName} />)
                                })
                            }
                            {/* <Card type={{ "label": "useDebounce", "className": "green" }} icon={RiTimerFlashLine} title="useDebounce" shortDescription="...." link="error" />
                            <Card type={{ "label": "useDebounce", "className": "red" }} icon={RiTimerFlashLine} title="useDebounce" shortDescription="...." link="error" /> */}
                        </div>
                    </div>

                </main>}

            </div>
            <Footer />
        </>
    )
}

export default RootLayout;