import React from 'react'
// import { Header } from 'semantic-ui-react';

function MainHeader({title, type='h1'}) {
    return <header as={type}> {title}</header>;
}

export default MainHeader
