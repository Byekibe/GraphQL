import { useQuery } from "@apollo/client";
import ClientRow from '../components/ClientRow.jsx';
import { GET_CLIENTS } from "../queries/clientQueries.jsx";
import Spinner from "./Spinner.jsx";

const Clients = () => {
   const { loading, error, data} = useQuery(GET_CLIENTS);

   if (loading) return <Spinner />
   if (error) return <p>Something Went Wrong</p> 

    return (
        <>
            {!loading && !error && (
                <table className="table table-hover mt-3">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.clients.map(client => (
                                <ClientRow key={client.id} client={client} />
                            ))
                        }
                    </tbody>
                </table>
            )}
        </>
    )
};

export default Clients;