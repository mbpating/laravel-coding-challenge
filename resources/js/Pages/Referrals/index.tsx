import React, { HtmlHTMLAttributes, useState } from 'react'
import Layout from '../../components/common/layout'
import { ReactMultiEmail, isEmail } from 'react-multi-email'
import 'react-multi-email/style.css'
import { Inertia } from '@inertiajs/inertia'
import {usePage} from '@inertiajs/inertia-react'

interface Props {
    emails: string[]
}

const ReferralsPage:React.FC<Props> = ({emails}) => {

    const {errors} = usePage().props

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        Inertia.post('refer',{emails: JSON.stringify(emails)},
            {
                errorBag: 'referForm'
            }
        );
    }

    return (
        <Layout>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h3>Refer a Friend</h3>
                            <h5>Invite your friends to use ContactOut. Enter email addresses below</h5>                      
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group row">
                                    <div className="col-md-10">
                                        <ReactMultiEmail
                                            emails={emails}
                                            onChange={(_emails: string []) => {
                                                emails = _emails
                                            }}
                                            validateEmail={email => {
                                                return isEmail(email); // return boolean
                                            }}
                                            getLabel={(
                                                email: string,
                                                index: number,
                                                removeEmail: (index: number) => void,
                                            ) => {
                                                return (
                                                    <div data-tag key={index}>
                                                    {email}
                                                    <span data-tag-handle onClick={() => removeEmail(index)}>
                                                        ×
                                                    </span>
                                                    </div>
                                                );
                                            }}
                                        />
                                        {errors.referForm && <span>{errors.referForm.emails}</span>}
                                    </div>
                                    <div className="col-md-2">
                                        <button type="submit">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )    
}

export default ReferralsPage