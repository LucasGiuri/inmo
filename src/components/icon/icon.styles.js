import styled from "styled-components";

export const Img = styled.img`
    max-width: ${(p) => (p.size === 'L' ? '40px': '20px' ) };
`;