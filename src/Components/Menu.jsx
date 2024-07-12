import React from 'react'
import styled from 'styled-components';
import VideoHub from '../img/logos.jpg'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Container = styled.div`
flex: 1;
background-color: ${({ theme }) => theme.bgLighter};
height: 100vh;
color: ${({ theme }) => theme.text};
font-size: 14px;
position: sticky;
top: 0;
left: 0;
`;
const Wrapper = styled.div`
padding: 18px 26px;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
`;
const Img = styled.img`
    height: 25px;
`;
const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0px;

    &:hover {
        background-color: ${({ theme }) => theme.soft};
    }


`;
const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Login = styled.div`
`;
const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`;
const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 20px;
`
const Menu = () => {
  return (
    <Container>
        <Wrapper>
            <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
            <Logo>
                <Img src={VideoHub}/>
                VideoHub
            </Logo>
            </Link>
            <Item>
                <HomeIcon/>
                Home
            </Item>
            <Item>
                <SubscriptionsIcon/>
                Subscriptions
            </Item>
            <Item>
                <HistoryIcon/>
                WatchHistory
            </Item>
            <Item>
                <PlaylistPlayIcon/>
                Playlists
            </Item>
            <Item>
                <FavoriteIcon/>
                Liked Videos
            </Item>
            <Hr/>
            <Login>
                Sign in to like videos, comment, and subscribe.
                <Link to="signin" style={{textDecoration:"none"}}>
                <Button>
                    <AccountCircleIcon/>SIGN IN
                </Button>
                </Link>
            </Login>
            <Hr/>
        </Wrapper>
    </Container>
  )
}

export default Menu