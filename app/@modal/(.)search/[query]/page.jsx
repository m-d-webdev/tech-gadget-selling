
import SearchResult from "./(components)/SearchResult";

const page = async ({ params }) => {
    const { query } = await params;

    return (
        <div>
            <SearchResult search={query} />
        </div>
    )
}

export default page
