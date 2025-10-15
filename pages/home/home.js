Page({
  data: {
    coins: 250,
    stars: 12,
  },

  goToWordForest() {
    wx.navigateTo({ url: '/pages/word_forest/word_forest' });
  },

  goToPhonicsPeak() {
    wx.navigateTo({ url: '/pages/phonics_peak/phonics_peak' });
  },

  goToDialogueBay() {
    wx.navigateTo({ url: '/pages/dialogue_bay/dialogue_bay' });
  },

  goToRewards() {
    wx.navigateTo({ url: '/pages/rewards/rewards' });
  },

  goToParentView() {
    wx.navigateTo({ url: '/pages/parent/parent' });
  },

  goToSettings() {
    wx.navigateTo({ url: '/pages/settings/settings' });
  },
});
