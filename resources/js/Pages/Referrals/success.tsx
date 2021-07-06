import React from 'react'
import Layout from '../../components/common/layout'

interface Props {}

const ReferralSuccessPage:React.FC<Props> = () => {
    return (
        <Layout>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h3>Referral Succesful!</h3>                   
                        </div>
                        <div className="card-body justify-content-center">
                        <h5>An email is submitted to your referral and you will be informed when they register to the ContactOut</h5>
                            <div className="col-md-6 offset-md-4">
                                <button className="btn btn-primary">
                                    Make New Referrals
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ReferralSuccessPage
