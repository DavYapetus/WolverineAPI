import React from "react"
import axios from "axios"
export const index = () => {
    const [url,setUrl]=useState("https://gateway.marvel.com/v1/public/characters/1009718/comics?ts=1&apikey=0ddb966155a236dfb10abcd76d73c605&hash=7c9aff95111be45f04e565a3f85ca04d")

    useEffect(()=>{
        const fetch = async() =>{
            const res=await axios.get(url)
            console.log(res.data.data.results);
        }
        fetch();
    },[url])
    return (
        <>
            <div className="header">
                <div className="bg">
                    <img src="./Images/bg.png" alt="" />
                </div>
                <div className="search-bar">
                    <img src="./Images/logo.jpg" alt="logo" />
                    <input type="search" placeholder='Search Here'
                     className='search'
                     onChange={e=>setSearch(e.target.value)}
                     onKeyPress={searchMarvel}/>
                </div>
            </div>
           <div className="content">
             
            {
              (!item)?<p>Not Found</p>:<Card data={item}/>
            }
           </div>
        </>
      )
}
