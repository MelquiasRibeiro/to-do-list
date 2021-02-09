module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      finished: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable('tasks'),
};
