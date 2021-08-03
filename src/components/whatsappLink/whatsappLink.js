import React from 'react';
import { Link } from '@material-ui/core';
import { WhatsAppIcon } from './whatsappLink.styles';

const WhatsappLink = ({ link }) => (
    <Link href={link} target='_blank'>
        <WhatsAppIcon />
    </Link>
);

export default WhatsappLink;
