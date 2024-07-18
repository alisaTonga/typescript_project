import { useState } from 'react';
import MyButton from '../../components/myButton/myButton';
import {PageWrapper, UserCard, Avatar, UserInfo, UserTitle,InfoContainer} from './style'

export default function Consultation4() {
    const [userData, setUserData] = useState<any>(undefined);
    const randomUserUrl: string = 'https://randomuser.me/api/'
    const getRandomUser = async () =>{
        const  response = await fetch(randomUserUrl, {
            method: "GET"
        })
        console.log(response);
        const result = await response.json();
        if(response.ok){
            setUserData(result.results[0])
        } else{
            
        }
        
        ;
    }
    console.log(userData);
    
    return (
            <PageWrapper>
            <UserCard>
            <Avatar src={userData?.picture?.large} alt="User Avatar" />
            <InfoContainer>
                <UserTitle>Full Name:</UserTitle>
                <UserInfo>{userData?.name?.first} {userData?.name?.last}</UserInfo>
            </InfoContainer>
            <InfoContainer>
                <UserTitle>Email:</UserTitle>
                <UserInfo>{userData?.email}</UserInfo>
            </InfoContainer>
            <InfoContainer>
                <UserTitle>Phone:</UserTitle>
                <UserInfo>{userData?.phone}</UserInfo>
            </InfoContainer>
            <MyButton name='Get random user' onClick={getRandomUser}/>
            </UserCard>
        </PageWrapper>
    );
}
