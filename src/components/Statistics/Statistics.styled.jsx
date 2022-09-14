import styled from '@emotion/styled';

export const Statistics = styled.section`
  display: block;
  border-radius: 1%;
  background: #ffffff;
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
  width: 320px;
`;

export const Title = styled.h2`
  font-size: 22px;
  text-align: center;
  background-color: rgb(229, 220, 235);
  margin-top: 40px;
  margin-bottom: 0;
`;
export const StatList = styled.ul`
  display: flex;
  list-style: none;
  font-size: 22px;
  gap: 25px;
  text-align: center;
  justify-content: center;
  padding: 0;
  margin-top: 0px;
  background-color: rgb(195, 234, 239);
`;
export const Item = styled.li`
  display: inline-grid;
  background-color: rgb(210, 233, 236);
`;
export const Label = styled.span`
  font-size: 20px;
`;
export const Percentage = styled.span`
  font-size: 25px;
  font-weight: 500;
`;
