import axios from 'axios';
import Card from '../card/Card';
import { useQuery } from 'react-query';
import { ThreeDots } from 'react-loader-spinner'; // استيراد الـ Loader

export default function RecentProducts() {
    async function getRecentProducts() {
        return await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
    }

    const { data, isLoading } = useQuery({
        queryKey: 'RecentProducts',
        queryFn: getRecentProducts,
    });

    const RecentProductsData = data?.data.data;

    return (
        <>
            {isLoading ? ( 
                <div className="flex justify-center items-center h-screen">
                    <ThreeDots
                        height={80}
                        width={80}
                        radius={9}
                        color="#4fa94d"
                        ariaLabel="loading"
                    />
                </div>
            ) : (
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
                        {RecentProductsData?.map((prod) => (
                            <div key={prod.id} className="px-4">
                                <Card product={prod} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}