import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Rating = ({value, text, color}) => {
  return (
    <div className='rating'>
      <span>
        <FontAwesomeIcon
          icon={value >= 1 ? ['fas', 'star'] : value >= 0.5 ? ['fas', 'star-half-alt'] : ['far', 'star']}
          style={{ color }}
        />
      </span>
      <span>
        <FontAwesomeIcon
          icon={value >= 2 ? ['fas', 'star'] : value >= 1.5 ? ['fas', 'star-half-alt'] : ['far', 'star']}
          style={{ color }}
        />
      </span>
      <span>
        <FontAwesomeIcon
          icon={value >= 3 ? ['fas', 'star'] : value >= 2.5 ? ['fas', 'star-half-alt'] : ['far', 'star']}
          style={{ color }}
        />
      </span>
      <span>
        <FontAwesomeIcon
          icon={value >= 4 ? ['fas', 'star'] : value >= 3.5 ? ['fas', 'star-half-alt'] : ['far', 'star']}
          style={{ color }}
        />
      </span>
      <span>
        <FontAwesomeIcon
          icon={value >= 5 ? ['fas', 'star'] : value >= 4.5 ? ['fas', 'star-half-alt'] : ['far', 'star']}
          style={{ color }}
        />
      </span>

      <span className='ms-2'>{text && text}</span>
    </div>
  );
}

Rating.defaultProps = {
  color: '#FDCC0D'
}
export default Rating
