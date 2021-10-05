const router = require('express').Router();
const campaignService = require('../services/campaign.service');

router.get("/sortBy/:attr", campaignService.getSortByAttr);

router.get("/active", campaignService.getActiveCampaigns);

router.get("/closed", campaignService.getClosedCampaigns);

module.exports = router;