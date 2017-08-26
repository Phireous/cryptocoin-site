module.exports = function(sequelize, DataTypes){
    var CurrencyInfo = sequelize.define("ricolist", {
        successRating: {
            type: DataTypes.STRING,
        },
        dateLastEvaluated: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING,
        },
        symbol: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        },
        eventType: {
            type: DataTypes.STRING
        },
        projectType: {
            type: DataTypes.STRING
        },
        eventStartDate: {
            type: DataTypes.STRING
        },
        eventEndDate: {
            type: DataTypes.STRING
        },
        eventCap: {
            type: DataTypes.STRING
        },
        participationMethod: {
            type: DataTypes.STRING
        },
        totalRaised: {
            type: DataTypes.STRING
        },
        totalInvestors: {
            type: DataTypes.STRING
        },
        supply: {
            type: DataTypes.STRING
        },
        growthRate: {
            type: DataTypes.STRING
        },
        percentOfTokensAvailableToMine: {
            type: DataTypes.STRING
        },
        conversionRate: {
            type: DataTypes.STRING
        },
        usdPricePerToken: {
            type: DataTypes.STRING
        },
        tokenPriceBtc: {
            type: DataTypes.STRING
        },
        bonusDiscount: {
            type: DataTypes.STRING
        },
        tokenIssuanceDate: {
            type: DataTypes.STRING
        },
        tradingTimeline: {
            type: DataTypes.STRING
        },
        projectedFinalProjectReleaseDate: {
            type: DataTypes.STRING
        },
        percentageOfTokensHeldInReservePremineOrEarlyFunding: {
            type: DataTypes.STRING
        },
        requirementsToParticipate: {
            type: DataTypes.STRING
        },
        industry: {
            type: DataTypes.STRING
        },
        subIndustry: {
            type: DataTypes.STRING
        },
        consensus: {
            type: DataTypes.STRING
        },
        teamLocation: {
            type: DataTypes.STRING
        },
        foundersPercent: {
            type: DataTypes.STRING
        },
        vesting: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        contractAddress: {
            type: DataTypes.STRING
        },
        officialWebsite: {
            type: DataTypes.STRING
        },
        announcementThread: {
            type: DataTypes.STRING
        },
        blockchainProtocol: {
            type: DataTypes.STRING
        },
        consensusMechanismMining: {
            type: DataTypes.STRING
        },
        programmingLanguage: {
            type: DataTypes.STRING
        },
        postLaunchYearlyInflationRate: {
            type: DataTypes.STRING
        },
        additionalLinksResources: {
            type: DataTypes.STRING
        },
        developerExperienceRating: {
            type: DataTypes.STRING
        },
        socialMediaPresenceRating: {
            type: DataTypes.STRING
        },
        publicTrustRating: {
            type: DataTypes.STRING
        },
        viabilityOfProductRating: {
            type: DataTypes.STRING
        },
        newsExposureRating: {
            type: DataTypes.STRING
        },
    });
    return CurrencyInfo;
};