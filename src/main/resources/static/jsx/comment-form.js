var CommentForm = React.createClass({
    handleSubmit: function ( event ) {

        event.preventDefault();

        var author = this.refs.author.getDOMNode().value.trim();
        var content = this.refs.content.getDOMNode().value.trim();

        // validate
        if (!content || !author) {
            return false;
        }

        this.props.onCommentSubmit({author: author, content: content});
        this.refs.author.getDOMNode().value = "";
        this.refs.content.getDOMNode().value = "";
    },
    render: function () {
        return (
            <form ref="form" className="navbar-form navbar-right" onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input ref="author" placeholder="Your name" className="form-control" />
                </div>
                <div className="form-group">
                    <input ref="content" placeholder="Say something..." className="form-control " />
                </div>
                <button type="submit" className="btn btn-success">Post comment</button>
            </form>
        )
    }
});