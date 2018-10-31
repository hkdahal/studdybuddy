// enum constants
export const DISLIKED = 'DISLIKED'
export const CONFIRMED = 'CONFIRMED'
export const LIKED = 'LIKED'
export const NOT_DECIDED = 'NOT_DECIDED'

// action constants
export const LEAVE_GROUP = 'LEAVE_GROUP'
export const CONNECT_WITH_USER = 'CONNECT_WITH_USER'
export const DISLIKED_USER = 'DISLIKED_USER'

// user profile pics
export const randomPic = id => {
  const base_url = "https://react.semantic-ui.com/images/avatar/large/"
  const names = ['ade.jpg', 'matthew.png', 'chris.jpg', 'christian.jpg', 'daniel.jpg', 'elliot.jpg', 'helen.jpg']
  return base_url + names[id%names.length]
}
