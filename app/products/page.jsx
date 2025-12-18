
import FilterProdContext from "@/context/FiltersProdContext"
import { FilterSidebar } from "./(components)/SideBare"
import TopBare from "./(components)/TopBare"
import ListProds from "./(components)/ListProds"

const page = () => {
    return (
        <FilterProdContext>
            <div className="min-h-screen p-3 w-full  pt-10 flex gap-4 items-start">

                <FilterSidebar />

                <div className="ml-12 md:ml-0 w-full ">

                    <TopBare />
                    <ListProds />

                </div>

            </div>
        </FilterProdContext>
    )
}

export default page
