import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import NotFound from './NotFound';
import { getVideoSource } from '../actions/index';
import '../assets/styles/components/Player.scss';

const Player = ({ match, playing, getVideoSource, history }) => {
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;

  useLayoutEffect(() => {
    getVideoSource(id);
  }, []);

  return !hasPlaying ? (
    <section className="player">
      <video controls autoPlay>
        <source src={playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => history.goBack()}>
          Regresar
        </button>
      </div>
    </section>
  ) : <NotFound />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = () => {
  return {
    getVideoSource,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
