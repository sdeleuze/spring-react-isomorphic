var Comment = React.createClass({
    handleClick: function(event) {
        alert(this.props.content);
    },
    render: function () {
        return (
            <div className="col-md-4">
                <h2>{ this.props.author }</h2>
                <p>{ this.props.content } </p>
                <p><a className="btn btn-default" href="#" role="button" onClick={ this.handleClick }>View details &raquo;</a></p>
            </div>
         )
    }
});