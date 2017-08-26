module.exports = function(sequelize, DataTypes){
    var subscriberList = sequelize.define("emails",{
        emailAddress: {
            type: DataTypes.STRING,
            validate:{
                isEmail: true
            }
        }, 
    });
    return subscriberList;
};