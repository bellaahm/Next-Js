import { getSession, signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const Index = () => {

    // Client Side Rendering (CSR)
    // First We Want To fetch data from the api
    const [dashboard, setDashBoard] = useState(null);
    useEffect(() => {
        async function fetchingData() {
            const res = await fetch("http://localhost:1000/dashboard");
            const data = await res.json();
            setDashBoard(data)
        }
        fetchingData()
    }, [])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const securePage = async () => {
            const session = await getSession()
            if (!session)
                signIn()
            else setLoading(false)
        }
        securePage()
    }, [])
    if (loading || !dashboard ) return <div><div className="mt-5 text-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
</div>
    // if (!dashboard) return <div><div class="mt-5 text-center">
    //     <div class="spinner-border" role="status">
    //         <span class="visually-hidden">Loading...</span>
    //     </div>
    // </div></div>
    return (
        <div className='container mt-5'>
            <table className="table table-borderless table-info ">
                <thead>
                    <tr>
                        <th className='table-secondary' scope="col">Likes</th>
                        <th className='table-secondary' scope="col">Followers</th>
                        <th className='table-secondary' scope="col">Posts</th>
                        <th className='table-secondary' scope="col">Following</th>
                    </tr>
                </thead>
                <tbody>
                    {dashboard.map(d => <tr key={d.likes} >
                        <th scope="row">{d.likes}</th>
                        <td>{d.followers}</td>
                        <td>{d.posts}</td>
                        <td>{d.following}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default Index;
