import { formatDistanceToNow } from 'date-fns';
import { useContext } from "react";
import { VideoItemCard, DetailsCard, ImageCard, Name } from "./VideoItemStyles";
import Context from "../Context";
import { LuDot } from "react-icons/lu";


const VideoItem = ({ details }) => {
    const { id, channel, published_at, thumbnail_url, title, view_count } = details;
    const { name, profile_image_url } = channel
    const { isDark } = useContext(Context);
    return (

        <VideoItemCard to={`/videos/${id}`} isDark={isDark}>
            <ImageCard>
                <img src={thumbnail_url} alt="thumburrl" />
            </ImageCard>
            <DetailsCard isDark={isDark}>
                <img src={profile_image_url} alt="profile" />
                <div className="details">
                    <h2>{title.length < 50 ? title : title.slice(0, 50) + "..."}</h2>
                    <div>
                        <Name>{name}</Name>
                        <div className="d-flex gap-3">
                            <p><LuDot />{view_count} views</p>
                            <p><LuDot />{formatDistanceToNow(new Date(published_at))}</p>
                        </div>
                    </div>
                </div>
            </DetailsCard>
        </VideoItemCard>

    )
}

export default VideoItem