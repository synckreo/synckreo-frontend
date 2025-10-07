import { Button } from "../buttons/Button";
import savedIcon from '../../../assets/icons/saved.svg';

export const HomeOwnerCard = ({
    image,
    name,
    headline,
    about,
    description,
}) => {
  return (
    <div className="bg-gray-100 p-4 w-full rounded-lg">
      <div className="flex justify-between mb-2">
        <img src={image} alt={"Avatar"} className="w-10 h-10 rounded-full mx-2" />
        <div className="mt-2">
            <span className="font-semibold float-start flex">{name}</span>
        </div>
        <div className="justify-end gap-2 flex ms-auto">
          <Button
            icon={<img src={savedIcon} alt="Saved" />}
            variant="outline"
            className="float-end"
          />
          <Button
            title={'View Bids'}
            variant="solid"
            className="float-end"
          />
        </div>
      </div>
      <div className="flex flex-col mt-2 gap-2">
        <span className="text-orange-400 font-bold text-xl">{headline}</span>
        <span className="text-lg font-semibold">{about}</span>
        <span className="text-gray-600 text-sm">{description}</span>
      </div>
    </div>
  );
};
