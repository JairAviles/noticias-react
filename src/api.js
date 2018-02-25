const api = {
    async getArticlesBySource(sourceId) {
        const response = await fetch(`https://newsapi.org/v1/articles?source=${sourceId}&apiKey=69dd03e509be460b8c32491919b83062`);

        return await response.json();
    },

    async getSources() {
        const response = await fetch("https://newsapi.org/v1/sources?language=en");
        
        return await response.json();
    }
}

export default api;