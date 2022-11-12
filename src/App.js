import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const intialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    userDetails: intialUserDetailsList,
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
    console.log(event.target.value)
  }

  deleteFunction = uniqueNo => {
    const {userDetails} = this.state

    const resultUserDetailsList = userDetails.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )

    this.setState({userDetails: resultUserDetailsList})
  }

  render() {
    const {searchInput, userDetails} = this.state

    const searchResults = userDetails.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input onChange={this.onSearch} type="search" value={searchInput} />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              deleteFunction={this.deleteFunction}
              userDetails={eachUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
