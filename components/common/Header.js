import React from 'react';
import Styled from 'styled-components';

const Section = Styled.section`
	
    display: flex;
    align-items: center;
    height: 65px;
    padding: 0px 30px;
    background-color: #212121;
    color: #fff;
    .logo-box{
        font-size: 25px;
        display: flex;
        align-items:center;

        
    }
    .spacer{
        flex: 1;
    }

	
`;

function Header() {
	return (
		<Section>
			<div className="logo-box ff-pb">HostGuestPicker</div>
			<div className="spacer"></div>
			<div className="menu-list"></div>
		</Section>
	);
}

export default Header;
