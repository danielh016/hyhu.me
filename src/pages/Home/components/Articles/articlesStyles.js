import styled from 'styled-components';
import { colors } from '../../utils/styleVariables';

export const SectionContainer = styled.div`
  padding: 7vh 10vw;

  h2 {
    text-align: center;
    margin: 3vh;
  }
`;

export const ElementContainer = styled.div`
  display: flex;
  overflow-x: auto;
  min-width: 80%;
  min-height: 300px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CardContainer = styled.div`
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
  border: solid 1px ${colors.gray200};
  height: 300px;
  margin: 5px;
  min-width: 300px;
`;

export const ArticleLink = styled.a`
  color: ${colors.black};
  text-decoration: none;

  :link {
    color: ${colors.black};
    text-decoration: none;
  }

  :hover {
    color: ${colors.gold};
    transform: scale(1.01, 1.01);
    transition: 0.3s;
  }
`;

export const ArticleImage = styled.img`
  border-bottom: solid 1px ${colors.gray200};
  height: 170px;
  object-fit: cover;
  width: 100%;
`;

export const ArticleTitle = styled.p`
  display: -webkit-box;
  font-size: 1rem;
  font-weight: bold;
  line-height: 130%;
  margin-bottom: 0;
  max-width: 300px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 10px 10px 0 10px;
  text-overflow: ellipsis;
`;

export const ArticleMedium = styled.span`
  color: ${colors.gray400};
  font-size: 0.8rem;
  padding: 0 10px;
  margin-bottom: 0;
`;

export const ArticleDescription = styled.p`
  color: ${colors.black};
  display: -webkit-box;
  font-size: 0.9rem;
  line-height: 130%;
  margin-bottom: 0;
  max-width: 300px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 0 10px;
  text-overflow: ellipsis;
`;
