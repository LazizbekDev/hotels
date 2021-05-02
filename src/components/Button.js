import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    background-color: ${({ primary }) => (primary ? '#000d1a' : '#CD853F')};
    white-space: nowrap;
    outline: none;
    border: 1px solid #000;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
    color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
    font-sie: ${({ big }) => (big ?'20px': '14px')};
    $:hover {
        transform: translateY(-2px);
    }
`