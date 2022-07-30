import styled from 'styled-components';
import CommonButton from '../../components/comp/button/button.elements';

export const Container = styled.div``;

export const DataContainer = styled.div`
  display: flex;

 
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: ;
  margin-right: 20px;

  &:last-child {
    border-bottom: none;
  }

  
`;

export const Button = styled(CommonButton)`
  margin-left: auto;
 
`;

export  const CharacterImage = styled.img`
  width: 100%;
  height: auto;
  min-width: 300px;
`;

export  const Field = styled.div`
  display: flex;
  span {
    font-weight: bold;
    margin-right: auto;
  }
`;

export  const Divider = styled.hr`
  border: 0.5px solid ;
`;

export const EmptyContainer = styled.div`
  width: 100%;
  padding: 80px;
  font-size: 30px;
  display: flex;
  justify-content: center;
`;

