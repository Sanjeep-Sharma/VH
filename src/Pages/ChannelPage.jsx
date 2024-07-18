import React from 'react';
import styled from 'styled-components';
import Card from "../Components/Card"

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: -50px auto 3px;
  border: 4px solid #fff;
`;

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: auto;
  color: ${({ theme }) => theme.text};
`;
const ChannelStats = styled.div`
  display: flex;
  align-items: center;
`
const ChannelUsername = styled.span`
  font-size: 18px;
  color: #666;
  color: ${({ theme }) => theme.text};
`;

const ChannelSubscriberCount = styled.span`
  font-size: 18px;
  color: #666;
  margin-right: 20px;
  color: ${({ theme }) => theme.text};
`;

const ChannelVideoCount = styled.span`
  font-size: 18px;
  color: #666;
  color: ${({ theme }) => theme.text};
`;

const SubscribeButton = styled.button`
background-color: #cc1a00;
font-weight: 500;
color: white;
border: none;
border-radius: 5px;
height: max-content;
padding: 10px 20px;
cursor: pointer;
`;

const Bio = styled.p`
  font-size: 16px;
  margin: 10px 0px;
  color: ${({ theme }) => theme.text};
`;

const VideoGrid = styled.div`
margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const VideoThumbnail = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const VideoTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const VideoViewsCount = styled.span`
  font-size: 14px;
  color: #666;
  margin-right: 20px;
  color: ${({ theme }) => theme.text};
`;

const VideoReleaseDate = styled.span`
  font-size: 14px;
  color: #666;
  color: ${({ theme }) => theme.text};
`;

const ChannelPage = () => {
  return (
    <Container>
      <CoverImage src="https://via.placeholder.com/1200x200" />
      <Avatar src="https://via.placeholder.com/100x100" />
      <ChannelDetails>
        <ChannelName>Channel Name</ChannelName>
        <ChannelUsername>@username</ChannelUsername>
        <ChannelStats>
        <ChannelSubscriberCount>10,000 subscribers</ChannelSubscriberCount>
        <ChannelVideoCount>500 videos</ChannelVideoCount>
        </ChannelStats>
        <SubscribeButton>Subscribe</SubscribeButton>
      </ChannelDetails>
      <Bio>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
      </Bio>
      <VideoGrid>
        <VideoCard>
          <VideoThumbnail src="https://via.placeholder.com/300x150" />
          <VideoTitle>Video Title</VideoTitle>
          <VideoViewsCount>10,000 views &bull; <VideoReleaseDate>Released on 2022-01-01</VideoReleaseDate></VideoViewsCount>          
        </VideoCard>
        <VideoCard>
          <VideoThumbnail src="https://via.placeholder.com/300x150" />
          <VideoTitle>Video Title</VideoTitle>
          <VideoViewsCount>10,000 views &bull; <VideoReleaseDate>Released on 2022-01-01</VideoReleaseDate></VideoViewsCount>          
        </VideoCard>
        <VideoCard>
          <VideoThumbnail src="https://via.placeholder.com/300x150" />
          <VideoTitle>Video Title</VideoTitle>
          <VideoViewsCount>10,000 views &bull; <VideoReleaseDate>Released on 2022-01-01</VideoReleaseDate></VideoViewsCount>          
        </VideoCard>
      </VideoGrid>
    </Container>
  );
};

export default ChannelPage;