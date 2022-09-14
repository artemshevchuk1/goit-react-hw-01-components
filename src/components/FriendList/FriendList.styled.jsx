import styled from '@emotion/styled';

export const FriendList = styled.ul`
  list-style: none;
  padding-left: 0;
`;
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 300px;
  margin-bottom: 10px;
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;
export const Avatar = styled.img`
  width: 100px;
  border-radius: 1%;
`;

export const Status = styled.span`
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-left: 30px;
  background: ${props => (props.status ? '#3ce21b' : '#e21515')};
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 500;
`;
