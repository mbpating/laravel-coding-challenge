import React from "react";

interface Props {
    referrals: Array<any>
}

const ReferralsPage:React.FC<Props> = ( {referrals} ) => {
    return <div>
        <table>
            <thead>
                <th>Email Address date, status</th>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>    
}

export default ReferralsPage