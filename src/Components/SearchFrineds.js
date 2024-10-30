import React, { useState } from 'react';
import {Container, Form, ListGroup} from 'react-bootstrap';

function SearchFriends() {
    const messNames = [
        'Mess One',
        'Mess Two',
        'Mess Three',
        'Mess Four',
        'Another Mess',
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter the list of mess names based on the search term
    const filteredMessNames = messNames.filter(mess =>
        mess.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className="mt-5">
            <h4 className="mt-6 text-center">Search another mess</h4>
            <Form.Control
                type="text"
                placeholder="Search for a mess name..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="mb-3 mt-3"
            />
            {searchTerm && filteredMessNames.length > 0 && ( // Only show list if there is a search term and results
                <ListGroup>
                    {filteredMessNames.map((mess, index) => (
                        <ListGroup.Item key={index}>{mess}</ListGroup.Item>
                    ))}
                </ListGroup>
            )}
            {/* Optionally, you can show a message when no results are found */}
            {searchTerm && filteredMessNames.length === 0 && (
                <div>No results found for "{searchTerm}"</div>
            )}
        </Container>
    );
}

export default SearchFriends;
