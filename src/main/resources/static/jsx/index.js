import React from 'react';
import CommentForm from './comment-form';
import CommentList from './comment-list';

if (typeof window !== 'undefined') {
  React.render(<CommentForm onCommentSubmit={ function(comment) {
   $.post('/', comment, null, 'json');
  } }/>, document.getElementById("navbar"));

  $.getJSON('/', function( data ) {
    React.render(<CommentList comments={ data }/>, document.getElementById("comments"));
  });
}

function renderCommentList(comments) {
  return React.renderToString(React.createElement(CommentList, { comments: comments} ));
}

function renderCommentForm() {
  return React.renderToString(React.createElement(CommentForm));
}

module.exports = {
  commentList: renderCommentList,
  commentForm: renderCommentForm
};
