import React from "react";
import {Button, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import { StyledBigCard, StyledCardActions } from "../styled/StyledComponents";
import { useNavigate } from "react-router-dom";

interface CategoryBigCardProps {
    image: string;
    title: string;
    description: string;
    route?: string;
}

const CategoryBigCard: React.FC<CategoryBigCardProps> = ({ image, title, description, route }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (route) navigate(route);
    };

    return (
    <Grid item xs={10} sm={6} md={4}>
        <StyledBigCard>
            <CardMedia sx={{ height: 150 }} image={image} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <StyledCardActions>
                <Button size="small" onClick={handleClick}>
                    направи нарачка
                </Button>
            </StyledCardActions>
        </StyledBigCard>
    </Grid>


    );
};

export default CategoryBigCard;
