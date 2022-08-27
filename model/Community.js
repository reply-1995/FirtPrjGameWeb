const Community = (Sequelize, DataTypes ) =>{
    const model = Sequelize.define(
        'communityfree',
        {
            idx:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            id:{
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            category:{
                type: DataTypes.STRING(10),
                allowNull: false,
                defaultValue: 'free',
            },
            title:{
                type: DataTypes.STRING(100),
                allowNull: false
            },
            content:{
                type: DataTypes.TEXT('medium'),
                allowNull: false,
            },
            clicked:{
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            isdeleted:{
                type: DataTypes.STRING(1),
                allowNull: true,
                defaultValue: 'N',
            },
            create_date:{
                type: DataTypes.DATE,
                allowNull: false
            },
            RPimgsrc:{
                type: DataTypes.STRING(100),
                allowNull: true,
            }
         
        },
        {
            timestamps: false,
            tableName: 'communityfree',
            freezeTableName: true,
        },
    );
    return model;    
}

module.exports = Community;