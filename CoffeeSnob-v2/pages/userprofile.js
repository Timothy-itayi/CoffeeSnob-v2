import React from 'react';
import styled from 'styled-components/native';
import { Button , TouchableOpacity } from 'react-native';
import cafeCat from '../assets/profileimageicon/cafeCat.jpeg'
const Container = styled.View`
  flex: 1;

  background-color: #fff;
  alignItems: center;

`;

const ProfileImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Caption = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
`;

const TagContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  marginTop: 30px;
`;

const Tag = styled.Text`
  background-color: #ddd;
  padding: 5px 10px;
  border-radius: 20px;
  margin-right: 10px;
`;


const UserProfile = () => {
  const [username, setUsername] = React.useState('John Doe');
  const [caption, setCaption] = React.useState('Coffee Lover');

  const handleEditProfile = () => {
    // Implement edit profile logic here
  };

  return (
    <Container>
      <ProfileImage source={cafeCat} />
      <Title>{username}</Title>
      <Caption>{caption}</Caption>
      <TouchableOpacity style={{alignItems: 'flex-end'}}>
      <Button title="Edit Profile" onPress={handleEditProfile} />
      </TouchableOpacity>
     
      <TagContainer>
        <Tag>Hamilton</Tag>
        <Tag>Auckland</Tag>
        <Tag>Melbourne</Tag>
      </TagContainer>
    
      {/* Display the user's saved cafe cards here */}
    </Container>
  );
};

export default UserProfile;