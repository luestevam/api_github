import { Container, Text } from './styles';

const MainContainer = props => (
    <Container>
        {props.children}
        <Text>by Luciana Estevam</Text>
    </Container>
    
);

export default MainContainer;