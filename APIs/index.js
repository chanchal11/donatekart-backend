const { default: axios } = require("axios");

const urlRoot = "https://testapi.donatekart.com/api";

async function getCampaigns(){
    return await axios.get(urlRoot+"/campaign");
}

module.exports = {getCampaigns};