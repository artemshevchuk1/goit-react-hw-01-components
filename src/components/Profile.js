import css from "../index.css"
import PropTypes from 'prop-types';

  export default function Profile({username,tag,location,avatar,statsFollowers,statsViews,statsLikes}){
<div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">{statsFollowers}</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">{statsViews}</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">{statsLikes}</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
  }
  
  Profile.prototype={
    username:PropTypes.string,
    tag:PropTypes.string,
    location:PropTypes.string,
    avatar:PropTypes.string,
    statsFollower:PropTypes.number,
    statsViews:PropTypes.number,
    statsLikes:PropTypes.number,
  }