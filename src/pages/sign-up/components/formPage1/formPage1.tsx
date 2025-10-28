import React, { useEffect, useState } from 'react';
import Button from '../../../../components/button/button';
import SelectInput from '../../../../components/selectInput/selectInput';
import TextInput from '../../../../components/textInput/textInput';
import { CreateIndustry, IndustryType } from '../../../../interfaces/models';
import styles from './formPage1.module.css';
import { LocationData } from '../../../../interfaces/models/locationData';
import { getLocationData } from '../../../../apiIntegration/services/cepService';

interface FormPage1Props {
    industryTypes: IndustryType[] | null;
    fields?: Partial<CreateIndustry> | null;
    onNextPage: (fields: Partial<CreateIndustry>) => void;
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
    const [city, setCity] = useState("");

    useEffect(() => {
        setIndustryName(fields?.industryName || "");
        setCnpj(fields?.cnpj || "");
        setContactMail(fields?.contactMail || "");
        setIdIndustryType(fields?.idIndustryType || 0);
        setCep(fields?.cep || "");
    }, []);

    const getFields = (): Partial<CreateIndustry> => ({
        industryName,
        cnpj,
        contactMail,
        idIndustryType,
        cep,
        city
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