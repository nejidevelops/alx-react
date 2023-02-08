import React, { Component } from 'react'
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(bodySectionStyles.bodySection)}>
        <BodySection {...this.props}/>
      </div>
    );
  }
}

const bodySectionStyles = StyleSheet.create({
  bodySection: {
    marginBottom: "40px",
  }
})

BodySectionWithMarginBottom. defaultProps = {
	children: <React.Fragment />
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

export default BodySectionWithMarginBottom;
