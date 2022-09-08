import React from "react";
import { useState, useEffect } from "react";
import options from "./options/options";

export default function MainContent(){
    let [data,setData] = useState(null);
    let [error,setError] = useState(null);
    let [loading,setLoading] = useState(true);
    useEffect (() => {
        const getData = async () =>{
        try 
        { 
            const response = await fetch("https://football98.p.rapidapi.com/premierleague/results",options)
            if (!response.ok) {
                    throw new Error(
                      `This is an HTTP error: The status is ${response.status}`
                    );
                  }

            let actualData = await response.json();
            setData(actualData)
            console.log(data)
            setError(null)
         }
        catch(err)
                {
                setError(err.message)
                setData(null)
                }
        finally
        {
                setLoading(false);
        }
        }
        getData();
    }, [])
    return (
        <div>
            <h1>News</h1>
            {loading && <div>A moment please... </div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )} 
            <ul>
            </ul>
        </div>
    )
}