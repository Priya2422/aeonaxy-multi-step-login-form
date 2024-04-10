import { BiSolidCameraPlus } from "react-icons/bi";

function ImageUpload({ onUpload, image }) {
  return (
    <div className="mt-12 flex flex-col items-start mob:items-center gap-5">
      <h2 className="text-xl font-bold mob:text-center">Add an avatar</h2>
      <div className="flex gap-8 items-center mob:flex-col  ">
        {image ? (
          <div className=" w-[150px] h-[150px] semi-mob:w-[120px] semi-mob:h-[120px] rounded-full overflow-hidden">
            <img
              src={image}
              alt="Uploaded"
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden semi-mob:w-[120px] semi-mob:h-[120px] flex items-center justify-center border-dashed border-2 border-gray-300">
            <BiSolidCameraPlus className="text-2xl text-gray-400" />
          </div>
        )}
        <div className="flex flex-col justify-between gap-6 mob:items-center">
          <>
            <input
              type="file"
              className="hidden"
              id="uploadInput"
              onChange={onUpload("image")}
            />
            <label
              htmlFor="uploadInput"
              className="bg-white font-medium text-black p-2 rounded-lg border cursor-pointer w-3/5 text-center"
            >
              Choose image
            </label>
          </>
          <p className="text-gray-400 font-medium">
            {" "}
            {">"}Or choose one of our defaults
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
