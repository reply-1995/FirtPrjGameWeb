const Comment = (Sequelize, DataTypes ) =>{
    const model = Sequelize.define(
        'comment',
        {
            idx:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            parentidx:{
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            category:{
                type: DataTypes.STRING(10),
                allowNull: false,
                defaultValue: 'free',
            },
            id:{
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            content:{
                type: DataTypes.STRING(250),
                allowNull: false
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
            tableName: 'comment',
            freezeTableName: true,
        },
    );
    return model;    
}

module.exports = Comment;