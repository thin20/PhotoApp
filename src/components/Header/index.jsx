import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.css';

Header.propTypes = {

};

function Header(props) {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col className="col-6 col-md-6">
                        <a
                            className="header__link header__title"
                            href="https://github.com/thin20/PhotoApp"
                            target="_blank"
                            rel='noopener noreferrer'
                        >
                            Easy Frontend
                        </a>
                    </Col>

                    <Col xs="auto">
                        <NavLink
                            className="header__link"
                            to="/sign-in" activeClassName="header__link--active"
                        >
                            Sign In
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;