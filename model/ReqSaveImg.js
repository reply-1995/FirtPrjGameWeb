const ReqSaveImg = (Sequelize, DataTypes ) =>{
    const model = Sequelize.define(
        'reqSaveImg',
        {
            idx:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            boardidx:{
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            category:{
                type: DataTypes.STRING(10),
                allowNull: false,
                defaultValue: 'screenshot',
            },
            id:{
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            create_date:{
                type: DataTypes.DATE,
                allowNull: false
            },
            filename:{
                type: DataTypes.STRING(50),
                allowNull: true,
            }
         
        },
        {
            timestamps: false,
            tableName: 'reqSaveImg',
            freezeTableName: true,
        },
    );
    return model;    
}

module.exports = ReqSaveImg;