module.exports = function (sequelize, DataTypes) {
    var Score = sequelize.define("Score", {
        game: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        }
    });

    Score.associate = function (models) {
        Score.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Score;
};