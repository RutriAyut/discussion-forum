import PropTypes from 'prop-types';

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const userShape = {
  ...ownerShape,
  email: PropTypes.string.isRequired,
};

const thread = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const threadItemShape = {
  ...thread,
  totalComments: PropTypes.number.isRequired,
  ownerId: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string,
};

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const detailThread = {
  ...thread,
  owner: PropTypes.shape(ownerShape).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)),
};

const leaderboardsShape = {
  user: PropTypes.shape(userShape),
  score: PropTypes.number,
};

export { ownerShape, userShape, thread, threadItemShape, detailThread, commentShape, leaderboardsShape };
