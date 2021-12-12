// import React from 'react';

export const submitForm = async () => {
    const res = await fetch();
    const contact = await res.json();
    return contact;
}