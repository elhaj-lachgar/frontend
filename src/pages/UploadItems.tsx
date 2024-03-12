import IconsItem from "../components/IconsItem"

function UploadItems() {
  return (
    <div className="flex gap-y-5 flex-col">

    <div className="flex flex-col gap-y-1 w-[350px]">
    <label>الأيقونات</label>
    <IconsItem placeholder="الأيقونات"/>
    </div>
    <div className="flex flex-col gap-y-1 w-[350px]">
    <label>الهدية</label>
    <IconsItem placeholder="الهدية"/>
    </div>
    </div>
  )
}

export default UploadItems
