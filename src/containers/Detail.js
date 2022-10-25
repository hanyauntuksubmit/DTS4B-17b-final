import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const Detail = () => {
    const location = useLocation();

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 5,
        }}>
            <Box sx={{
                mt: 5,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Typography component="div" variant="h5">
                    {location.state.title}
                </Typography>
            </Box>
            <Box sx={{
                mt: 5,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <img src={location.state.image} width="600" height="400" alt="Gambar" />
            </Box>
            <Box sx={{
                mt: 5,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                Categories:
            </Box>
            <Box sx={{
                mt: 5,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                {location.state.categories.map((todo, index) => {
                    return (
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                        - {todo}
                        </Typography>
                    );
                })}
            </Box>
            <Box sx={{
                mt: 5,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Typography component="div" variant="h6">
                    {location.state.description}
                </Typography>
            </Box>
        </Box>
    );
}

export default Detail;
