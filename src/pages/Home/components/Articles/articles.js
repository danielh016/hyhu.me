import React from 'react';
import websiteContent from '../../data/websiteContent.json';
import { SectionContainer, ElementContainer } from './articlesStyles';
import { ArticleCard } from './components';

const Articles = () => {
  const { content: articles, type, sectionTitle } = websiteContent.data.articles;

  return (
    <SectionContainer id={type}>
      <h2>{sectionTitle}</h2>
      <ElementContainer>
        {articles.map((article) => (
          <ArticleCard article={article} />
        ))}
      </ElementContainer>
    </SectionContainer>
  );
};

export default Articles;
