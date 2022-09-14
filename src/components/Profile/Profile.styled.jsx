import styled from '@emotion/styled';

export const Profile = styled.div`
  display: block;
  border-radius: 1%;
  background: #ffffff;
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
  width: 320px;
`;

export const Description = styled.div``;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 auto 0 auto;
  padding-top: 10px;
  overflow: hidden;
  border-radius: 50%;
`;
export const Name = styled.p`
  font-size: 22px;
  line-height: 1.6;
  text-align: center;
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Tag = styled.p`
  font-size: 18px;
  text-align: center;
  color: black;
  margin-top: 0;
  margin-bottom: 10px;
`;
export const Location = styled.p`
  font-size: 20px;
  text-align: center;
  color: black;
  margin-bottom: 10px;
  margin-top: 0;
`;
export const Stats = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: rgb(232, 240, 246);
  gap: 89px;
`;
export const StatsItem = styled.li``;

export const StatsFollowers = styled.span`
  display: block;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;
export const StatsViews = styled.span`
  display: block;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;
export const StatsLikes = styled.span`
  display: block;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;
