import React, {useState} from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';

import AdmCursos from './admCursos';

function Admin(){
    const [key, setKey] = useState('cursos');

    return(
        <Container>
            <Tabs activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey='cursos' title="Cursos">
                    <AdmCursos />
                </Tab>

            </Tabs>
        </Container>
    )
}

export default Admin;