import ProductDetialSection from "@/Client/Products/ProductDetialSection";
import ReviewsAboutProds from "@/Client/Products/ReviewsAboutProds";
import ProductReviewForm from "@/Client/Products/ShareReview";
import SimilarProds1 from "@/Client/Products/SimilarProds1";


const page = async ({ params }) => {
    const Data = await params;
    const { productd_id } = Data
    return (
        <div className="flex flex-col pt-10 justify-center items-center">
            <ProductDetialSection productd_id={productd_id} />
            <SimilarProds1 productd_id={productd_id} />
            <ReviewsAboutProds productd_id={productd_id} />
            <ProductReviewForm productd_id={productd_id} />

        </div>
    )
}

export default page
