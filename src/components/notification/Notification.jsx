import React from 'react';
import PropTypes from 'prop-types';
import { ContainerParagraph } from './Notification.styled';

const Notification = ({ message }) => (
  <>
    <ContainerParagraph>{message}</ContainerParagraph>
  </>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
