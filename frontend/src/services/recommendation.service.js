const recommendationService = {
  getRecommendations: (formData = {}, products = []) => {
    const {
      selectedPreferences = [],
      selectedFeatures = [],
      selectedRecommendationType = '',
    } = formData;

    if (!products.length) return [];

    const scored = products.map((product) => {
      const prefMatches = product.preferences.filter((p) =>
        selectedPreferences.includes(p)
      ).length;
      const featMatches = product.features.filter((f) =>
        selectedFeatures.includes(f)
      ).length;
      const score = prefMatches + featMatches;
      return { ...product, score };
    });

    if (selectedRecommendationType === 'SingleProduct') {
      const bestProduct = scored.reduce((acc, curr) => {
        if (curr.score > 0 && (acc === null || curr.score >= acc.score)) {
          return curr;
        }
        return acc;
      }, null);
      return bestProduct ? [bestProduct] : [];
    }

    return scored
      .filter((prod) => prod.score > 0)
      .sort((a, b) => b.score - a.score);
  },
};

export default recommendationService;
