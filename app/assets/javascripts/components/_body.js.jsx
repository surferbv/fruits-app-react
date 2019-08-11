class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.deleteFruit = this.deleteFruit.bind(this)
        this.addNewFruit = this.addNewFruit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)        
    }

    handleDelete(id){
        fetch(`http://localhost:3000/api/v1/fruits/${id}`, 
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => { 
            // console.log('Item was deleted!')
            this.deleteFruit(id)
          })
      }

      deleteFruit(id){
        newFruits = this.state.fruits.filter((fruit) => fruit.id !== id)
        this.setState({
          fruits: newFruits
        })
      }

    handleFormSubmit(name, description) {
        let body = JSON.stringify({ fruit: { name: name, description: description } })
        fetch('http://localhost:3000/api/v1/fruits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        }).then((response) => { return response.json() })
            .then((fruit) => {
                this.addNewFruit(fruit)
            })

    }
    addNewFruit(fruit) {
        this.setState({
            fruits: this.state.fruits.concat(fruit)
        })
    }


    componentDidMount() {
        fetch('/api/v1/fruits.json')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ fruits: data }) });
    }

    render() {
        return (
            <div>
                <NewFruit handleFormSubmit={this.handleFormSubmit} />
                <AllFruits fruits={this.state.fruits} handleDelete = {this.handleDelete} />                
            </div>
        )
    }
}