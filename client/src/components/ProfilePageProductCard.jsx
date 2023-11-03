import React from "react";

const ProfilePageProductCard = ({
  category,
  desc,
  image,
  isApproved,
  name,
  price,
}) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 m-2 sm:m-4 lg:m-6 xl:m-8 flex gap-4">
      <div>
        <img
          src={image}
          alt={name}
          className="w-full h-32 object-cover rounded-md"
        />
      </div>
      <div className="mt-2">
        <div className="text-gray-600 text-sm">{category}</div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-700 mt-2">{desc}</p>
        <div className="mt-4 flex justify-between items-center gap-5">
          <div className="text-lg font-semibold text-indigo-600">${price}</div>
          <div>
            {isApproved ? (
              <span className="bg-green-500 text-white rounded-full px-2 py-1 text-sm">
                Approved
              </span>
            ) : (
              <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm">
                Not Approved
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageProductCard;
