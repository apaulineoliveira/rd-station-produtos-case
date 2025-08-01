const recommendationService = {
  getRecommendations: (formData = {}, allProducts = []) => {
    const {
      selectedPreferences = [],
      selectedFeatures = [],
      selectedRecommendationType = '',
    } = formData;

    if (allProducts.length === 0) return [];

    const productsWithScore = allProducts.map((product) => {
      const preferenceMatches = product.preferences.filter((preference) =>
        selectedPreferences.includes(preference)
      ).length;

      const featureMatches = product.features.filter((feature) =>
        selectedFeatures.includes(feature)
      ).length;

      const totalScore = preferenceMatches + featureMatches;

      return {
        ...product,
        score: totalScore,
      };
    });

    const isSingleRecommendation = selectedRecommendationType === 'SingleProduct';

    if (isSingleRecommendation) {
      const bestMatchedProduct = productsWithScore.reduce((bestProduct, currentProduct) => {
        const hasScore = currentProduct.score > 0;
        const isBetterScore = !bestProduct || currentProduct.score >= bestProduct.score;

        return hasScore && isBetterScore ? currentProduct : bestProduct;
      }, null);

      return bestMatchedProduct ? [bestMatchedProduct] : [];
    }

    const sortedRelevantProducts = productsWithScore
      .filter((product) => product.score > 0)
      .sort((productA, productB) => productB.score - productA.score);

    return sortedRelevantProducts;
  },
};

export default recommendationService;
