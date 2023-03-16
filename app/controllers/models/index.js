const Plat = require('./menu');
const Admin = require('./admin');
const Avis = require('./avis');

Admin.hasMany(Plat, {
  foreignKey: 'admin_id',
  as: 'plats',
});

Plat.belongsTo(Admin, {
  foreignKey: 'admin_id',
  as: 'admin',
});

module.exports = { Plat, Admin, Avis };
