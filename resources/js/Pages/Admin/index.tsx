import React from "react";
import Layout from '../../components/common/layout'

interface Props {
    referrals: Array<any>
}

const ReferralsPage:React.FC<Props> = ( {referrals} ) => {
    return (
        <Layout>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h3>Referral Listing</h3>                 
                        </div>

                        <div className="card-body">
                            <table style={{width:'100%'}}>
                                <thead>
                                    <tr>
                                        <th>Referrer</th>
                                        <th>Email</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {referrals.length>0 && referrals.map((referral,index) => {
                                        return (
                                            <tr>
                                                <td>{referral.referrer.name}</td>
                                                <td>{referral.email}</td>
                                                <td>{referral.created_at}</td>
                                                <td>{referral.status}</td>
                                            </tr>
                                        )
                                    })}
                                    
                                </tbody>
                            </table>
                        </div>    
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ReferralsPage