import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { contactContext } from '../Context/ContactContext';
import { Avatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function ContactCard({item}){
    const { deleteContact } = React.useContext(contactContext)
    
  
    
    return (
          <Card sx={{ border: 1, borderColor: '#61DAFB', width: 500, display: 'flex', justifyContent: 'space-around', backgroundColor: 'rgb(32, 32, 32)' }}>
              <Avatar 
                src={item.image}
                sx={{ border: 2, width: 100, height: 100, margin: 2}}
              />
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignSelf: 'center', }}>
              <Typography sx={{fontWeight: 'bold', color: 'white'}}>
                Name: {item.name}
              </Typography>
              <Typography sx={{fontWeight: 'bold', color: 'white'}}>
                Phone: {item.phone}
              </Typography>
              <Typography sx={{fontWeight: 'bold', color: 'white'}}>
                Email: {item.email}
              </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', flexDirection: 'column', alignSelf: 'center'}}>
              <Link to={`/edit/${item.name}/${item.id}`}>
                <IconButton><EditIcon sx={{color: 'white'}}/></IconButton>  
              </Link>
              <IconButton onClick={() => deleteContact(item.id)} size="small"><DeleteIcon sx={{color: 'white'}}/></IconButton>
            </CardActions>
      </Card>
    );
};

