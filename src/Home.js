import { useState } from 'react'

export default function Home(){
    const [menuItems, setMenuItems] = useState()


    const handleBtnClick = ()  => {
fetch('https://api.sampleapis.com/movies/horror')
        .then(res=> res.json)
        .then(data => setMenuItems(data))
        .then(x => console.error(x))


}


    return(
        <>
    <h1>HorrorDayProject</h1>
    <button onClick={() => handleBtnClick()}>get data</button>
        
        </>

    )
}

