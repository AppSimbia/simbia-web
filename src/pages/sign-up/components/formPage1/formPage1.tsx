import React, { useEffect, useState } from 'react';
import Button from '../../../../components/button/button';
import SelectInput from '../../../../components/selectInput/selectInput';
import TextInput from '../../../../components/textInput/textInput';
import { IndustryType } from '../../../../interfaces/models';
import styles from './formPage1.module.css';

interface FormPage1Props {
    industryTypes: IndustryType[] | null;
    fields?: FormPage1Fields | null;
    onNextPage: (fields: FormPage1Fields) => void;
};

export interface FormPage1Fields {
    industryName: string;
    cnpj: string;
    contactMail: string;
    idIndustryType: number;
    cep: string;
};

function FormPage1({
    industryTypes,
    fields = null,
    onNextPage
}: FormPage1Props) {
    const [industryName, setIndustryName] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [contactMail, setContactMail] = useState("");
    const [idIndustryType, setIdIndustryType] = useState(0);
    const [cep, setCep] = useState("");

    useEffect(() => {
        if (fields) {
            setIndustryName(fields.industryName);
            setCnpj(fields.cnpj);
            setContactMail(fields.contactMail);
            setIdIndustryType(fields.idIndustryType);
            setCep(fields.cep);
        }
    }, []);

    const getFields = (): FormPage1Fields => ({
        industryName,
        cnpj,
        contactMail,
        idIndustryType,
        cep
    });

    function handleNextPage(event: React.FormEvent) {
        event.preventDefault();

        onNextPage(getFields());
    }
        
    return (
        <form
            className={styles.form}
            onSubmit={handleNextPage}
        >
            <TextInput
                placeholder='Nome da Indústria'
                value={industryName}
                onChange={setIndustryName}
                size='lg'
            />
            <TextInput
                placeholder='CNPJ'
                value={cnpj}
                onChange={setCnpj}
                size='lg'
            />
            <TextInput
                placeholder='E-mail de contato'
                value={contactMail}
                onChange={setContactMail}
                size='lg'
            />
            <SelectInput
                placeholder='Tipo da Indústria'
                value={idIndustryType}
                options={
                    (industryTypes || []).map(type => ({
                        value: type.id,
                        label: type.industryTypeName
                    }))
                }
                onChange={(value) => {setIdIndustryType(Number(value))}}
                size='lg'
            />
            <TextInput
                placeholder='CEP'
                value={cep}
                onChange={setCep}
                size='lg'
            />

            <Button
                label='Continuar'
                size='lg'
                type='submit'
            />
        </form>
    );
}

export default FormPage1;