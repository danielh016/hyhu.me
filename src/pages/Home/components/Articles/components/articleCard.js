import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContainer,
  ArticleLink,
  ArticleImage,
  ArticleTitle,
  ArticleMedium,
  ArticleDescription,
} from '../articlesStyles';

const ArticleCard = (props) => {
  const { article } = props;

  return (
    <ArticleLink href={article.link} target="_blank" rel="noopener noreferrer">
      <CardContainer>
        <ArticleImage src={article.image} />
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleMedium>{article.medium}</ArticleMedium>
        <ArticleDescription>{article.description}</ArticleDescription>
      </CardContainer>
    </ArticleLink>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape().isRequired,
};

export default ArticleCard;
