import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutYkm extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "award": <Award />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
            "refer-mtm": <ReferMTM />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about ykm" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ykm' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="award" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "award" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ykm' education" src="./themes/Yaru/status/award-svgrepo-com.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Award</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ykm' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ykm' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ykm's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
                <div id="refer-mtm" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "refer-mtm" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ykm's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Recommendation letter</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutYkm;

export const displayAboutYkm = () => {
    return <AboutYkm />;
}


function About() {
    return (
        <>
            <div className="w-80 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/ykm.png" alt="ykm Patel Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Yan Kyaw Min</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">FullStack Engineer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 mb-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I’m a developer experienced in building websites for small and medium-sized businesses, 
                and now I'm looking for full-time fullstack engineer roles! ( Hit me up <a className='text-underline' href='mailto:yankyawmin.ykm@gmail.com'><u>@yankyawmin.ykm@gmail.com</u></a>  &#128515; )</li>
                <li className=" mt-3 list-building"> I enjoy building awesome softwares that solve practical problems.</li>
                <li className=" mt-3 list-time"> When I am not coding my next project, I like to spend my time reading books, swimming, playing gym and mlbb game.</li>
                <li className=" mt-3 list-star"> And I also have interest in Deep Learning & New Techniques!</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc mb-4">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Mahachulalongkornrajavidyalaya University (Thailand)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2024 - present</div>
                    <div className=" text-sm md:text-base">Thai Language for International Communication</div>
                </li>
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Government Technological College (Myanmar)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2013 - 2018</div>
                    <div className=" text-sm md:text-base"> Bachelor of Engineering (Electronics)</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">GPA &nbsp; 4.88/5.0</div>
                </li>
            </ul>
        </>
    )
}

