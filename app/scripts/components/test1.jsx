// var MyComponent = React.createClass({
// 	render: function() {
// 		return (
// 			<h2>My Name is Rahul</h2>
// 		);
// 	}
// });

// // 2 params -> what componenet, where?
// React.render(<MyComponent/>, document.getElementById("content"));


var root = <ul className="my-list">
             <li><b>Hello world from reactJS</b></li>
           </ul>;
ReactDOM.render(root, document.getElementById('content'));