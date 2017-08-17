module.exports = function(sequelize, DataTypes) {
    var emailsList = sequelize.define("emails_list", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$",'i']
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    });
    return emailsList;
};