import React from 'react';
import PropType from 'prop-types';
import { userShape } from '../customPropType/shape';
import { Link } from 'react-router-dom';

function NavigationBottom({ authUser, signOut }) {
  return (
    <div className='navigation navigation-bottom d-flex p-2'>
      <button>
        <Link to='/threads' className='navlink'>Threads</Link>
      </button>
      <button>
        <Link to='/leaderboards' className='navlink'>Leaderboards</Link>
      </button>
      {!authUser
        ? <button>
          <Link to='/login' className='navlink'>Login</Link>
        </button>
        : <button onClick={signOut}><div className='navlink'>Logout</div></button>
      }
    </div>);
}

NavigationBottom.propTypes = {
  authUser: PropType.shape(userShape),
  signOut: PropType.func,
};

export default NavigationBottom;
