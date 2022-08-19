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
            }
         
        },
        {
            timestamps: false,
            tableName: 'communityfree',
            freezeTableName: true,
        }
    );
    return model;    
}

module.exports = Community;