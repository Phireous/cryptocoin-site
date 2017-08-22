module.exports = function(sequelize, DataTypes){
    var CurrencyInfo = sequelize.define("ricolist", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        successRating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: 5,
                min: 0
            }
        },
        website: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING
        },
        teamLocation: {
            type: DataTypes.STRING
        }

    });
    return CurrencyInfo;
};