export const BidReviewsCard = ({
    companyName,
    avatar,
    hourlyRate,
    location,
    averageReplyTime,
    rating,
}) => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src={avatar} alt={`${companyName} Avatar`} className="w-12 h-12 rounded-full mb-4" />
            <h2 className="text-lg font-semibold mb-2">{companyName}</h2>
            <p className="mb-1">Hourly Rate: ${hourlyRate}</p>
            <p className="mb-1">Location: {location}</p>
            <p className="mb-1">Average Reply Time: {averageReplyTime} hours</p>
            <p className="mb-1">Rating: {rating} / 5</p>
        </div>
    );
}