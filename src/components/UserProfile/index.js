import './index.css'

const UserProfile = props => {
  const {userDetails, deleteFunction} = props

  const {imageUrl, name, role, uniqueNo} = userDetails

  const onDelete = () => {
    deleteFunction(uniqueNo)
  }

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
        <button onClick={onDelete} type="button">
          Delete
        </button>
      </div>
    </li>
  )
}
export default UserProfile
