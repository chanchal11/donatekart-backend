const getCampaigns = require("../APIs").getCampaigns;

const getSortByAttr = async (req, res) => {
    try{
        const respFromAPI = await getCampaigns();
        const allCampaigns = respFromAPI.data;
        res.send(allCampaigns.sort((obj1, obj2) => obj1[req.params.attr] - obj2[req.params.attr]).map((obj) => {
        const { title, totalAmount, backersCount, endDate } = obj;
        return { title, totalAmount, backersCount, endDate };
    }));
    }catch(e){
        res.status(500).send({error: e.message});
    }
};

const getActiveCampaigns = async (req,res)=>{
    try {
        const { createdDaysBefore } = req.query;
        const respFromAPI = await getCampaigns();
        const allCampaigns = respFromAPI.data;
        res.send(allCampaigns.filter((obj)=>  Date.parse(obj.endDate) > Date.now() && (Date.parse(obj.created) - Date.now()) <= createdDaysBefore*24*3600*1000));    
    } catch (e) {
        res.status(500).send({error: e.message}); 
    }  
};

const getClosedCampaigns = async (req,res) => {
    try {
        const respFromAPI = await getCampaigns();
        const allCampaigns = respFromAPI.data;
        res.send(allCampaigns.filter((obj) => obj.procuredAmount >= obj.totalAmount || Date.parse(obj.endDate) < Date.now()));    
    } catch (e) {
        res.status(500).send({error: e.message});
    }
    
};

module.exports = { getActiveCampaigns, getSortByAttr, getClosedCampaigns };