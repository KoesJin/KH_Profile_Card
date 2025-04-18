import React from 'react';
import { styled } from 'styled-components';
import ProfileCard from './ProfileCard';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 15px;
`;

const ProfileCardList = ({ userInfoes }) => {
    return (
        <Container>
            {userInfoes.map((userInfo) => {
                return <ProfileCard key={userInfo.userNo} card={userInfo} />;
            })}
        </Container>
    );
};

export default ProfileCardList;
