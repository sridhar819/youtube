import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Slider from './Slider'
import { useContext } from 'react'
import Context from '../Context'
import { HomeContainer, VideoCard } from './HomeStyle'
import NewLoader from './NewLoader'
import axios from 'axios'
import { GamingCard } from './GamingStyles'
import { Link } from 'react-router-dom'
import { IoGameControllerOutline } from "react-icons/io5";


const stagesList = {
    initial: "LOADING",
    success: "SUCCESS",
    failure: "FAILURE"
}

const Gaming = () => {

    const [gamingData, setGamingData] = useState({ activeStage: stagesList.initial, gamingList: [] });

    const { isDark } = useContext(Context);

    const getGamingData = async () => {
        const url = "https://apis.ccbp.in/videos/gaming";

        const response = await axios.get(url, {
            headers: { Authorization: `Bearer ${Cookies.get('jwt_token')}` }
        });
        if (response.status === 200) {
            setGamingData({ activeStage: stagesList.success, gamingList: response.data.videos });
        }
    }

    useEffect(() => {
        let timeId = setTimeout(() => {
            getGamingData();
        }, 3000);

        return () => {
            clearTimeout(timeId)
        }
    }, []);

    const renderSuccessGamingView = () => {
        const { gamingList } = gamingData;

        return (
            <VideoCard style={{ padding: "1rem" }}>
                {gamingList.map(each => (
                    <GamingCard isDark={isDark} key={each.id} className="gaming-item">
                        <Link to={`/videos/${each.id}`}>
                            <img src={each.thumbnail_url} />
                            <div className='details'>
                                <h5>{each.title}</h5>
                                <p>.{each.view_count} views</p>
                            </div>
                        </Link>
                    </GamingCard>
                ))}
            </VideoCard>
        )
    }


    const renderGamingPageView = () => {
        switch (gamingData.activeStage) {
            case stagesList.initial:
                return <NewLoader />
            case stagesList.success:
                return (<div>
                    {renderSuccessGamingView()}
                </div>)
            case stagesList.failure:
                return <p>Failure...</p>
            default:
                return null
        }
    }



    return (
        <HomeContainer isDark={isDark}>
            <Slider isDark={isDark} />

            {renderGamingPageView()}
        </HomeContainer>
    )
}

export default Gaming