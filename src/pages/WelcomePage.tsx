import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { UniTalkRoute } from '../constants';
import { Link } from 'react-router-dom';

const WelcomePage: React.FC = () => {
    return (
        <Container>
            <Typography variant="h1">Welcome to My App</Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to={UniTalkRoute.Operators}
            >
                Go to Operators Page
            </Button>
        </Container>
    );
};

export default WelcomePage;
