import React from 'react'
import styled from 'styled-components'

const HomeText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Home: React.FunctionComponent = () => {
    return (
        <HomeText>Home</HomeText>
    )
}

export default Home



// function getCurrPage(pathName) {
//     switch (pathName) {
//         case "/home":
//             return <MusicCardContainer/>
//         case "/home/search":
//             return <Search/>
//         case "/home/profile":
//             return <Profile/>
//         case "/home/add":
//             return <AddMusic/>
//         case "/home/about":
//             return <About/>
//         default:
//             if (pathName.startsWith("/home/playlist/")) {
//                 return <Playlist/>
//             }
//             return null
//     }
// }

// function Home() {


//     const [screenSize, setScreenSize] = useState(undefined);
//     const [currMusic, setCurrMusic] = useState(null);
//     const [Page, setCurrPage] = useState(<MusicCardContainer/>);

//     let pathname = window.location.pathname;
//     useEffect(() => {
//         setCurrPage(getCurrPage(pathname))
//     }, [pathname]);

//     window.addEventListener("resize", handleResize);

//     function handleResize() {
//         setScreenSize(window.innerWidth);
//     }

//     useEffect(() => {
//         handleResize();
//         return () => window.removeEventListener("resize", handleResize);
//     });

//     const useStyle = useContext(ThemeContext);
//     const {playing, bannerOpen} = useSelector(state => state.musicReducer);


//     useEffect(() => {
//         setCurrMusic(playing)
//     }, [playing])

//     const [loaded, setLoaded] = useState(false);
//     useEffect(() => {
//         setLoaded(true)
//     }, []);


//     return (
//         <div style={useStyle.component} className={"home-container"}>
//             {
//                 !loaded ?
//                     <div className="Home-skeleton">
//                         <Skeleton animation={"wave"} variant={"rect"} height={"100vh"}/>
//                     </div>
//                     :
//                     <>
//                         {
//                             screenSize <= 970 ?
//                                 <MobileTopNavigation/> :
//                                 <Navigation/>
//                         }
//                         <section className={"home-music-container"}>
//                             <div className="sidebar-home">
//                                 <SideBar/>
//                             </div>
//                             <div className="main-home">
//                                 {
//                                     Page
//                                 }
//                             </div>
//                         </section>
//                         {
//                             bannerOpen
//                             &&
//                             <section className="current-large-banner">
//                                 <CurrentPlayingLarge/>
//                             </section>
//                         }
//                         <React.Fragment>
//                             {
//                                 currMusic
//                                     ?
//                                     <FooterMusicPlayer music={currMusic}/>
//                                     :
//                                     <FooterSelectMusic/>
//                             }
//                             {
//                                 screenSize <= 970 && <BottomNavigationMobile/>
//                             }
//                         </React.Fragment>
//                     </>
//             }
//         </div>
//     );
// }

// export default Home;