function Award() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Award
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        2023 Japan International Cooperation Agency (JICA)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">1 week of 2023 Dec</div>
                    <div className=" mt-1 text-sm md:text-base flex">
                        <img className="w-4 md:w-5" src="./themes/Yaru/status/medal.png" alt="1st winner award" />
                        <p>1st Winner Team</p>
                    </div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">web development, Javascript, NodeJs and PHP!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks/Libraries & Cloud</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="ykm javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white" alt="ykm c++" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-000000?style=flat&logo=python&logoColor=ffffff" alt="ykm python" />
                        <img className="m-1" src="https://img.shields.io/badge/Json-0175C2?style=flat&logo=json&logoColor=white" alt="ykm dart" />
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="ykm HTML" /></a>
                        <img src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff" alt="ykm SASS" className="m-1" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="ykm git" className="m-1" />
                        <img src="https://img.shields.io/badge/-Redis-FF4438?style=flat&logo=redis&logoColor=ffffff" alt="ykm redis" className="m-1" />
                        <img src="https://img.shields.io/badge/-Mysql-4479A1?style=flat&logo=mysql&logoColor=ffffff" alt="ykm mysql" className="m-1" />
                        <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=ffffff" alt="ykm mongodb" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff" alt="ykm next" />
                        <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="ykm react" />
                        <img className="m-1" src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white" alt="ykm redux" />
                        <img className="m-1" src="https://img.shields.io/badge/-Vue-4FC08D?style=flat&logo=vuedotjs&logoColor=white" alt="ykm Vuejs" />
                        <img className="m-1" src="https://img.shields.io/badge/-Nuxt-00DC82?style=flat&logo=nuxtdotjs&logoColor=white" alt="ykm Nuxtjs" />
                        <img className="m-1" src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=typescript&logoColor=white" alt="ykm typescript" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="ykm tailwind css" />
                        <img className="m-1" src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white" alt="ykm bootstrap" />
                        <img className="m-1" src="https://img.shields.io/badge/Laravel-FF2D20?style=flat&logo=laravel&logoColor=white" alt="ykm laravel" />
                        <img className="m-1" src="https://img.shields.io/badge/Filament-blue.svg?logo=data:image/svg%2bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9ImthdG1hbl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTE5MC42IDg0MS45IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMTkwLjYgODQxLjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMDEwMjAyO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyMi45LDUxOS41YzItOS42LDQtMTguOSw1LjgtMjcuOGMxLjUtNy41LDMuMy0xNS43LDUuMi0yNC44bDEuMi01LjVsOS41LTQ1LjdoMzYuMmw2LjQtMzAuM2gtMzcuOQoJYzAuMy0xLjMsMC43LTMuMywxLjItNmMwLjUtMi42LDEtNC45LDEuMy02LjdjMS40LTYuOSw0LTEyLjEsNy43LTE1LjVjMy43LTMuNSw4LjgtNS4yLDE1LjQtNS4yYzMuNywwLDcuNCwwLjQsMTEsMS4zCgljMy42LDAuOSw3LjEsMi4yLDEwLjMsMy44bDkuNS0zMi4zYy0yLjgtMS4zLTYuMS0yLjQtOS45LTMuM2MtMy44LTAuOS03LjctMS43LTExLjgtMi4yYy00LjEtMC41LTguMy0wLjctMTIuNC0wLjcKCWMtNi41LDAtMTIuOCwwLjgtMTguOCwyLjRjLTYsMS42LTExLjUsNC4yLTE2LjQsNy45Yy00LjksMy43LTkuMiw4LjgtMTIuOSwxNS4xYy0zLjcsNi40LTYuNSwxNC4zLTguNCwyMy44Yy0xLjIsNi0yLjYsMTIuNS00LDE5LjYKCWwwLjQtMi4xSDg5LjRMODMsNDE1LjVoMjJsLTAuMywxLjVjLTAuNiwyLjgtMS4yLDUuNi0xLjcsOC4zbC0wLjksNC4xYy0xLjQsNi44LTIuNywxMi45LTMuOCwxOC41bC0yLjgsMTMuNAoJYy0yLjMsMTEuMS00LjQsMjEuMi02LjMsMzAuMmMtMS45LDktMy44LDE4LjMtNS44LDI3LjlIMTIyLjl6IE0yMzUuNiwzODVsLTMuOCw5LjdsMTcuNywxMi40YzEsMC43LDEuNSwxLjksMS4zLDMuMmwtMC4xLDAuNAoJbC0xLjIsNS41Yy0wLjMsMS40LTEuMywyLjQtMi42LDIuNGwtMTUuNiwxbDEzLjQsOS4zYzEsMC43LDEuNSwxLjksMS4zLDMuMmwtMC4xLDAuNGwtMS4yLDUuNWMtMC4zLDEuNC0xLjMsMi40LTIuNiwyLjRsLTE1LjYsMS4xCglsMTMuNCw5LjNjMSwwLjcsMS41LDEuOSwxLjMsMy4ybC0wLjEsMC40bC0xLjIsNS41Yy0wLjMsMS40LTEuMywyLjQtMi42LDIuNGwtMTUuNiwxLjFsMTMuNCw5LjNjMSwwLjcsMS41LDEuOSwxLjMsMy4ybC0wLjEsMC40CglsLTEuMiw1LjVjLTAuMywxLjQtMS4zLDIuNC0yLjYsMi40bC0xNS42LDEuMWwxMy40LDkuM2MxLDAuNywxLjUsMS45LDEuMywzLjJsLTAuMSwwLjRsLTEuMiw1LjVjLTAuMywxLjQtMS4zLDIuNC0yLjYsMi40CglsLTIxLjksMS45bC0yLjcsMTEuN2gtMTcuNWw1LjQtMjEuNWMwLjMtMS40LDEuMy0yLjQsMi42LTIuNGwxNS42LTEuMWwtMTMuNC05LjNjLTEtMC43LTEuNS0xLjktMS4zLTMuMmwwLjEtMC40bDEuMi01LjUKCWMwLjMtMS40LDEuMy0yLjQsMi42LTIuNGwxNS42LTEuMWwtMTMuNC05LjNjLTEtMC43LTEuNS0xLjktMS4zLTMuMmwwLjEtMC40bDEuMi01LjVjMC4zLTEuNCwxLjMtMi40LDIuNi0yLjRsMTUuNi0xLjFsLTEzLjQtOS4zCgljLTEtMC43LTEuNS0xLjktMS4zLTMuMmwwLjEtMC40bDEuMi01LjVjMC4zLTEuNCwxLjMtMi40LDIuNi0yLjRsMTUuNi0xLjFsLTEzLjQtOS4zYy0xLTAuNy0xLjUtMS45LTEuMy0zLjJsMC4xLTAuNGwxLjItNS41CgljMC4zLTEuNCwxLjMtMi40LDIuNi0yLjRsMTUuNi0xLjFsLTEzLjQtOS4zYy0xLTAuNy0xLjUtMS45LTEuMy0zLjJsMC4xLTAuNGwyLjQtOC43QzIxNi4zLDM4NS44LDIzNS42LDM4NSwyMzUuNiwzODV6IE0yNDksMzE5LjgKCWM3LjIsMCwxMi41LDIuNCwxNS45LDcuM2MzLjUsNC45LDQuNSwxMC43LDMuMSwxNy41Yy0xLjYsNy44LTQuOCwxMy4xLTkuNywxNS44Yy00LjksMi43LTExLDQuMS0xOC4yLDQuMWMtNy4xLDAtMTIuNC0yLjEtMTYtNi40CgljLTMuNi00LjMtNC42LTEwLjMtMy0xOC4yYzEuNS03LjIsNC43LTEyLjMsOS43LTE1LjVDMjM1LjgsMzIxLjQsMjQxLjgsMzE5LjgsMjQ5LDMxOS44eiBNMzAwLjMsNDkxLjdjLTEuOSw5LTMuOCwxOC4yLTUuNywyNy44CglIMjU1YzItOS42LDQtMTguOSw1LjgtMjcuOWMxLjktOSw0LTE5LjEsNi40LTMwLjJsMTUuNC03NC41YzIuNC0xMC45LDQuNy0yMS43LDYuOS0zMi40YzIuMi0xMC43LDQuNC0yMS40LDYuNi0zMi4xbDQwLjItMy41CgljLTIuMiwxMC42LTQuNSwyMS40LTYuOCwzMi42Yy0yLjMsMTEuMi00LjgsMjIuOS03LjMsMzUuM2wtMTUuNSw3NC41QzMwNC4yLDQ3Mi42LDMwMi4xLDQ4Mi43LDMwMC4zLDQ5MS43eiBNNDA0LjcsMzgxLjcKCWMxMi43LDAsMjMuMiwyLjIsMzEuNCw2LjVjOC4yLDQuMywxMy45LDEwLjQsMTcuMSwxOC40YzMuMiw3LjksMy42LDE3LjQsMS4yLDI4LjNjLTAuOSw0LjUtMS44LDktMi44LDEzLjZjLTEsNC42LTIsOS40LTMsMTQuNQoJbC0yLjQsMTEuM2MtMS40LDYuNy0yLjksMTMuOC00LjQsMjEuMmMtMS41LDcuNC0zLjIsMTUuNS01LjEsMjQuMWgtMzQuMmwxLjctMTcuOWgtM2MtMy4zLDQuOC02LjksOC43LTEwLjgsMTEuOAoJYy0zLjksMy4xLTguMiw1LjQtMTIuOCw3Yy00LjYsMS42LTkuNSwyLjQtMTQuOCwyLjRjLTguNCwwLTE1LjQtMi4xLTIxLjEtNi4zYy01LjYtNC4yLTkuNi05LjctMTEuOC0xNi42CgljLTIuMi02LjktMi40LTE0LjQtMC43LTIyLjZjMS4zLTYuMywzLjUtMTEuNSw2LjQtMTUuN2MzLTQuMiw2LjUtNy43LDEwLjctMTAuNGM0LjItMi43LDguOC00LjgsMTMuOS02LjQKCWM1LjEtMS42LDEwLjMtMi44LDE1LjgtMy42bDQxLjQtNi42YzAuOS00LDAuNi03LjYtMS0xMC42Yy0xLjUtMy00LjMtNS4zLTguMy03Yy00LTEuNy05LTIuNS0xNS4yLTIuNWMtMy4yLDAtNi42LDAuMi0xMC4xLDAuNwoJYy0zLjYsMC41LTcuMywxLjItMTEuMiwyLjJjLTMuOSwwLjktNy45LDIuMS0xMiwzLjVjLTQuMSwxLjQtOC4zLDMtMTIuNiw0LjlsNi4yLTM1LjJjMy4yLTEuMSw2LjgtMi4xLDEwLjktMy4yCgljNC4xLTEsOC4zLTIsMTIuOC0yLjljNC41LTAuOSw5LjEtMS42LDEzLjgtMi4yQzM5NS41LDM4MS45LDQwMC4yLDM4MS43LDQwNC43LDM4MS43eiBNNDEyLjYsNDUyLjhjLTEuMiwwLjktMi43LDEuOC00LjUsMi42CgljLTEuOCwwLjktNC4yLDEuNy03LjMsMi42Yy0zLjEsMC45LTcuMywxLjktMTIuNiwzYy0zLjQsMC44LTYuNiwxLjctOS40LDIuOGMtMi44LDEuMS01LjIsMi42LTcsNC42Yy0xLjksMi0zLjEsNC41LTMuNyw3LjcKCWMtMC45LDQuOSwwLDguOCwyLjUsMTEuNWMyLjYsMi43LDYsNC4xLDEwLjUsNC4xYzMuMiwwLDYuNC0wLjcsOS42LTIuMWMzLjItMS40LDYuMy0zLjQsOS4zLTZjMy0yLjYsNS43LTUuNyw4LjEtOS4zCglDNDA4LjEsNDc0LjMsNDEyLjYsNDUyLjgsNDEyLjYsNDUyLjh6IE02MDUuMSw0MDUuNmMtMS40LTYuNy00LjItMTIuMS04LjUtMTYuMWMtNS41LTUuMi0xMy4yLTcuOC0yMy4xLTcuOAoJYy02LjEsMC0xMS45LDEuMS0xNy41LDMuMmMtNS42LDIuMi0xMC44LDUuMS0xNS41LDguOGMtNC43LDMuNy04LjcsNy45LTEyLDEyLjRoLTMuM2wyLjgtMjIuOWwtMzMuNCwyYy0yLjMsMTEuMi00LjUsMjItNi44LDMyLjUKCWMtMi4yLDEwLjQtNC4zLDIwLjUtNi4yLDMwLjJsLTIuOCwxMy40Yy0yLjQsMTEuMS00LjUsMjEuMi02LjQsMzAuMmMtMS45LDktMy44LDE4LjMtNS44LDI3LjloMzkuNmMxLjktOS42LDMuOC0xOC44LDUuNy0yNy43CgljMS45LTguOSwzLjgtMTguMyw2LTI4LjRsNS43LTI3LjhjMi44LTMuMyw1LjctNi4zLDguNS04LjljMi45LTIuNiw1LjktNC43LDktNi4yYzMuMS0xLjUsNi41LTIuMywxMC0yLjNjNi4yLDAsMTAuMSwyLjQsMTEuOCw3LjMKCWMxLjcsNC45LDEuNywxMS40LDAuMSwxOS40bC0zLjgsMTguNmMtMi4xLDEwLTQuMSwxOS41LTUuOCwyOC4yYy0xLjgsOC44LTMuNywxOC01LjcsMjcuN2gzOS41YzItOS42LDQtMTguOSw1LjktMjcuOQoJYzEuOS05LDQtMTkuMSw2LjMtMzAuMmMxLjEtNS4yLDIuMS0xMC4yLDMuMS0xNS4xYzEtNC44LDEuOS05LjEsMi43LTEyLjlsLTAuMiwwLjlsMC4zLTAuM2MxLjktMi4xLDMuOC00LDUuNy01LjhsMS41LTEuMwoJYzIuOS0yLjYsNS45LTQuNyw5LjEtNi4zYzMuMS0xLjYsNi41LTIuNCwxMC0yLjRjNi4yLDAsMTAuMSwyLjQsMTEuOCw3LjNjMS43LDQuOSwxLjcsMTEuNCwwLjEsMTkuNGwtMy44LDE4LjYKCWMtMiwxMC4xLTQsMTkuNi01LjgsMjguM2MtMS44LDguNy0zLjcsMTgtNS44LDI3LjZoMzkuNmMxLjktOS42LDMuOC0xOC45LDUuNy0yNy44YzEuOS05LDQtMTksNi40LTMwLjNjMS4xLTUuMiwyLjEtMTAuMiwzLjEtMTUuMQoJYzEtNC44LDEuOS05LjEsMi43LTEyLjljMy40LTE1LjcsMi4zLTI4LjItMy4yLTM3LjdjLTUuNS05LjQtMTUtMTQuMS0yOC41LTE0LjFjLTYuMSwwLTEyLDEuMS0xNy42LDMuM2MtNS42LDIuMi0xMC45LDUuMi0xNS43LDguOQoJYy00LjgsMy44LTguOSw4LTEyLjQsMTIuOGgtMi45TDYwNS4xLDQwNS42TDYwNS4xLDQwNS42eiBNNzc2LjIsMzgxLjdjMTMuOSwwLDI1LjIsMi42LDMzLjksNy43YzguNyw1LjEsMTQuNywxMi4zLDE3LjcsMjEuNQoJYzMuMSw5LjIsMy4xLDIwLDAuMSwzMi4zYy0wLjcsMy0xLjQsNS43LTIuMiw4LjNjLTAuNiwxLjktMS4yLDMuOC0xLjgsNS43bC0wLjYsMS44aC04MS4xbDAsMC41Yy0wLjIsNS4xLDAuNiw5LjYsMi4yLDEzLjQKCWMyLjUsNS43LDYuNywxMCwxMi41LDEyLjhjNS44LDIuOCwxMyw0LjIsMjEuNCw0LjJjMy43LDAsNy44LTAuMywxMi40LTFjNC41LTAuNyw5LjEtMS43LDEzLjYtMy4xYzQuNS0xLjQsOC42LTMuMiwxMi40LTUuMwoJbC01LjMsMzQuMmMtMi40LDEuNC01LjYsMi44LTkuOCw0Yy00LjEsMS4zLTguOSwyLjMtMTQuNCwzLjFjLTUuNCwwLjgtMTEuMywxLjItMTcuNSwxLjJjLTE1LjksMC0yOS4xLTMuMS0zOS44LTkuMwoJYy0xMC42LTYuMi0xOC4xLTE1LjEtMjIuNS0yNi42Yy00LjQtMTEuNS01LTI1LjEtMS44LTQwLjljMi42LTEzLDcuMS0yNC4zLDEzLjUtMzRjNi40LTkuNywxNC4zLTE3LjIsMjQtMjIuNQoJQzc1Mi45LDM4NC4zLDc2My45LDM4MS43LDc3Ni4yLDM4MS43eiBNNzc3LDQxMGMtNC41LDAtOC45LDEuMi0xMy4yLDMuNmMtNC4zLDIuNC04LjEsNi4yLTExLjUsMTEuM2MtMiwzLjEtMy43LDYuNy01LjIsMTAuOAoJbC0wLjQsMS4ybDQ3LjgtMWwwLjItMS4yYzAuNy01LjktMC4yLTExLjItMi42LTE1LjlDNzg5LjIsNDEzLDc4NC4yLDQxMCw3NzcsNDEweiBNODc2LjgsNTE5LjVjMS45LTkuNiwzLjgtMTguOCw1LjctMjcuNgoJYzEuOS04LjgsMy44LTE4LjMsNi0yOC40bDUuNy0yNy44YzIuOC0zLjMsNS43LTYuMyw4LjctOC45YzMtMi42LDYtNC43LDkuMy02LjJjMy4yLTEuNSw2LjctMi4zLDEwLjUtMi4zYzcsMCwxMS40LDIuNCwxMy4yLDcuMwoJYzEuOSw0LjksMS45LDExLjQsMC4xLDE5LjRsLTMuOCwxOC42Yy0yLDEwLTMuOSwxOS41LTUuOCwyOC4yYy0xLjgsOC44LTMuNywxOC01LjgsMjcuN2gzOS42YzItOS42LDQtMTguOSw1LjktMjcuOQoJYzEuOS05LDQtMTkuMSw2LjItMzAuMmMxLjEtNS4yLDIuMi0xMC4yLDMuMi0xNS4xYzEtNC44LDEuOS05LjEsMi43LTEyLjljMy4zLTE1LjcsMi4xLTI4LjItMy40LTM3LjdjLTUuNi05LjQtMTUuNS0xNC4xLTI5LjgtMTQuMQoJYy02LjMsMC0xMi4zLDEuMS0xOC4xLDMuMmMtNS44LDIuMi0xMS4xLDUuMS0xNS44LDguOGMtNC44LDMuNy04LjgsNy45LTEyLDEyLjRoLTMuM2wyLjgtMjIuOWwtMzMuNCwyYy0yLjMsMTEuMi00LjUsMjIuMS02LjgsMzIuNQoJYy0yLjIsMTAuNS00LjMsMjAuNS02LjIsMzAuMWwtMi44LDEzLjRjLTIuMywxMS00LjQsMjEuMS02LjMsMzAuMWMtMS45LDkuMS0zLjksMTguNC01LjksMjhMODc2LjgsNTE5LjVMODc2LjgsNTE5LjV6CgkgTTEwNTEuOSw1MjMuMWMzLjIsMCw2LjYtMC4zLDEwLjMtMC45YzMuNy0wLjYsNy4yLTEuMywxMC40LTIuM2MzLjItMC45LDUuOC0yLDcuNi0zLjNsNC4yLTMyLjljLTMuNCwyLjQtNi45LDQuMS0xMC4zLDUuMQoJYy0zLjQsMS02LjUsMS41LTkuMywxLjVjLTYuNCwwLTEwLjgtMi4yLTEzLjItNi43cy0yLjYtMTEtMC43LTE5LjZsMTAtNDguNGgzOS40bDYuNC0zMC4zaC0zOS40bDAuMy0xLjNjMC42LTIuNywxLjEtNS4zLDEuNi03LjkKCWwwLjUtMi41YzEuNC02LjYsMi43LTEzLDQtMTkuMmMxLjMtNi4yLDIuNy0xMi44LDQuMS0xOS44bC00MC41LDcuMWMtMS45LDguOS0zLjYsMTcuNS01LjQsMjUuOGMtMSw1LTIuMiwxMC4zLTMuNCwxNmwtMC40LDEuNwoJaC0yMS40bC02LjQsMzAuM2gyMS40bC0wLjIsMC44bC0wLjUsMi4zYy0xLjQsNi45LTIuOCwxMy40LTQsMTkuNWMtMS4zLDYuMS0yLjUsMTEuOS0zLjYsMTcuNWMtMS4yLDUuNi0yLjMsMTEuMy0zLjYsMTcuMQoJYy0yLjQsMTEuNC0yLjEsMjAuOCwwLjgsMjguMmMyLjksNy40LDcuOSwxMywxNSwxNi42QzEwMzMsNTIxLjMsMTA0MS42LDUyMy4xLDEwNTEuOSw1MjMuMXoiLz4KPC9zdmc+" alt="ykm filament laravel" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="ykm node.js" className="m-1" />
                        <img src="https://img.shields.io/badge/-Express-339933?style=flat&logo=express&logoColor=ffffff" alt="ykm express.js" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/Wordpress-21759B?style=flat&logo=wordpress&logoColor=white" alt="ykm redux" />
                        <img className="m-1" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="ykm redux" />
                        <img className="m-1" src="https://img.shields.io/badge/AWS Web Services-232F3E?style=flat&logo=amazonwebservices&logoColor=white" alt="ykm redux" />
                        <img className="m-1" src="https://img.shields.io/badge/DigitalOcean-0080FF?style=flat&logo=digitalocean&logoColor=white" alt="ykm redux" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="ykm linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "MONASTERY MANAGEMENT",
            date: "Jan 2024",
            link: "https://punyarrama.com/yawgi/create/public",
            description: [
                "Able to manage yogis, monks, and nuns who come to the meditation center"
            ],
            domains: ["Laravel 10", "ReactJs", "Tailwindcss", "MySQL", "Nginx", "Digital Ocean"]
        },
        {
            name: "Flavorwave Food Delivery",
            date: "Dec 2023",
            link: "https://flavorwave.com",
            description: [
                "Food delivery Services: with Department of Customer Services, Warehouse and Logistics"
            ],
            domains: ["Laravel 10", "ReactJs", "Tailwindcss", "MySQL", "Nginx", "AWS EC2/S3"]
        },
        {
            name: "PROPERTY FOR BUY, SALE & RENT",
            date: "June 2023",
            link: "https://www.eainchanmyay.com.mm/",
            description: [
                "Property buy, sell, rent web site",
            ],
            domains: ["Nodejs", "Expressjs", "Vuejs", "MySQL", "Nginx", "Digital Ocean"]
        },
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <img className="w-80 md:w-80 my-1" src="./images/projects/projectbg.png" alt="" />

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                const borderColorClass = `border-${tag_colors[domain]}`
                                                const textColorClass = `text-${tag_colors[domain]}`

                                                return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Yan Kyaw Min CV-website.pdf" title="ykm patel resume" frameBorder="0"></iframe>
    )
}

function ReferMTM() {
    return (
        <iframe className="h-full w-full" src="./files/【MTM003-24】Yan Kyaw Min_Recommendation Letter.pdf" title="ykm patel refer" frameBorder="0"></iframe>
    )
}