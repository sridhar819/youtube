import React, { useContext } from 'react'
import { HomeContainer } from './HomeStyle'
import Slider from './Slider'
import Context from '../Context'
import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns';

import styled from 'styled-components'

const SavedVideos = () => {
    const { isDark, savedVideos } = useContext(Context);

    return (
        <HomeContainer isDark={isDark}>
            <Slider isDark={isDark} />
            {savedVideos.length > 0 ? (
                <Ul isDark={isDark}>
                    {savedVideos.map(each => (
                        <Item to={`/videos/${each.id}`} isDark={isDark} key={each.id}>
                            <img src={each.thumbnail_url} alt="thumb" />
                            <div className="details">
                                <h5>{each.title}</h5>
                                <p className='channel'>{each.channel.name}</p>
                                <div className='d-flex gap-2'>
                                    <p>.{each.view_count}views</p>
                                    <p>.{formatDistanceToNow(new Date(each.published_at))}</p>
                                </div>
                            </div>
                        </Item>
                    ))}
                </Ul>
            ) : (<div className='d-flex flex-column align-items-center justify-content-center'>
                <img width="50%" src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png " alt="no videos" />
                <h2 style={{ fontSize: "18px" }} className={`mt-3 ${isDark ? "text-light" : "text-dark"}`}>No Saved Videos Yet!!!</h2>
                <Link className={`mb-3 ${isDark ? "text-light" : "text-dark"}`} style={{ textDecoration: "none" }} to={'/'}>
                  <button className='btn btn-primary' type="button">
                    Go to Home
                  </button>
                </Link>
            </div>)}
        </HomeContainer>
    )
}

export default SavedVideos

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    overflow: auto;
    height: 90vh;
    list-style: none;
    ::-webkit-scrollbar{
        display: none;
    }
    scrollbar-width: none; 

  /* Hide scrollbar for IE and older Edge */
     -ms-overflow-style: none;
    p{
        padding: 0;
        margin: 0;
    }
`

const Item = styled(Link)`
     display: flex;
     gap: 10px;
     text-decoration: none;
     width: 100%;
     img{
        height: 150px;
        min-width: 200px;
        object-fit: cover;

        @media (min-width:900px) {
            min-width: 300px;
            max-width: 300px;
            height: 200px;
            
        }
     }
   .channel{
    color: ${props => props.isDark ? "#fc5656" : "#ed3b0f"};
   }
     h5{
        margin: 0;
        font-size: 15px;
        color: ${props => props.isDark ? "#fbeeee" : "#666676"};
     }
     p{
        color: #918888;
        margin-top: 4px;
     }
`

