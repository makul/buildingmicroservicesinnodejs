var ReactPage = function(){};

ReactPage.prototype.DrawTable = function(data){
	ReactDOM.render(
		<DataTable data={data}/>
		,
		document.getElementById("DataTableContainer")
	);
};

var reactPage = new  ReactPage();

class DataTable extends React.Component{
	render(){	
		var count = this.props.data.length;
		var rows = [];
		
		for(var i = 0; i < count; i++){
			rows.push(<DataRow item={this.props.data[i]}/>);
		};
		return (
			<table class="table table-striped">
				<thead>
					<tr>
						<th>Message</th>
						<th>Number</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
};

class DataRow extends React.Component{
	render(){
		return(
			<tr>
				<td>{this.props.item.Message}</td>
				<td>{this.props.item.PhoneNumber}</td>
			</tr>
		);
	}
}


