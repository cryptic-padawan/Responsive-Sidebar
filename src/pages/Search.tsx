import React from 'react'
import styled from 'styled-components'

const SearchText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Search: React.FunctionComponent = () => {
    return (
        <SearchText>Search</SearchText>
    )
}

export default Search


// const Search = () => {
//     const {playlists, search} = useSelector(state => state.musicReducer);
//     const [searchResult, setSearchResult] = useState([]);
//     useEffect(() => {
//         setSearchResult(playlists.filter((i) => (
//             (i.name.toLowerCase().startsWith(search))
//             ||
//             (i.author_name.toLowerCase().startsWith(search))
//             ||
//             (i.musicName.toLowerCase().startsWith(search))
//             ||
//             (i.lang && i.lang.toLowerCase().startsWith(search))
//         )));
//     }, [search, playlists]);
//     return (
//         <Container>
//             {
//                 (search === "" || search === null)
//                     ?
//                     <div className={"Search"}>
//                         <div className="Search-img">
//                             <img className={"Rotate-img"} src={SearchMusicDisc} alt="search-music-icon"/>
//                             <img src={SearchMusicMp3} alt="search-music-icon"/>
//                             <img src={SearchMusic} alt="search-music-icon"/>
//                             <img className={"Arrow"} src={ArrowUp} alt=""/>
//                         </div>
//                     </div>
//                     :
//                     <div className={"Search-result"}>
//                         {
//                             searchResult.length === 0
//                                 ?
//                                 <div className={"Search-fallback"}>
//                                     No result found.
//                                 </div>
//                                 :
//                                 searchResult.map((item) => (
//                                     <MusicCard key={item.id} music={item}/>
//                                 ))
//                         }
//                     </div>
//             }
//         </Container>
//     );
// }
// 
// export default Search;



