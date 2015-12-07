import React          from 'react';
import ReactDOM       from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import CommentForm from './comment-form';
import CommentList from './comment-list';

if (typeof window !== 'undefined') {
  ReactDOM.render(<CommentForm onCommentSubmit={ function(comment) {
   $.post('/', comment, null, 'json');
  } }/>, document.getElementById("navbar"));

  $.getJSON('/', function( data ) {
    ReactDOM.render(<CommentList comments={ data }/>, document.getElementById("comments"));
  });
}

function renderCommentList(comments) {
  return ReactDOMServer.renderToString(React.createElement(CommentList, { comments: comments} ));
}

function renderCommentForm() {
  return ReactDOMServer.renderToString(React.createElement(CommentForm));
}

module.exports = {
  renderCommentList: renderCommentList,
  renderCommentForm: renderCommentForm
};
