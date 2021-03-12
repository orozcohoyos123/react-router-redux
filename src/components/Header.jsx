import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions/index';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const headerNavMainText = 'Perfil';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogOut = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to="/">
        <img
          className="header__img"
          src={logo}
          alt="Platzi Video"
        />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt="" />}
          <p>{headerNavMainText}</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href="/">{user.name}</a>
            </li>
          ) :
            null}

          {hasUser ? (
            <li>
              <a href="login" onClick={handleLogOut}>
                Cerrar Sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login">
                Iniciar Sesión
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

Header.propTypes = {
  user: PropTypes.object,
  handleLogOut: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
