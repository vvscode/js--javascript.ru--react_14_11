import { articles } from '../fixtures'
import { DELETE_ARTICLE, SET_FILTER_DATE } from '../constants'

//это дополнительная сложность + потенциальная неконсистентность. лучше проводить фильтрацию по месту использования
export default (articlesState = { articles, filteredArticles: articles }, action) => {
    articlesState = articlesState.articlesState || articlesState
    const { type, payload } = action
    const { filteredArticles, articles } = articlesState

    switch (type) {
        case DELETE_ARTICLE:
            return {
                ...articlesState,
                articles: articles.filter(article => article.id != payload.articleId),
                filteredArticles: filteredArticles.filter(article => article.id != payload.articleId),
            }
        case SET_FILTER_DATE:
            let result = articles;
            const { from, to } = payload
            from && (result = result.filter(i => new Date(i.date) >= from))
            to && (result = result.filter(i => new Date(i.date) <= to))

            return { ...articlesState, filteredArticles: result }
    }

    return articlesState
}
