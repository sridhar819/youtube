import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie'

import { formatDistanceToNow } from 'date-fns';

import ReactPlayer from 'react-player'
import { Card, Channel } from './VideoDetailsStyles';
import Slider from './Slider';
import { HomeContainer } from './HomeStyle';
import Context from '../Context';

import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { MdOutlineSaveAlt } from "react-icons/md";



const stages = {
    initial: "LOADING",
    success: "SUCCESS",
    failure: "FAILURE"
}

const VideoDetails = () => {
    const [data, setData] = useState({ activeStage: stages.initial, videoDetails: {} })
    const { id } = useParams();

    useEffect(() => {
        const url = `https://apis.ccbp.in/videos/${id}`;

        axios.get(url, {
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt_token')}`
            }
        })
            .then(response => setData(pre => ({ ...pre, activeStage: stages.success, videoDetails: response.data.video_details })))
    }, []);

    const { isDark, savedVideos, addVideos } = useContext(Context);

    const renderSuccessView = () => {
        const { videoDetails } = data;
        const { video_url, title, thumbnail_url, view_count, published_at, description, channel } = videoDetails
        const { name, profile_image_url, subscriber_count } = channel;
        const isSaved = savedVideos.find(each => each.id === videoDetails.id);

        return (
            <Card isDark={isDark}>
                <ReactPlayer className="player" url={video_url} controls />
                <div>
                    <h6>{title}</h6>
                </div>
                <div className='like-section'>
                    <div className='d-flex gap-2'>
                        <p>.{view_count}views</p>
                        <p>.{formatDistanceToNow(new Date(published_at))}</p>
                    </div>
                    <div style={{ marginRight: "20px" }} className='btn-group'>
                        <button type="button">
                            <AiFillLike />
                        </button>
                        <button type="button">
                            <AiFillDislike />
                        </button>
                        <button style={{ color: isSaved ? "blue" : "" }} onClick={() => addVideos(videoDetails)} type="button">
                            <MdOutlineSaveAlt />
                        </button>
                    </div>
                </div>
                <hr />
                <Channel isDark={isDark}>
                    <img src={profile_image_url} alt="channel" />
                    <div className='details'>
                        <h5>{name}</h5>
                        <p>{subscriber_count} subscribers</p>
                        <p className='des'>{description}</p>
                    </div>
                </Channel>
            </Card>
        )
    }

    const renderVideoDetailsView = () => {

        switch (data.activeStage) {
            case stages.initial:
                return <p>Loading...</p>
            case stages.success:
                return renderSuccessView();
            case stages.failure:
                return <p>Failure</p>
            default:
                return null
        }
    }

    return (
        <HomeContainer isDark={isDark}>
            <Slider isDark={isDark} />
            {renderVideoDetailsView()}
        </HomeContainer>
    )
}

export default VideoDetails