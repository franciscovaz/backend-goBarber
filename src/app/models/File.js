import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    // Sequelize é a conexão que recebe
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default File;
