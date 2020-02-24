import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
  static init(sequelize) {
    // Sequelize é a conexão que recebe
    super.init(
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
        // Não é necessário colocar as FK pois faz-se o relacionamento mais abaixo
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
  }
}

export default Appointment;
