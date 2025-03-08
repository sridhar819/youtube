import React, { useEffect, useState } from 'react'

import { HomeContainer, VideoCard, Card, SearchCard } from './HomeStyle'
import { useContext } from 'react'
import Context from '../Context'

import { IoSearchSharp } from "react-icons/io5";
import Cookies from 'js-cookie'
import Slider from './Slider'
import axios from 'axios';
import VideoItem from './VideoItem';
import Loader from './Loader';


const videoStages = {
    initial: "LOADING",
    success: "SUCCESS",
    failure: "FAILURE"
}

const Home = () => {
    const [searchInput, setInput] = useState('');
    const [videoData, setVideoData] = useState({ activeStage: videoStages.initial, videoList: [] })
    const { isDark } = useContext(Context);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleClick = (e) => {
        if (e.key === "Enter") {
            setVideoData({ activeStage: videoStages.initial });
            getFetchedData();
        }
    }


    const getFetchedData = async () => {
        const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

        const response = await axios.get(url, {
            headers: { Authorization: `Bearer ${Cookies.get('jwt_token')}` },
        });

        if (response.status == 200) {
            setVideoData(pre => ({ ...pre, activeStage: videoStages.success, videoList: response.data.videos }))
        }
        else {
            setVideoData(pre => ({ ...pre, activeStage: videoStages.failure }))
        }
    }

    useEffect(() => {
        let intervalId = setTimeout(() => {
            getFetchedData();
            console.log("triggered")
        }, 2000);

        return () => {
            clearTimeout(intervalId);
        }
    }, [])

    const renderSuccesView = () => {
        const { videoList } = videoData
        return (
            <VideoCard>
                {videoList.map(each => (
                    <VideoItem key={each.id} details={each} />
                ))}
            </VideoCard>
        )
    }

    // const renderLoader = () => (
    //     <div class="text-center mt-5">
    //         <div class="spinner-border text-danger" role="status">
    //             <span class="visually-hidden">Loading...</span>
    //         </div>
    //     </div>
    // )

    const renderPageView = () => {

        switch (videoData.activeStage) {
            case (videoStages.initial):
                return <Loader />;
            case (videoStages.success):
                return renderSuccesView();
            case (videoStages.failure):
                return null;
            default:
                return null
        }
    }

    return (
        <HomeContainer isDark={isDark}>
            <Slider isDark={isDark} />

            <Card isDark={isDark}>
                <SearchCard isDark={isDark}>
                    <input onKeyDown={handleClick} onChange={handleChange} value={searchInput} type="search" placeholder='search here' />
                    <button onClick={() => {
                        setVideoData({ activeStage: videoStages.initial });
                        getFetchedData();
                    }} type="button"><IoSearchSharp /></button>
                </SearchCard>
                {renderPageView()}
            </Card>
        </HomeContainer>
    )
}

export default Home