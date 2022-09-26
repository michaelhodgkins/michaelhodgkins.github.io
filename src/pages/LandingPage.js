import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box'
import { Container } from '@mui/system';
import { green } from '@mui/material/colors';
import ProjectCards from '../components/Projects/Projects';
function LandingPage() {
    
    return (
<Container maxWidth="l">    
<Box sx={{display: 'flex',flexDirection: 'column' , alignItems: 'center', margin: 1}}>
    <Avatar sx={{bgcolor: green[300]}}>MH</Avatar>
    <h2> Welcome to my Portfolio</h2>
</Box>
<Container sx={{display: 'flex', flexFlow: "row wrap", justifyContent: 'center'}}>
    <ProjectCards />

</Container>
</Container> 
    );
}

export default LandingPage;