const PostTag = (sequelize, DataTypes) => {
  return sequelize.define('post_tags', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    tagId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  });
};

export default PostTag;
