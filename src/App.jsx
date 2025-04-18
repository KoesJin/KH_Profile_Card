import './App.css';
import ProfileCardList from './ProfileCardList';

function App() {
    const userInfo = [
        {
            userNo: 1,
            name: '김진석',
            age: 25,
            isOnline: false,
            profileImg: 'https://i.pinimg.com/736x/48/db/63/48db634cdc1f7f5b98049e810291431f.jpg',
            greetingMsg: '반갑습니다',
        },
        {
            userNo: 2,
            name: '박민수',
            age: 23,
            isOnline: true,
            profileImg: 'https://i.pinimg.com/736x/e9/c6/92/e9c692d5adaef54de0fc98e829cc1e13.jpg',
            greetingMsg: '안녕하세요 박민수에요',
        },
        {
            userNo: 4,
            name: '이현준',
            age: 29,
            isOnline: false,
            profileImg: 'https://i.pinimg.com/736x/f0/3a/6e/f03a6e1ddd31e5cac92b026271827449.jpg',
            greetingMsg: '딱대',
        },
        {
            userNo: 3,
            name: '안승상',
            age: 32,
            isOnline: true,
            profileImg: 'https://i.pinimg.com/736x/aa/a4/6a/aaa46a22d2b4e4cebc6a62079c192f0c.jpg',
            greetingMsg: '집가고 싶어',
        },
    ];

    return (
        <>
            <ProfileCardList userInfoes={userInfo} />
        </>
    );
}

export default App;
