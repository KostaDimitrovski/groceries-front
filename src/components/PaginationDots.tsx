import React from 'react';
import { styled } from '@mui/system';

interface DotProps {
    active: boolean;
}

const Dot = styled('div')<DotProps>(({ theme, active }) => ({
    width: 10,
    height: 10,
    borderRadius: '50%',
    margin: '0 5px',
    backgroundColor: active ? theme.palette.primary.main : '#ccc',
}));

const DotsContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
});

interface PaginationDotsProps {
    total: number;
    currentIndex: number;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({ total, currentIndex }) => {
    const dots = [];

    for (let i = 0; i < total; i++) {
        dots.push(<Dot key={i} active={i === currentIndex} />);
    }

    return <DotsContainer>{dots}</DotsContainer>;
};

export default PaginationDots;
