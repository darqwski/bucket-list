import React from 'react';

export interface IArticle {

}
export interface IArticleCreator {

}
export interface IArticleCreatorRow {
    articleSection: IArticleSection,
    updateFormSection(id: number, name: string, event: IEventTargetValue): void
}

export interface IArticleCreatorRowContent extends IArticleCreatorRow {
    articleSection: IArticleSectionContent
}
export interface IArticleCreatorRowTitle extends IArticleCreatorRow {
    articleSection: IArticleSectionTitle
}
export interface IArticleCreatorRowImage extends IArticleCreatorRow {
    articleSection: IArticleSectionImage
}

export interface IEventTargetValue {
    target: {
        value: string
    }
}

export interface IArticleSection {
    id: number;
    type: 'content' | 'image' | 'title';
}

export interface IArticleSectionImage extends IArticleSection{
    src: string;
    credits: string;
}
export interface IArticleSectionTitle extends IArticleSection{
    title: string;
}
export interface IArticleSectionContent extends IArticleSection{
    content: string;
}
