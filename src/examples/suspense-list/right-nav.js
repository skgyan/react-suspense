import React from 'react'
import * as cn from './right-nav.module.css'

const friends = ['Charizard', 'Ditto', 'Mew', 'Mewtwo', 'Pikachu']

function RightNav() {
  return (
    <div className={cn.root}>
      <div>
        <div className={cn.checkSplitTitle}>Check Split</div>
        <div>Go out to eat with your friends and split the check.</div>
        <div className={cn.cafeContainer}>
          <img src="/img/pokemon-cafe.jpg" alt="pokemon cafe" />
        </div>
      </div>
      <div>
        <div className={cn.friendTitle}>Friends</div>
        <ul className={cn.friendList}>
          {friends.map(friend => (
            <li key={friend}>
              <Friend name={friend} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Friend({name}) {
  return (
    <a href="#" className={cn.friendLink}>
      <div className={cn.friendPhotoContainer}>
        <img
          src={`/img/pokemon/${name.toLowerCase()}.jpg`}
          alt={name}
          className={cn.friendPhoto}
        />
      </div>
      <span className={cn.friendName}>{name}</span>
    </a>
  )
}

export default RightNav

/*
eslint
  jsx-a11y/anchor-is-valid: 0 
*/
