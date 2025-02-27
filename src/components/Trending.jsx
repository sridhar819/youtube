import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Card, HomeContainer, VideoCard } from './HomeStyle';
import Slider from './Slider';
import { useContext } from 'react';
import Context from '../Context';
import axios from 'axios';
import Loader from './Loader';
import VideoItem from './VideoItem';

const trendingStagesList = {
    initial: "LOADING",
    success: "SUCCESS",
    failure: "FAIlURE"
}

const Trending = () => {

    const [trendingData, setTrendingData] = useState({ activeStage: trendingStagesList.initial, trendingList: [] });


    const getTrendingData = async () => {

        const url = "https://apis.ccbp.in/videos/trending";

        const response = await axios.get(url, {
            headers: { Authorization: `Bearer ${Cookies.get('jwt_token')}` }
        });
        if (response.status === 200) {
            setTrendingData({ activeStage: trendingStagesList.success, trendingList: response.data.videos });
        }
    }

    useEffect(() => {
        let intervelId = setTimeout(() => {
            getTrendingData();
        }, 2000);

        return () => {
            clearTimeout(intervelId)
        }
    }, [])

    const renderTrendingSuccessView = () => {
        const { trendingList } = trendingData;

        return (
            <VideoCard>
                {trendingList.map(each => (
                    <VideoItem key={each.id} details={each} />
                ))}
            </VideoCard>
        )
    }

    const renderTrendingPageView = () => {

        switch (trendingData.activeStage) {
            case trendingStagesList.initial:
                return <Loader />;
            case trendingStagesList.success:
                return renderTrendingSuccessView();
            case trendingStagesList.failure:
                return <p>Failure</p>;
            default:
                return null;
        }
    }




    const { isDark } = useContext(Context);
    return (
        <HomeContainer isDark={isDark}>
            <Slider isDark={isDark} />

            <Card>
                {renderTrendingPageView()}
            </Card>
        </HomeContainer>
    )
}

export default Trending