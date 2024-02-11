import { useContext, useEffect, useState } from "react"
import newsContext from "../contexts/newsContext";

const useNewsQuery = (category = null) => {
    const {newses,setNewses} = useContext(newsContext);

    useEffect(() => {

        const newsData = async () => {
            // const response = await fetch(`http://localhost:8000/v2/search?q=${category}`);
            let response;
            if (category === null | category === "general") {

                response = await fetch('http://localhost:8000/v2/top-headlines?category=general');
            }
            else {
                response = await fetch(`http://localhost:8000/v2/top-headlines?category=${category}`);
            }
            const data = await response.json();
            setNewses(data);
        }
        newsData();
    }, [category]);

    return newses;

}
export default useNewsQuery;


