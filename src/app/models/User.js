import Sequelize, { Model } from 'sequelize';

import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    // Sequelize é a conexão que recebe
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  // Adicionar fk para avatar
  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id' });
  }

  // Método para checkar a password
  // Fazer aqui pois já temos o bcrypt importado
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
