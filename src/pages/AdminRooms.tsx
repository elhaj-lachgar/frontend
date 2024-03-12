import RoomAdminContainer from "../components/RoomAdminContainer"

function AdminRooms() {
  return (
    <div className="flex flex-col gap-y-4 w-full py-10">
      <h1 className="text-center text-4xl text-gray-500">الغرف</h1>
      <div className="flex flex-col gap-y-10">
        <RoomAdminContainer/>
        <RoomAdminContainer/>
        <RoomAdminContainer/>
      </div>
    </div>
  )
}

export default AdminRooms
