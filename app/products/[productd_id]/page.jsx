import ProductDetialSection from "@/Client/Products/ProductDetialSection";
import ReviewsAboutProds from "@/Client/Products/ReviewsAboutProds";
import ProductReviewForm from "@/Client/Products/ShareReview";
import SimilarProds1 from "@/Client/Products/SimilarProds1";
const product = {
    id: "red-gaming-chair-001",
    title: "Red Gaming Chair",
    price: 90.00,
    oldPrice: 100.00,
    rating: 4.9,
    reviewsCount: 215,
    inStock: true,
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    colors: ["#000000", "#6B7280", "#EF4444", "#10B981", "#3B82F6"],

    images: [
        "https://i.pinimg.com/736x/87/8c/ee/878ceee47d8794274ed6ba8f44a34c6b.jpg",
        "https://i.pinimg.com/736x/3e/fb/ed/3efbed8d9160c71bbdb8b9ae6e3c8af6.jpg",
    ],

    sku: "FNB476E6-A0BC",
    tags: ["Furniture", "Office", "Gaming Chair", "Chair"],

    additionalInformation: {
        "Seat Material": "Leather",
        "Color": "Black, Brown, Grey, Green, Blue",
        "Item Weight": "25 Kilograms",
        "Dimensions": '27" × 31" × 46"',
        "Brand": "KTI Design"
    }
};

const page = async ({ params }) => {
    const Data = await params;
    const { productd_id } = Data
    return (
        <div className="flex flex-col pt-10 justify-center items-center">
            <ProductDetialSection data={product} />
            <SimilarProds1 productd_id={productd_id} />
            <ReviewsAboutProds productd_id={productd_id} />
            <ProductReviewForm productd_id={productd_id} />
            
        </div>
    )
}

export default page
