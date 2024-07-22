import React, {useEffect, useState} from "react";
import {
    Button,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
    Box
} from "@mui/material";
import {StyledCardActions, StyledSmallCard} from "../styled/StyledComponents";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useSelector} from "react-redux";
import {RootState} from "../store/root-reducer";

interface ProductCardProps {
    product: any;
    addProduct: (product: any) => void;
    removeProduct: (product: any) => void;
    addToWishlist: (product: any) => void;
    removeFromWishlist: (product: any) => void;
}

const calculateNewPrice = (price: number, discount: string) => {
    const discountPercentage = parseFloat(discount) / 100;
    return price - (price * discountPercentage);
};

const ProductCard: React.FC<ProductCardProps> = ({product, addProduct, removeProduct, addToWishlist, removeFromWishlist}) => {
    const [quantity, setQuantity] = useState(0);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const wishlistItems = useSelector((state: RootState) => state.wishlist.wishlistItems);

    const handleIncrease = () => {
        setQuantity(prev => {
            const newQuantity = prev + 1;
            addProduct(product);
            return newQuantity;
        });
    };

    const handleDecrease = () => {
        setQuantity(prev => {
            const newQuantity = prev - 1;
            if (newQuantity > 0) {
                removeProduct(product);
            } else {
                removeProduct(product);
                return 0;
            }
            return newQuantity;
        });
    };

    const handleAddToCart = () => {
        setQuantity(1);
        addProduct(product);
    };

    const handleToggleWishlist = () => {
        if (isInWishlist) {
            removeFromWishlist(product);
        } else {
            addToWishlist(product);
        }
        setIsInWishlist(!isInWishlist);
    };
    useEffect(() => {
        setIsInWishlist(isInWishlist);
    }, [wishlistItems, product]);

    return (
        <StyledSmallCard sx={{position: "relative"}}>
            <StyledCardActions>
                <CardMedia
                    component="img"
                    image={"https://chemwatch.net/wp-content/uploads/2021/11/image-6.jpeg"}
                    alt={product.name}
                    sx={{width: '100%'}}
                />
                <IconButton size={"small"} onClick={handleToggleWishlist}
                            sx={{
                                position: 'absolute',
                                top: 4,
                                right: 2,
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: 'white',
                                }
                            }}
                >

                    {wishlistItems.find((wishItem) => wishItem.id === product.id) ? <FavoriteIcon fontSize={"small"} color="error"/> : <FavoriteBorderIcon fontSize={"small"}/>}
                </IconButton>
                {parseFloat(product.discount) > 0 ? (
                    <Typography
                        variant="body2"
                        color="error"
                        sx={{
                            position: 'absolute',
                            top: 4,
                            left: 4,
                            backgroundColor: '#FFEBEE',
                            padding: '2px 4px',
                            borderRadius: '4px',
                        }}
                    >
                        -{product.discount}
                    </Typography>
                ) : null}
            </StyledCardActions>

            <CardContent sx={{paddingBottom: '15px'}}>
                <Typography component="div" display="flex" sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    font: 'bold'
                }}>
                    {product.name}: {product.description}
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {product.company.name} - {product.company.location}
                </Typography>

                <Typography variant="body2" color="text.primary">
                    {parseFloat(product.discount) > 0 ? (
                        <Typography>
                            {calculateNewPrice(product.price, product.discount).toFixed(0)} ден. <span
                            style={{textDecoration: 'line-through'}}>{product.price} ден.</span>
                        </Typography>
                    ) : <Typography color="text.primary">{product.price.toFixed(0)} ден.</Typography>}
                </Typography>
            </CardContent>
            <StyledCardActions
                sx={{
                    display: 'flex', alignItems: 'flex-end', justifyContent : "flex-end"
                    , paddingTop: '4px'
                }}>
                {quantity > 0 ? (
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <IconButton onClick={handleDecrease} size="small">
                            <RemoveIcon fontSize="small"/>
                        </IconButton>
                        <Typography variant="body2" sx={{mx: 0.1}}>
                            {quantity}
                        </Typography>
                        <IconButton onClick={handleIncrease} size="small">
                            <AddIcon fontSize="small"/>
                        </IconButton>
                    </Box>
                ) : (
                    <Button onClick={handleAddToCart}
                            variant="contained"
                            size={"small"}
                            sx={{
                                backgroundColor: '#5AC268',
                                '&:hover': {
                                    backgroundColor: '#4E9B56',
                                },
                                textTransform: "none"
                            }}
                    >
                        додади
                    </Button>
                )}
            </StyledCardActions>
        </StyledSmallCard>
    );
}

export default ProductCard;
