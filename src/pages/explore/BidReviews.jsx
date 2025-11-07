import React from 'react';
import { bidReviewsdata } from '../../assets/dummy/bidreviews';
import { BidReviewsCard } from '../../components/ui/card/BidReviews';

export const BidReviews = () => {
    return (
        <>
            <div className='grid grid-cols-2 gap-4 mt-24'>
                <div>
                    <header>
                        <h1>Project Proposal</h1>
                    {bidReviewsdata.map((bid) => (
                            <BidReviewsCard
                                key={bid.id}
                                companyName={bid.companyName}
                                avatar={bid.avatar}
                                hourlyRate={bid.hourlyRate}
                                location={bid.location}
                                averageReplyTime={bid.averageReplyTime}
                                rating={bid.rating}
                            />
                        ))}
                    </header>
                </div>
                <div>
                    <header>
                        <h1>Details </h1>
                    </header>
            </div>
            </div>
        </>
    );
}
