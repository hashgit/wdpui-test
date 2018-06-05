import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BackDrop = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

const ModalBox = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  padding: 20px;
  display: flex;
  position: relative;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const ShortDetailsContainer = styled.div`
  font-size: 0.6rem;
  width: 30%;
  word-wrap: break-word;
`;

const LongDetailsContainer = styled.div`
  padding: 20px;
`;

const AvatarContainer = styled.div`
  border: 2px solid;
  max-width: 100px;
`;

const InfoContainer = styled.div`
  width: 70%;
`;

const Avatar = styled.img`
  width: 100%;
`;

const CloseButton = styled.span`
  display: absolute;
  font-size: 1.3rem;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 10px;
`;

export default class Modal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shorted = (bio) => {
    if (bio) {
      return bio.length > this.briefLength ? bio.substr(0, this.briefLength) : bio;
    }
    return null;
  }

  render() {
    const { employee, open, onClose } = this.props;
    return open ? (<BackDrop onClick={onClose}>
      <ModalBox>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ShortDetailsContainer>
          <AvatarContainer>
            <Avatar src={employee.avatar} />
          </AvatarContainer>
          <div>
            {employee.jobTitle}
          </div>
          <div>
            Age: {employee.age}
          </div>
          <div>
            Joined: {employee.dateJoined}
          </div>
        </ShortDetailsContainer>
        <LongDetailsContainer>
          <div style={{ marginTop: '35px' }}>
            {employee.firstName} {employee.lastName}
            <hr />
          </div>
          <InfoContainer>
            {employee.bio}
          </InfoContainer>
        </LongDetailsContainer>
      </ModalBox>
    </BackDrop>) : null;
  }
}

Modal.propTypes = {
  employee: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
