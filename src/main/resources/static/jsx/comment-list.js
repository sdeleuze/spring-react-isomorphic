var CommentList = React.createClass({
    getInitialState: function () {
        return this.props;
    },
    componentDidMount: function() {
        var eventSource = new EventSource("/sse/updates");
        var self = this;
        eventSource.onmessage = function(e) {
            var comment = JSON.parse(e.data);
            var comments = self.state.comments;
            var newComments = comments.concat([comment]);
            self.setState({comments: newComments});
        };
    },
    render: function () {
        var commentNodes = this.state.comments.map(function ( comment ) {
            return <Comment author={ comment.author } content={ comment.content } key={ comment.id } />
        });

        return (
            <div className="comment-list">
                { commentNodes }
            </div>
        )
    }
});