import React from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {ShareOutlined} from '@mui/icons-material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import user_profile from '../img/user_profile.jpg'
import Comments from "../Components/Comments"
import Card from "../Components/Card"

const Container = styled.div`
display: flex;
gap: 24px;
`;
const Content = styled.div`
flex: 5;
`;
const VideoWrapper = styled.div`

  
`
const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: ${({ theme }) => theme.text};
`

const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Info = styled.span`
color: ${({ theme }) => theme.textSoft};
`
const Buttons = styled.div`
display: flex;
gap: 20px;
color: ${({ theme }) => theme.text}`
const Button = styled.div`
display: flex;
align-items: center;
gap: 5px;
cursor: pointer;
`
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft}
`

const Recommendation = styled.div`
flex: 2;
`;

const Channel = styled.div`
display: flex;
justify-content: space-between;
`
const ChannelInfo = styled.div`
display:flex;
gap: 20px;
`
const Image = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`
const ChannelDetail = styled.div`
display: flex;
flex-direction: column;
color: ${({ theme }) => theme.text};
`
const ChannelName = styled.span`
font-weight: 500;
`
const ChannelCounter = styled.span`
margin-top: 5px;
margin-bottom: 20px;
color: ${({ theme }) => theme.textSoft};
font-size: 12px;`
const Description = styled.p`
font-size:14px;
`
const Subscribe = styled.button`
background-color: #cc1a00;
font-weight: 500;
color: white;
border: none;
border-radius: 5px;
height: max-content;
padding: 10px 20px;
cursor: pointer;
`

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height = "480"
            src="https://www.youtube.com/embed/7C0zr6HJ8Z"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Video Title</Title>
        <Details>
          <Info>121354 views &bull; 1 day ago</Info>        
        <Buttons>
          <Button><FavoriteIcon/>Like</Button>          
          <Button><ShareOutlined/>Share</Button>
          <Button><LibraryAddIcon/>Save</Button>
        </Buttons>
        </Details>
        <Hr/>
        <Channel>
        <ChannelInfo><Image src={user_profile}/></ChannelInfo>
        <ChannelDetail>
        <ChannelName>ChannelName</ChannelName>
        <ChannelCounter>100K subscribers</ChannelCounter>
        <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam minima molestias est, aliquid unde, debitis fuga rem neque voluptatem ducimus mollitia, nemo iste? Necessitatibus, quos voluptatem non a magni beatae.</Description>
        </ChannelDetail>
        <Subscribe>SUSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      </Recommendation>
    </Container>
  )
}

export default Video