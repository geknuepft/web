import React from 'react';
import {FormGroup, FormControl} from 'reactstrap';
import './Forms.css';


function FormFields({id, ...props}) {
    return (
        <FormGroup controlId={id}>
            <FormControl {...props} />
        </FormGroup>
    );
}

const FormContact = () => (
    <div>
        <h2>Kontaktformular</h2>
        <p>Bitte alle mit * gekennzeichneten Felder ausfüllen.</p>
        <form>
            <FormFields
                id="Vorname"
                type="text"
                placeholder="Vorname*"
            />
            <FormFields
                id="Nachname"
                type="text"
                placeholder="Nachname*"
            />
            <FormFields
                id="Vorname"
                type="text"
                placeholder="E-Mail-Adresse*"
            />
            <FormFields
                id="Vorname"
                type="text"
                placeholder="Adresse"
            />
            <FormFields
                id="Vorname"
                type="text"
                placeholder="Telefonnummer"
            />
            <FormFields
                id="Textfeld"
                componentClass="textarea"
                rows={8}
                placeholder="Textfeld"
            />
        </form>
        <p>Ihre Nachricht wird an info@geknüpft.ch gesendet. Sie erhalten auf
            Ihre angegebene E-Mail-Adresse eine Kopie.</p>
        <button type="submit">Nachricht senden</button>
    </div>
);


export default FormContact;
