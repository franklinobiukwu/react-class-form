import React from "react"

class ClassForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name ] : e.target.value
		})
	}

	handleSubmit=(e)=>{
	e.preventDefault()
		let details={
			name:this.state.name,
			email: this.state.email,
			password: this.state.password
		} 
		console.log(details)
	}


	render(){
		return (
			<div className="w-3xl rounded-lg overflow-hidden w-2/6 max-w-md shadow-xl bg-white">
				<form className="flex flex-col p-10 text-gray-900" onSubmit={this.handleSubmit}>
					<input type="text"
						name="name"
						className="mb-2 rounded-md w-9/6 px-2 py-1 
						border shadow-sm focus:outline focus:outline-1 
						focus:outline-purple-400"
						placeholder="name"
						onChange={ this.handleChange }
					/>
					<input type="email"
						name="email"
						className="mb-2 rounded-md px-2 py-1 
						border shadow-sm focus:outline focus:outline-1 
						focus:outline-purple-400"
						placeholder="email"
						onChange={ this.handleChange }
					/>
					<input type="password"
						name="password"
						className="mb-6 rounded-md px-2 py-1 border shadow-sm
						focus:outline focus:outline-1 
						focus:outline-purple-400"
						placeholder="password"
						onChange={ this.handleChange }
					/>
					<div className="flex justify-center">
						<button type="submit" 
							className="border border-purple-800
							text-purple-800 rounded-lg 
							text-lg font-normal px-4 py-1 
							shadow-md hover:bg-purple-200">Submit</button>
					</div>
				</form>
			</div>
		)
	}
}

export default ClassForm
