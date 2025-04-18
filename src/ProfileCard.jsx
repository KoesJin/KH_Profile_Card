// ProfileCard.js
import React from 'react';
import { styled } from 'styled-components';

const Card = styled.div`
    width: 500px;
    height: 500px;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 24px;
`;

const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 16px;
    border: 3px solid #dcdcdc;
`;

const Name = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin: 8px 0 4px;
    color: black;
`;

const Status = styled.p`
    font-size: 14px;
    color: ${(props) => props.color};
    font-weight: bold;
    margin-bottom: 12px;
`;

const Bio = styled.p`
    font-size: 14px;
    color: #444;
`;

const ProfileCard = ({ card }) => {
    return (
        <Card>
            <ProfileImage src={card.profileImg} alt="Profile" />
            <Name>{card.name}</Name>
            <Status color={card.isOnline ? 'black' : 'gray'}>
                {card.isOnline ? '🟢 온라인 상태입니다' : '🔴 오프라인 상태입니다.'}
            </Status>
            <Bio>{card.greetingMsg}</Bio>
        </Card>
    );
};

export default ProfileCard;
