const user = {
  profile: "/avatar.webp",
  email: "user@example.com",
  createdAt: "2013-02-20",
};

function Profile() {
  return (
    <div className="flex border  w-[80%] md:w-[70%]  mx-auto flex-col px-3 py-2 md:py-4 mt-10 shadow-md h-fit rounded-lg bg-white">
      <div className="flex flex-col gap-y-2 ">
        <img
          src={user?.profile || "/user/avatar.jpg"}
          className="w-[40px] h-[40px] rounded-full border"
        />
        <div className="flex flex-col md:flex-row md:gap-x-5 gap-y-2 font-medium text-gray-500">
          <p>
            <span className="text-black font-semibold text-lg">
              Email :{"  "}
            </span>{" "}
            {user.email.substring(0, 22)}
          </p>
          <p>
            <span className="text-black font-semibold text-lg">Join : </span>{" "}
            {user.createdAt}
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Profile;
