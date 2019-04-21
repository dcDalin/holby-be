import Sequelize from 'sequelize';
import ENV from '../config';
import Post from './post';
import PostTag from './postTag';
import Tag from './tag';
import User from './user';

const sequelize = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASS, {
  host: ENV.DB_HOST,
  dialect: ENV.DB_DIALECT,
  define: {
    underscored: true,
    freezeTableName: true,
  },
});

const UserModel = User(sequelize, Sequelize);
const PostModel = Post(sequelize, Sequelize);
const TagModel = Tag(sequelize, Sequelize);
const PostTagModel = PostTag(sequelize, Sequelize);

export default sequelize;

export { UserModel, PostModel, TagModel, PostTagModel };
