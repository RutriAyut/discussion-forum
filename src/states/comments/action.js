import api from '../../utils/api';

const ActionType = {
  ADD_COMMENT: 'comments/add',
};

function addCommentActionCenter(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function asyncAddComment({ threadId, content }) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment({ threadId, content });
      dispatch(addCommentActionCenter(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  addCommentActionCenter,
  asyncAddComment,
};
