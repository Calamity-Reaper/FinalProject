
export const filterPortfolioCards = (portfolioCards, filters) => {
    if(Object.values(filters).every(filter => !filter)) return portfolioCards.slice(0, 6);
    const filteredCards = portfolioCards.filter(card => {
        const tags = card.tags.split(' ');
        for (let i = 0; i < tags.length; i++) {
            if (filters[tags[i]]) return true;
        }
    });
    return filteredCards;
}