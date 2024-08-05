    import styled from "@emotion/styled";

    export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 100px;
    background-color: #123;
    `;

    export const UserCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 40px;
    border: 2px solid black;
    border-radius: 6px;
    align-items: center;
    width: 700px;
    height: fit-content;
    background-color: white;
    `;

    export const Avatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    justify-self: center;
    align-self: center;
    `;

    export const InfoContainer = styled.div`
    display: flex;
    gap: 10px;
    `;

    export const UserTitle = styled.p`
    font-size: 24px;
    font-weight: bold;
    `;

    export const UserInfo = styled.p`
    font-size: 24px;
    `;